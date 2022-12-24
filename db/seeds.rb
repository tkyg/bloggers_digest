# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🐕 Seeding data..."

User.destroy_all

test_user_1 = User.create(username: "Test 1", password: "1234")
test_user_2 = User.create(username: "Test 2", password: "4321")

puts "✅ Done seeding!"