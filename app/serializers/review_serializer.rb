class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :likes, :comment
  has_one :user
  has_one :blog
end
