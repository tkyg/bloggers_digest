class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :blogs, through: :reviews
  # has_many :reviewed_blogs, through: :reviews, source: :blog
  has_many :blogs

  
  has_secure_password
  validates :username, presence: true, uniqueness: true
  
end
