class BlogsController < ApplicationController
  
  # skip_before_action :authenticate_user, only: [:index, :show]

  # def index
  #   blogs = current_user.blogs
  #   render json: blogs, status: :ok
  # end

  def index
    render json: Blog.all, status: :ok
  end

  def show
    blog = Blog.find_by(id:params[:id])
    if blog 
      render json: blog, status: :ok
    else
      render json: { error: "Blog not found"}, status: :not_found
    end
  end

  # def show
  #   blog = current_user.blogs.find_by(id:params[:id])
  #   if blog
  #     render json: blog, status: :ok
  #   else
  #     render json: { error: "Blog not found" }, status: :unauthorized
  #   end
  # end

  def create #POST
    blog = current_user.blogs.create(blog_params)
    if blog.valid?
      render json: blog, status: :created
    else
      render json: { errors: blog.errors.full_messages }, status: :unprocessable_entity
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
  # def destroy
  #   @blog.destroy
  #   render json: @blog
  # end

  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def blog_params
    params.permit(:title, :content, :created_at)
  end
  # def blogs_params
  #   params.require(:blog).permit(:title, :content)
  # end
end
