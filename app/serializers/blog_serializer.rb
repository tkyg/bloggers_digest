class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :user
  has_many :reviews, serializer: ReviewSerializer
end
