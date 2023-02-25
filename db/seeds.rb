u# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# a more optimal way because it doesn't have to parse through the object to get the id. 
# Review.create(comment: "The dumplings", blog_id: b1.id, user_id: user1.id)
puts "🐕 Seeding data..."

Blog.destroy_all
Review.destroy_all
User.destroy_all

user1 = User.create(username: "Test1", password: "1234")
user2 = User.create(username: "Test2", password: "4321")

b1 = Blog.create(title: "Wine Pairing: A Beginner's Guide", content: "Pairing wine with food...", user: user2)
b2 = Blog.create(title: "Photography 101", content: "Clicking a good picture...", user: user1)
b3 = Blog.create(title: "Beef Dumpling Recipe", content: "Dumplings are my favorite...", user: user2)

review_1 = Review.create(comment: "This Wine Pairing blog was awesome", blog: b1, user: user1)
review_2 = Review.create(comment: "The instructions for photography 101 was detailed", blog: b2, user: user2)
review_3 = Review.create(comment: "The dumplings came out awesome", blog: b3, user: user1)
review_4 = Review.create(comment: "This dumpling recipe is the best", blog: b3, user: user1)

puts "✅ Done seeding!"