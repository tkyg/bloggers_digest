# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🐕 Seeding data..."

Review.destroy_all
User.destroy_all
Blog.destroy_all

test_user_1 = User.create(username: "Test 1", password: "1234")
test_user_2 = User.create(username: "Test 2", password: "4321")

b1 = Blog.create(title: "Wine Pairing: A Beginner's Guide", content: "Pairing wine with food...")
b2 = Blog.create(title: "Photography 101", content: "Clicking a good picture...")
b3 = Blog.create(title: "Beef Dumpling Recipe", content: "Dumplings are my favorite...")

review_1 = Review.create(comment: "Lorem ipsum", user: test_user_1, blog: b2)
review_2 = Review.create(comment: "Lorem ipsum ipsum", user: test_user_2, blog: b3)
review_3 = Review.create(comment: "Lorem ipsum dolor sit amet", user: test_user_1, blog: b3)

puts "✅ Done seeding!"