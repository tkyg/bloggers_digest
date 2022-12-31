class ReviewsController < ApplicationController
skip_before_action :authenticate_user, only: [:index, :show, :create, :update, :destroy]

  def index
    render json: Review.all, status: :ok
  end

  def show
    review = Review.find_by(id:params[:id])
    if review
      render json: review, status: :ok
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review, status: :created
    else
      render json: {errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.permit(:likes, :comment)
  end

  
end
