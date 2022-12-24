class User < ApplicationRecord

  has_many :reviews, dependent: :destroy
  has_many :blogs, through: :reviews
  
  has_secure_password
end
