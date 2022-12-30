class BlogsController < ApplicationController
  # need to edit this skip before action
  skip_before_action :authenticate_user, only: [:index, :show, :create, :update]

  def index
    render json: Blog.all, status: :ok
  end

  def show
    blog = Blog.find_by(id:params[:id])
    if blog
      render json: blog, status: :ok
    else
      render json: { error: "Blog not found" }, status: :not_found
    end
  end

  def create
    blog = Blog.new(blog_params)
    if blog.save
      render json: blog, status: :created
    else
      render json: {errors: blog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    blog = Blog.find_by(id:params[:id])
    if blog
      blog.update(blog_params)
      render json: blog, status: :accepted
    else
      render json: { error: "Blog not found" }, status: :not_found
    end
  end




  private
  def blog_params
    params.permit(:title, :content)
  end
end
