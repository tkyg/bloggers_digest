class ReviewsController < ApplicationController

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

  
end
