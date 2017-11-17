class WelcomeController < ApplicationController 
  def users
    render "users.json"
  end
end
