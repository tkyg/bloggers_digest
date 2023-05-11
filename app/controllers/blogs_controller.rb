class BlogsController < ApplicationController
  
  skip_before_action :authenticate_user

  def index
    render json: Blog.all, status: :ok
  end

  def show
    @blog = Blog.find_by(id:params[:id])
    if @blog 
      render json: @blog, status: :ok
    else
      render json: { error: "Blog not found"}, status: :not_found
    end
  end

  def create
    blog = current_user.blogs.create(blog_params)
    if blog.valid?
      render json: blog, status: :created
    else
      render json: { errors: blog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    blog = Blog.find_by(id:params[:id])
    if blog.update(blog_params)
      render json: blog, status: :accepted
    else
      render json: { error: blog.errors }, status: :unprocessable_entity
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

  def blog_length
    # word = params[:number]
    # byebug
    # result = Blog.where('length(content) >= ?', word.to_i)
    result = Blog.where('length(content) >= ?', (params[:number]).to_i)
    render json: result
  end

  private

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  def blog_params
    params.permit(:title, :content, :created_at)
  end
end

# go though blogs content and return blogs that have content characters more than 50. 
