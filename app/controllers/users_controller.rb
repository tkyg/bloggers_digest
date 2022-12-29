class UsersController < ApplicationController

  skip_before_action :authenticate_user, only: [:create]

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
