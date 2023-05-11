Rails.application.routes.draw do
  
  # resources :blogs, only: [:index, :show, :create, :update, :destroy]
  resources :blogs do
    resources :reviews, only: [:create]
  end
  
  resources :reviews, only: [:index, :show]

  get "/blogs/length/:number", to: 'blogs#blog_length'

  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"

  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


