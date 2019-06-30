class ApplicationController < ActionController::Base
  def home
    redirect_to about_path
  end

  def about
  end

  def contact
  end

  def resume
  end

  def projects
  end
end
