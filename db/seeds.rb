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


   @pbj = Recipe.create!(name: 'pbj', time: '5 mins', difficulty: 'very easy', description: 'this food is good', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636037541/upcook/pbj_klyut1.jpg', user: @admin)

   @eggs = Recipe.create!(name: 'scrambled eggs', time: '5 mins', difficulty: 'easy', description: 'these are eggs', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636037735/upcook/scrambled-eggs-1_plvtz5.jpg',  user: @admin)

   @tuna = Recipe.create!(name: 'Ahi Tuna', time: '20 mins', difficulty: 'Hard', description: 'Ahi tuna is greate for appetizer or a salad. You can crust the outside with seseame seeds or peppercorns. It is usually served raw in the middle, but feel free to cook to your prefference', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636037733/upcook/Ahi-Tuna-Steaks-square_mbok1m.jpg',  user: @admin)

puts "#{Recipe.count} recipes created"

# Ingredient.create!(name: '2 slices of bread', recipe: @pbj)
# Ingredient.create!(name: '1oz peanut butter', recipe: @pbj)
# Ingredient.create!(name: '1oz strawberry jelly', recipe: @pbj)

# Ingredient.create!(name: '2 whole eggs', recipe: @eggs)
# Ingredient.create!(name: '2tbsp butter', recipe: @eggs)

# Ingredient.create!(name: '1tbsp neutral oil', recipe: @tuna)
# Ingredient.create!(name: '1lb Sushi Grade Tuna', recipe: @tuna)
# Ingredient.create!(name: '1/2c butcher ground peppercors', recipe: @tuna)
# Ingredient.create!(name: '1/2c seseame seeds', recipe: @tuna)
# Ingredient.create!(name: '1/2oz soy sauce', recipe: @tuna)
# Ingredient.create!(name: '1/4oz rice wine vinegear', recipe: @tuna)

# puts "#{Ingredient.count} ingredients created"

# Direction.create!(content: 'toast bread', recipe: @pbj)
# Direction.create!(content: 'spread peanut butter', recipe: @pbj)
# Direction.create!(content: 'spread jelly', recipe: @pbj)

# Direction.create!(content: 'scramblin!', recipe: @eggs)

# Direction.create!(content: 'Coat tuna in seseame seeds and peppercorns throughly. Heat your oil in a cast iron skillet to smoking level. Get a good sear on the tuna for about 2-5 minutes or less, depending on the thickness of the tuna. Place on a cooling rack and place in the refridgerator to cool.', recipe: @tuna)

# puts "#{Direction.count} directions created"

Blog.create!(title: 'how to break down a whole chicken', tagline: 'its easier than it clucks', content: 'Bacon ipsum dolor amet tenderloin short loin pastrami bacon chislic jerky boudin alcatra jowl strip steak. Jowl frankfurter capicola, prosciutto rump pig ball tip andouille pork. Bresaola turkey shoulder shankle, doner filet mignon picanha prosciutto cupim chicken ribeye. Buffalo swine ribeye, flank kielbasa fatback ham beef ribs short ribs shank venison cupim drumstick andouille. Pork loin venison ball tip boudin leberkas pork belly. Sausage swine tongue tri-tip. Ham hock tail leberkas sausage, cow shoulder kielbasa meatloaf corned beef.

   Tail pastrami prosciutto, tenderloin bresaola sirloin pancetta short loin pork t-bone swine landjaeger. Spare ribs fatback swine ribeye ground round, salami chicken burgdoggen strip steak picanha landjaeger tail. T-bone tongue ribeye, bacon boudin swine ball tip pork belly pork chop picanha hamburger pig ham. Salami alcatra buffalo drumstick beef pork loin.
   
   Alcatra jerky buffalo, pancetta pork chop chislic biltong tri-tip tongue. Strip steak shoulder burgdoggen andouille kielbasa ball tip picanha venison. Shank meatloaf ball tip tri-tip boudin. Chicken jowl short ribs bresaola. Swine chuck ham hock fatback kielbasa, cow kevin ham buffalo. Spare ribs cupim tongue chuck beef pig brisket pastrami shoulder sausage drumstick prosciutto swine. Frankfurter picanha chislic ball tip tongue meatball hamburger short ribs pork loin swine ground round jowl.', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636073579/upcook/raw-chicken-cut-pieces-9527103_jfhwoj.jpg', user: @admin)

   Blog.create!(title: 'Essential spices for your spice rack', tagline: 'The building blocks of something great', content: 'Cupcake ipsum dolor sit amet chocolate cake I love. Marshmallow caramels I love I love chocolate bar cookie. Brownie chocolate cake I love I love icing. Tiramisu gingerbread I love jelly beans tart cotton candy sesame snaps cupcake chocolate bar. I love sugar plum tart carrot cake tiramisu I love dragée. Caramels muffin carrot cake croissant icing.
      Cotton candy I love cotton candy muffin chocolate cake cake cupcake. Tiramisu shortbread ice cream bear claw pie wafer chocolate carrot cake lemon drops. Donut sugar plum I love I love tart marzipan. Cookie gummies gingerbread cake sesame snaps. Cake fruitcake icing lemon drops cake jelly I love lollipop. Sweet tart jelly cookie marshmallow lollipop candy croissant.
      Muffin fruitcake cheesecake gummi bears tootsie roll dragée gingerbread tootsie roll cotton candy. Bear claw cotton candy cookie bonbon lollipop dragée sugar plum. Shortbread cookie powder lemon drops I love sweet roll. Tootsie roll jujubes jelly beans topping gummi bears marshmallow danish. Lemon drops bonbon jujubes lemon drops croissant pastry. Bear claw wafer carrot cake tootsie roll apple pie oat cake marshmallow gingerbread icing.', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636073527/upcook/spices_h68dfl.jpg', user: @admin)

      Blog.create!(title: 'Smoking meats 101', tagline: 'Smoke me if you got em', content: 'Bacon ipsum dolor amet tenderloin short loin pastrami bacon chislic jerky boudin alcatra jowl strip steak. Jowl frankfurter capicola, prosciutto rump pig ball tip andouille pork. Bresaola turkey shoulder shankle, doner filet mignon picanha prosciutto cupim chicken ribeye. Buffalo swine ribeye, flank kielbasa fatback ham beef ribs short ribs shank venison cupim drumstick andouille. Pork loin venison ball tip boudin leberkas pork belly. Sausage swine tongue tri-tip. Ham hock tail leberkas sausage, cow shoulder kielbasa meatloaf corned beef.

         Tail pastrami prosciutto, tenderloin bresaola sirloin pancetta short loin pork t-bone swine landjaeger. Spare ribs fatback swine ribeye ground round, salami chicken burgdoggen strip steak picanha landjaeger tail. T-bone tongue ribeye, bacon boudin swine ball tip pork belly pork chop picanha hamburger pig ham. Salami alcatra buffalo drumstick beef pork loin.
         
         Alcatra jerky buffalo, pancetta pork chop chislic biltong tri-tip tongue. Strip steak shoulder burgdoggen andouille kielbasa ball tip picanha venison. Shank meatloaf ball tip tri-tip boudin. Chicken jowl short ribs bresaola. Swine chuck ham hock fatback kielbasa, cow kevin ham buffalo. Spare ribs cupim tongue chuck beef pig brisket pastrami shoulder sausage drumstick prosciutto swine. Frankfurter picanha chislic ball tip tongue meatball hamburger short ribs pork loin swine ground round jowl.', image_url: 'https://res.cloudinary.com/dbdrox2p9/image/upload/v1636074197/upcook/smoking_bcelfx.jpg', user: @admin)

         puts "#{Blog.count} blogs created"