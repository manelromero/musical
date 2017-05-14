class Form
  class << self
    def validate_data(payload)
      validation = { ok: false }

      if payload['name'] == ''
        validation[:message] = 'Tienes que introducir un nombre.'
        return validation
      end

      if payload['message'] == ''
        validation[:message] = 'Tienes que introducir un mensaje.'
        return validation
      end

      validation[:ok] = true
      validation[:message] = 'Mensaje enviado, gracias.'
      validation
    end

    def send_mail(payload)
      mail = Form.compose_mail(payload)
      smtp = Form.open_connection

      smtp.send_message mail,
                        'contact@desprevenidosproducciones.com',
                        'manel@manelromero.cat'
      smtp.finish
    end

    def compose_mail(payload)
      <<~MESSAGE
        From: Formulario Web <contact@desprevenidosproducciones.com>
        To: Desprevenidos Producciones <info@desprevenidosproducciones.com>
        Subject: Formulario web recibido
        Date: #{Time.now}

        Nombre
        #{payload['name']}

        Correo
        #{payload['mail']}

        Teléfono
        #{payload['phone']}

        Mensaje
        #{payload['message']}
      MESSAGE
    end

    def open_connection
      Net::SMTP.start(
        'authsmtp.desprevenidosproducciones.com',
        25,
        'contact@desprevenidosproducciones.com',
        'contact@desprevenidosproducciones.com',
        Form.password,
        :login
      )
    end

    def password
      File.open('env').read.delete("\n")
    end
  end
end
