class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user
  # has_one :user
  has_one :blog
end
