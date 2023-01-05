class BlogsController < ApplicationController
  # need to edit this skip before action
  skip_before_action :authenticate_user, only: [:index, :show, :create, :update, :destroy]

  def index
    blogs = current_user.blogs
    render json: blogs, status: :ok
  end

  def show
    blog = Blog.find_by(id:params[:id])
    if blog
      render json: blog, status: :ok
    else
      render json: { error: "Blog not found" }, status: :not_found
    end
  end

  # def show 
  #   blog = current_user.blogs.find_by(id: params[:id])
  #   if blog
  #     render json: blog, status: :ok
  #   else
  #     render json: { error: "Blog not found" }, status: :unauthorized
  #   end
  # end

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

  def destroy
    blog = Blog.find_by(id:params[:id])
    if blog
      blog.destroy
      head :no_content
    else
      render json: { error: "Blog not found" }, status: :not_found
    end
  end

  private
  def blog_params
    params.permit(:title, :content)
  end
end
