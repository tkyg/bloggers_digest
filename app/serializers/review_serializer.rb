class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes, :user
  # has_one :user
  has_one :blog
end
