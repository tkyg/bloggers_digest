class ReviewsController < ApplicationController
skip_before_action :authenticate_user, only: [:index, :increment_likes]

  def index
    reviews = current_user.reviews
    # reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    @review = Review.find_by(id:params[:id])
    if @review
      render json: @review
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def create
    @blog = Blog.find(params[:blog_id])
    @review = @blog.reviews.build(review_params)
    @review.user = current_user
    if @review.save
      render json: @blog
    else 
      render json: { errors: @review.errors.messages }, status: :unprocessable_entity
    end
  end

  def increment_likes
    # byebug
    review = Review.find_by(id: params[:id])
    if review 
      review.update(likes: review.likes + 1)
      render json: review
    else
      render json: {error: "review not found" }, status: :not_found
    end
  end

  private
  
  def review_params
    params.require(:review).permit(:comment, :likes)
  end
end
