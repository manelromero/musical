require 'sinatra/base'

class App < Sinatra::Base
  set :public_folder, './public/'

  get '/' do
    File.read(File.join('public', 'index.html'))
  end

  post '/' do

  end

  run! if app_file == $PROGRAM_NAME
end
