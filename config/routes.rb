Rails.application.routes.draw do
  resources :blogs
  resources :directions
  resources :ingredients
  resources :recipes
  resources :users, only: :create
  post '/ingredients/:ingredient_id/recipes/:id', to: 'recipes#add_ingredient'
  post '/directions/:direction_id/recipes/:id', to: 'recipes#add_direction'
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
