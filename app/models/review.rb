class Review < ApplicationRecord
  belongs_to :user
  belongs_to :blog
  
  validates :comment, presence: true, length: { minimum: 3, message: "write something to submit a comment" }
end
