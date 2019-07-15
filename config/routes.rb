Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_ember_app :frontend, to: "/"
    
  root "home#index"
    
  get "home", to: "home#index"
  get "first", to: "home#first"
    
  get "animals", to: "animal#index"

end
