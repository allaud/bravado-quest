Rails.application.routes.draw do
  root 'home#index'
  get '/search/*path' => 'home#index'

  namespace :api do
    namespace :v1 do
      resources :profiles, only: :index
    end
  end
end
