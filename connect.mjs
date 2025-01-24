import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = new sqlite3.Database(
    "./eshopMockupData.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) =>{
        if(err) {
            return console.error(err.message);
        } 
        console.log("Database created successfully.")
    }
)

db.serialize(() => {

    db.run(
        `CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            product_name TEXT,
            product_category TEXT,
            product_description TEXT,
            price REAL,
            amount_in_stock INTEGER
        )`,
        (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log("Created products table.");


            
            
                db.exec(
                    `
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('1', 'Mini Food Processor', 'Kitchen', 'Compact food processor for quick meal prep.', '39.99', '8');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('10', 'Multi-Function Smartphone Holder', 'Electronics', 'Versatile holder that can be used on desks, cars, and more.', '12.99', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('100', 'Leather Wallet', 'Accessories', 'Genuine leather wallet with multiple compartments.', '49.99', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('11', 'Repair Tool Set for Home Improvement', 'Tools', 'Small toolkit with essentials for home repairs.', '29.99', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('12', 'Foot Spa Bath Massager', 'Health', 'Relax and soothe tired feet with this foot spa.', '59.99', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('13', 'Sculpting Kit', 'Art Supplies', 'Complete sculpting tools for artists.', '25.99', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('14', 'LED Flashlight', 'Outdoor', 'Bright LED flashlight with adjustable beam.', '19.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('15', 'Pressure Cooker', 'Kitchen', 'Instant pressure cooker with multiple cooking settings.', '89', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('16', 'LED Desk Lamp with USB Charging Port', 'Office', 'Modern lamp featuring a USB port for convenient charging.', '29.99', '15');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('17', 'Electric Wax Warmer', 'Home', 'Wax warmer for creating a soothing atmosphere with fragrances.', '22.99', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('18', 'Savory Mushroom Risotto', 'Food - Gourmet Rice', 'Creamy risotto infused with wild mushrooms.', '6.49', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('19', 'Lightweight Workout Tank', 'Clothing - Activewear', 'Breathable tank top perfect for workouts or casual wear.', '29.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('2', 'Vegetable Lentil Soup', 'Food - Canned Goods', 'A hearty soup made with lentils, a variety of vegetables, and spices, ideal for a nutritious meal.', '3.49', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('20', 'Lemon Sorbet', 'Food - Frozen Desserts', 'Refreshing sorbet with a zesty lemon flavor.', '4.99', '8');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('21', 'Smartphone Tripod with Remote', 'Photography', 'Adjustable tripod with remote shutter for smartphones.', '29.99', '23');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('22', 'Sweet Potato Noodles', 'Food - Pasta', 'Pasta alternative made from sweet potatoes, gluten-free and rich in flavor.', '3.79', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('23', 'Chicken Fajita Kit', 'Food - Prepared Foods', 'All ingredients included for delicious chicken fajitas.', '8.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('24', 'Chickpea Salad', 'Food - Prepared Foods', 'A ready-to-eat salad made with chickpeas and veggies.', '5.49', '30');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('25', 'LED Canopy Lights', 'Outdoor', 'Energy-efficient lights to illuminate outdoor areas.', '29.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('26', 'Pet Water Fountain with Filtration', 'Pets', 'Continuous stream of fresh water for pets, promoting hydration.', '39.99', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('27', 'Smartphone Photography Tripod', 'Electronics', 'Lightweight tripod designed for smartphone photography.', '29.99', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('28', 'Whipped Cream Cheese', 'Food - Dairy', 'Light and fluffy cream cheese, perfect for bagels or cooking.', '2.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('29', 'Compact Dishwasher', 'Home Appliances', 'Countertop dishwasher for small kitchens.', '299.99', '10');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('3', 'Stick Vacuums Cleaner', 'Home Appliances', 'Cordless vacuum cleaner for quick clean-ups.', '129.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('30', 'Sliced Bell Peppers', 'Food - Fresh Produce', 'Fresh sliced bell peppers for salads or stir-fries.', '3.99', '12');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('31', 'LED Flashing Pet Collar', 'Pets', 'Safety collar with flashing lights for pets during night walks.', '14.99', '8');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('32', 'Electric Can Opener', 'Kitchen', 'Automatic can opener for easy meal prep.', '29.99', '23');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('33', 'Hummus Trio Pack', 'Food - Snacks', 'A variety pack of classic, roasted red pepper, and garlic hummus.', '5.49', '5');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('34', 'Smart Doorbell', 'Smart Home', 'Wi-Fi enabled doorbell with HD camera and two-way audio.', '119.99', '14');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('35', 'Lentil Vegetable Stew', 'Food - Canned Soups', 'Hearty stew made with lentils and mixed vegetables, vegan-friendly.', '4.49', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('36', 'Coconut Chips', 'Food - Snacks', 'Crunchy, toasted coconut chips for snacking.', '3.59', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('37', 'Electric Toothbrush Holder', 'Health', 'Sanitary holder that ensures your toothbrush stays clean.', '14.99', '14');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('38', 'Garlic Naan Bread', 'Food - Bakery', 'Soft and delicious garlic-infused flatbread, perfect for dipping.', '3.99', '25');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('39', 'White Rice', 'Food - Grains', 'Plain white rice, a staple for any meal.', '1.49', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('4', 'Oven-Baked Cheese Crisps', 'Food - Snacks', 'Crispy cheese snacks that melt in your mouth.', '3.99', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('40', 'Spicy Thai Noodles', 'Food - Frozen Meals', 'Instant noodles with a spicy Thai sauce for quick meals.', '1.99', '24');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('41', 'Tennis Racket', 'Fitness', 'Lightweight tennis racket for beginners and advanced players.', '89.99', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('42', 'Whole Wheat Bread', 'Food - Bakery', 'Freshly baked whole wheat bread, rich in fiber.', '2.49', '3');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('43', 'Durable Hiking Boots', 'Footwear', 'Comfortable and rugged boots designed for hiking.', '89.99', '19');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('44', 'Adjustable Bar Stools', 'Furniture', 'Stylish bar stools with adjustable height and swivel features.', '149.99', '10');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('45', 'Egg Noodles', 'Food - Grains', 'Wide egg noodles, perfect for casseroles and soups.', '2.29', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('46', 'Honey Garlic Sauce', 'Food - Sauces', 'A delicious sauce perfect for stir-frying or glazing meats.', '2.59', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('47', 'LED Christmas Lights', 'Home', 'Eco-friendly LED lights for festive decorations.', '29.99', '21');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('48', 'Self-Adhesive Wallpaper', 'Home', 'Peel and stick wallpaper for easy home decor changes.', '34.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('49', 'Kids'' Learning Tablet', 'Electronics', 'Educational tablet designed for preschool-age children.', '129.99', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('5', 'Sweet Potatoes', 'Food - Produce', 'Sweet and nutritious potatoes, great for roasting.', '0.89', '7');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('50', 'Wall-Mounted Spice Rack', 'Kitchen', 'Space-saving rack to store and organize spices conveniently.', '39.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('51', 'Oven-Baked Potato Chips', 'Food - Snacks', 'Light and crispy baked potato chips in assorted flavors.', '2.79', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('52', 'Cinnamon Sugar Popcorn', 'Food - Snacks', 'Sweet popcorn coated in a mixture of cinnamon and sugar.', '2.89', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('53', 'Coconut Milk Ice Cream', 'Food - Frozen Desserts', 'Dairy-free ice cream made with coconut milk, creamy and delicious.', '6.99', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('54', 'Digital Voice Recorder', 'Electronics', 'High-quality voice recorder for lectures and meetings.', '49.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('55', 'Himalayan Pink Salt', 'Food - Condiments', 'Natural mineral salt with a subtle flavor, ideal for cooking and seasoning.', '1.99', '0');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('56', 'Teriyaki Beef Jerky', 'Food - Snacks', 'Savory and chewy beef jerky with teriyaki flavor.', '5.49', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('57', 'Picnic Blanket', 'Outdoor', 'Waterproof picnic blanket for outdoor fun.', '29.99', '7');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('58', 'Mediterranean Couscous Salad', 'Food - Salads', 'Couscous salad with cucumbers, tomatoes, feta, and olives, ready to eat.', '5.49', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('59', 'Personalized Pet ID Tags', 'Pets', 'Custom engraved ID tags for pets with your contact information.', '9.99', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('6', 'Adjustable Stand for Tablets and Smartphones', 'Electronics', 'Multi-angle stand for easy viewing of devices.', '19.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('60', 'Sliced Avocado', 'Food - Produce', 'Ready-to-eat avocado slices, perfect for tacos.', '2.79', '5');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('61', 'Italian Herb Balsamic Marinade', 'Food - Condiments', 'A rich marinade perfect for meats and vegetables, infused with Italian herbs and balsamic vinegar.', '3.99', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('62', 'Car Diagnostic Scanner', 'Automotive', 'Tool to check car engine codes and performance issues.', '49.99', '10');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('63', 'Almond Joy Snack Bars', 'Food - Snacks', 'Chewy snack bars with coconut and almonds coated in chocolate.', '2.99', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('64', 'Pasta (Fusilli)', 'Food - Pasta', 'Twisted pasta perfect for salads and pasta dishes.', '1.79', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('65', 'Smart Plug', 'Smart Home', 'Wi-Fi enabled plug for controlling devices from your smartphone.', '19.99', '8');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('66', 'Miso Soup Starter', 'Food - Soups', 'Miso paste for making traditional Japanese miso soup.', '2.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('67', 'Collapsible Pet Dog Bowl', 'Pets', 'Travel-friendly dog bowl that is collapsible for easy storage.', '9.99', '8');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('68', 'French Bread', 'Food - Bakery', 'Freshly baked French baguette, perfect for dipping.', '2.49', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('69', 'Digital Thermostat', 'Home', 'Programmable digital thermostat for home heating.', '59.99', '2');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('7', 'Floral Wrap Top', 'Clothing - Tops', 'A feminine wrap top with a beautiful floral print.', '49.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('70', 'Brazil Nuts', 'Food - Nuts', 'Rich in selenium, perfect for snacking or baking.', '10.99', '15');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('71', 'Foldable Picnic Table', 'Outdoor', 'Lightweight and portable picnic table for outdoor use.', '49.99', '10');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('72', 'Electric Milk Frother', 'Kitchen', 'Handheld frother for creating frothed milk for coffee.', '19.99', '12');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('73', 'Kettle Chip Variety Pack', 'Food - Snacks', 'A crunchy collection of flavored kettle chips in a convenient pack.', '3.99', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('74', 'Garlic Parmesan Roasted Potatoes', 'Food - Sides', 'Oven-roasted potatoes tossed in garlic and parmesan cheese seasoning.', '3.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('75', 'Cauliflower Crust Pizza', 'Food - Freezer', 'A gluten-free pizza crust made from cauliflower.', '7.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('76', 'Fitness Foam Roller', 'Fitness', 'High-density foam roller for muscle recovery.', '29.99', '18');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('77', 'Heated Throw Blanket', 'Home', 'Soft blanket that provides warmth with adjustable settings.', '49.99', '19');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('78', 'Electric Milk Frother', 'Kitchen', 'Handheld frother for creating frothed milk for coffee.', '19.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('79', 'Leather Biker Jacket', 'Clothing - Outerwear', 'Stylish black leather jacket featuring a zip-up front and multiple pockets.', '129.99', '20');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('8', 'Maple Breakfast Sausage', 'Food - Meat', 'Savory sausage links with a hint of maple flavor.', '5.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('80', 'Pasta Sauce Mix', 'Food - Sauces', 'Just add water for a quick pasta sauce.', '1.29', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('81', 'Spicy Vegetable Sushi Rolls', 'Food - Prepared Foods', 'Vegan sushi filled with spicy vegetables and avocado.', '8.49', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('82', 'Pumpkin Spice Granola', 'Food - Breakfast', 'Crunchy granola with pumpkin spice flavor.', '4.99', '14');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('83', 'Buttermilk Pancakes', 'Food - Breakfast', 'Fluffy pancakes with buttermilk flavor.', '3.99', '21');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('84', 'Organic Granola Cereal', 'Food - Breakfast', 'Crunchy granola made with organic oats', '5.99', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('85', 'Himalayan Salt Grinder', 'Food - Spices', 'Natural pink salt, perfect for seasoning.', '4.99', '12');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('86', 'Lemon Pepper Seasoning', 'Food - Seasonings', 'A zesty seasoning for meats and vegetables', '3.29', '5');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('87', 'Cauliflower Crust Pizza', 'Food - Freezer', 'A gluten-free pizza crust made from cauliflower.', '7.99', '17');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('88', 'Buffalo Cauliflower Wings', 'Food - Frozen Foods', 'Crispy cauliflower bites tossed in spicy buffalo sauce.', '6.99', '9');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('89', 'Chocolate Protein Powder', 'Food - Supplements', 'Rich chocolate protein powder for smoothies and baking.', '24.99', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('9', 'Herb Drying Rack', 'Garden', 'Mesh drying rack for preserving herbs and flowers.', '22.99', '16');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('90', 'Wine Glasses', 'Home', 'Set of elegant wine glasses for special occasions.', '29.99', '10');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('91', 'Indoor Plants', 'Garden', 'Assorted indoor plants for home decor.', '19.99', '14');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('92', 'Outdoor Mosquito Repellent Lantern', 'Outdoor', 'Lantern that repels mosquitoes while providing light.', '34.99', '11');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('93', 'Aeropress Coffee Maker', 'Kitchen', 'Portable coffee maker for rich brews on the go.', '29.99', '6');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('94', 'Pet Bed with Removable Cover', 'Pets', 'Comfy pet bed with washable cover for easy cleaning.', '49.99', '25');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('95', 'Sliced Provolone Cheese', 'Food - Dairy', 'Mild cheese great for sandwiches.', '3.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('96', 'Flavored Rice Cakes', 'Food - Snacks', 'Light and crunchy rice cakes with a variety of flavors.', '2.49', '18');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('97', 'Honey Sesame Chicken', 'Food - Frozen Food', 'A delicious chicken dish featuring honey and sesame flavors.', '8.99', '13');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('98', 'Kids'' Art Supplies Kit', 'Toys', 'Complete kit with crayons, markers, and paper for young artists.', '29.99', '4');
                    INSERT INTO "products" ("id", "product_name", "product_category", "product_description", "price", "amount_in_stock") VALUES ('99', 'Water-Resistant Bluetooth Speaker', 'Audio', 'Durable speaker designed for outdoor use with water resistance.', '59.99', '11');
                    `, (err) => {
                        if(err){
                            return console.error(err.message);
                        }
                        console.log("Rows inserted successfully");
                    }
                )

                db.close((err) => {
                    if(err){
                        return console.error(err.message)
                    }
                    console.log("Closed database connection")
                })
            })

        


});
