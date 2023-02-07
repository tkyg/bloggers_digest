class ReviewsController < ApplicationController
skip_before_action :authenticate_user, only: [:index, :show, :create]

  def index
    @reviews = Review.all
    render json: @reviews
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
      # .save checks validations
      # render json instead of redirect
      render json: @blog
    else 
      render json: { errors: @review.errors.messages }, status: :unprocessable_entity
    end
  end
  
  
  private
  
  def review_params
    params.require(:review).permit(:comment)
  end
end


# def update
#   review = Review.find_by(id:params[:id])
#   if review
#     review.update(review_params)
#     render json: review, status: :accepted
#   else
#     render json: { error: "Review not found" }, status: :not_found
#   end
# end

# def destroy
#   review = Review.find_by(id:params[:id])
#   if review
#     review.destroy
#     head :no_content
#   else
#     render json: { error: "Review not found" }, status: :not_found
#   end
# end

# def create
#   @review = Review.new(review_params)
#   if @review.save
#     render json: @review, status: :created
#   else
#     render json: {errors: @review.errors.full_messages }, status: :unprocessable_entity
#   end
# end

# def index
  #   render json: Review.all, status: :ok
  # end