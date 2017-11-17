Rails.application.routes.draw do
  root 'welcome#index'
  get '/users', to: 'welcome#users'
end
