Rails.application.routes.draw do
  root to: 'application#home'
  get '/about' => 'application#about'
  get '/projects' => 'application#projects'
  get '/contact' => 'application#contact'
  get '/resume' => 'application#resume'
  get '/winelog' => 'application#winelog'
  get '/parkfinder' => 'application#parkfinder'
  get '/divereport' => 'application#divereport'
end
