require 'sinatra/base'
require 'json'

class App < Sinatra::Base
  set :public_folder, 'public'

  get '/' do
    File.read(File.join('public', 'index.html'))
  end

  post '/contact' do
    payload = JSON.parse(request.body.read)
    name = payload['name']
    mail = payload['mail']
    phone = payload['phone']
    body = payload['body']

    result = {
      name: name,
      mail: mail,
      phone: phone,
      body: body
    }

    result.to_json
  end
end
