# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1)this is the controller for the app
class BlogPostsController < ApplicationController
  def index
    # 2) The index is used to view all the entries that are in the database
    @posts = BlogPost.all
  end

  def show
    # 3)This method allows the user to look into an entry thats specified
    @post = BlogPost.find(params[:id])
  end

  # 4)This will take the user to a new page
  def new
    @post = Post.new
  end

  def create
    # 5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6)its used to update an entry
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7)if the destroy doesnt go through they will be redirected to he post they tried to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) this method can only be called  inside the class it is defined
  private
  def blog_post_params
    # 9)this makes it so the key pairs allowed will be the :title, :content
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10)This is linked to another model called comments 
  has_many :comments
end
