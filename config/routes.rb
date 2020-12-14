Rails.application.routes.draw do
  root 'welcome#index'
  get '/users', to: 'welcome#users'
  get '/*path', to: 'welcome#index', format: false
end
