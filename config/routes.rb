Rails.application.routes.draw do

  resources :farmers, only: [:index]
  root "static#index"

end
