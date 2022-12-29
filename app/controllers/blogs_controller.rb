class BlogsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  def create
    blog = Blog.new(blog_params)
    if blog.save
      render json: blog, status: :created
    else
      render json: {errors: blog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def blog_params
    params.permit(:title, :content)
  end
end
