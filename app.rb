require 'sinatra/base'
require 'net/smtp'
require 'json'
require_relative 'mail'

class App < Sinatra::Base
  set :public_folder, 'public'

  get '/' do
    File.read(File.join('public', 'index.html'))
  end

  post '/contact' do
    payload = JSON.parse(request.body.read)
    result = Form.validate_data(payload)
    # Form.send_mail(payload) if result[:ok]
    result.to_json
  end
end
