class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  #POST '/login'
  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid Username or Password"]}, status: :unprocessable_entity
    end
  end

  # DELETE '/logout'
  def destroy
    session.delete :user_id
    render json: { message: "You have been logged out" }
  end
end
