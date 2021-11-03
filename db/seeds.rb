# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.destroy_all
Direction.destroy_all
Recipe.destroy_all
User.destroy_all

@admin = User.create!(username: 'irock', email: 'irock@email.com', password: '123456')

puts "#{User.count} users created"


   @pbj = Recipe.create!(name: 'pbj', time: '5 mins', difficulty: 'very easy', description: 'this food is good', image_url: 'image.png',  user: @admin)

   @eggs = Recipe.create!(name: 'scrambled eggs', time: '5 mins', difficulty: 'easy', description: 'these are eggs', image_url: 'image2.png',  user: @admin)

   @tuna = Recipe.create!(name: 'Ahi Tuna', time: '20 mins', difficulty: 'Hard', description: 'Ahi tuna is greate for appetizer or a salad. You can crust the outside with seseame seeds or peppercorns. It is usually served raw in the middle, but feel free to cook to your prefference', image_url: 'image3.png',  user: @admin)

puts "#{Recipe.count} recipes created"

Ingredient.create!(name: '2 slices of bread', recipe: @pbj)
Ingredient.create!(name: '1oz peanut butter', recipe: @pbj)
Ingredient.create!(name: '1oz strawberry jelly', recipe: @pbj)

Ingredient.create!(name: '2 whole eggs', recipe: @eggs)
Ingredient.create!(name: '2tbsp butter', recipe: @eggs)

Ingredient.create!(name: '1tbsp neutral oil', recipe: @tuna)
Ingredient.create!(name: '1lb Sushi Grade Tuna', recipe: @tuna)
Ingredient.create!(name: '1/2c butcher ground peppercors', recipe: @tuna)
Ingredient.create!(name: '1/2c seseame seeds', recipe: @tuna)
Ingredient.create!(name: '1/2oz soy sauce', recipe: @tuna)
Ingredient.create!(name: '1/4oz rice wine vinegear', recipe: @tuna)

puts "#{Ingredient.count} ingredients created"

Direction.create!(content: 'toast bread', recipe: @pbj)
Direction.create!(content: 'spread peanut butter', recipe: @pbj)
Direction.create!(content: 'spread jelly', recipe: @pbj)

Direction.create!(content: 'scramblin!', recipe: @eggs)

Direction.create!(content: 'Coat tuna in seseame seeds and peppercorns throughly. Heat your oil in a cast iron skillet to smoking level. Get a good sear on the tuna for about 2-5 minutes or less, depending on the thickness of the tuna. Place on a cooling rack and place in the refridgerator to cool.', recipe: @tuna)

puts "#{Direction.count} directions created"