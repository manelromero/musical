require 'sinatra/base'
require 'net/smtp'
require 'json'

class App < Sinatra::Base
  set :public_folder, 'public'

  get '/' do
    File.read(File.join('public', 'index.html'))
  end

  post '/contact' do
    payload = JSON.parse(request.body.read)
    mail = compose_mail(payload)
    open_connection
    send_mail(mail)
    ''.to_json
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
      #{payload['body']}
    MESSAGE
  end

  def password
    File.open('.env').read.delete("\n")
  end

  def open_connection
    @smtp = Net::SMTP.start(
      'authsmtp.desprevenidosproducciones.com',
      25,
      'contact@desprevenidosproducciones.com',
      'contact@desprevenidosproducciones.com',
      password,
      :login
    )
  end

  def send_mail(mail)
    @smtp.send_message mail,
                       'contact@desprevenidosproducciones.com',
                       'manel@manelromero.cat'
    @smtp.finish
  end
end
