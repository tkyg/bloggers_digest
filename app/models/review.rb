class Review < ApplicationRecord
  belongs_to :user
  belongs_to :blog
  
  validates :comment, presence: true, length: { minimum: 3, message: "write a little more" }
end
