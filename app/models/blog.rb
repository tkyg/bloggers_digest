class Blog < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
  belongs_to :user
  
  validates :title, presence: true
  validates :content, presence: true, length: { minimum: 10 }

end
