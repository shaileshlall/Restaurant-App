import React from "react";
import "../../Styles/FoodMenu.css";

const menuData = [
  // TB Recommended Lists
  {
    title: "Original Whopper Veg",
    price: "189.00",
    desc: "Grilled veg patty with fresh toppings and creamy mayo in a sesame bun.",
    highlight: "Chef Recommend",
    category: "TB Recommended",
    image: "./S1.jpg",
  },
  {
    title: "Original Whopper Chicken",
    price: "209.00",
    desc: "Grilled Chicken patty with fresh toppings and creamy mayo in a sesame bun.",
    highlight: "Chef Recommend",
    category: "TB Recommended",
    image: "./S2.jpg",
  },
  {
    title: "TB Veg Pizza Puff",
    price: "45.00",
    desc: "Crispy golden puff filled with spiced veggies, cheese, and tangy pizza sauce.",
    category: "TB Recommended",
    image: "./S3.jpg",
  },
  {
    title: "Peri Peri Fries (Medium)",
    price: "129.00",
    desc: "Crispy golden fries tossed in spicy peri peri seasoning for a bold, zesty flavor.",
    category: "TB Recommended",
    image: "./S4.jpg",
  },
  {
    title: "(4Pcs) Crunchy Chicken Nuggets",
    price: "89.00",
    desc: "Tender chicken bites coated in a golden, crispy breadcrumb crust.",
    category: "TB Recommended",
    image: "./S5.jpg",
  },
  {
    title: "Chocolate Thick Shake",
    price: "189.00",
    desc: "Rich and creamy chocolate shake blended to perfection.",
    category: "TB Recommended",
    image: "./S6.jpg",
  },
  {
    title: "Paneer Royale Wrap",
    price: "189.00  ",
    desc: "Deliciously grilled paneer wrapped with crunchy veggies and creamy dressing.",
    category: "TB Recommended",
    image: "./S7.jpg",
  },
  // New Premium Burgers Lists
  {
    title: "Paneer Royale Burger",
    price: "$21.0",
    desc: "Crispy paneer patty layered with fresh veggies and creamy royal sauce, served in a soft bun.",
    highlight: "Original Taste",
    category: "New Premium Burgers",
    image: "./New1.jpg",
  },
  {
    title: "Korean Spicy Paneer Burger",
    price: "$21.0",
    desc: "Fiery Korean-style paneer patty glazed with spicy gochujang sauce, topped with crunchy slaw and creamy mayo in a toasted bun.",
    highlight: "Original Taste",
    category: "New Premium Burgers",
    image: "./New2.jpg",
  },
  {
    title: "Fiery Chicken Burger",
    price: "$9.0",
    desc: "Juicy chicken patty coated in a fiery hot sauce, layered with crisp lettuce, jalapeños, and creamy mayo in a toasted sesame bun.",
    category: "New Premium Burgers",
    image: "./New3.jpg",
  },
  {
    title: "Korean Spicy Chicken Burger",
    price: "$9.0",
    desc: "Fiery Korean-style Chicken patty glazed with spicy gochujang sauce, topped with crunchy slaw and creamy mayo in a toasted bun.",
    category: "New Premium Burgers",
    image: "./New4.jpg",
  },
  {
    title: "Chicken Tandoori Burger",
    price: "$9.0",
    desc: "Juicy tandoori-marinated chicken grilled to perfection, layered with mint mayo, onions, and lettuce in a soft toasted bun.",
    category: "New Premium Burgers",
    image: "./New5.jpg",
  },
  // Korean Spicy Fest Lists
  {
    title: "Korean Spicy Paneer Burger",
    price: "219.00",
    desc: "Crispy paneer patty tossed in Korean spicy sauce, layered with pickled veggies, lettuce, and creamy gochujang mayo in a soft toasted bun.",
    category: "Korean Spicy Fest",
    image: "./K1.jpg",
  },
  {
    title: "Korean Spicy Chicken Burger",
    price: "229.00",
    desc: "Juicy chicken fillet glazed in Korean spicy gochujang sauce, topped with crisp lettuce, pickled cucumbers, and creamy kimchi mayo, all nestled in a toasted sesame bun.",
    category: "Korean Spicy Fest",
    image: "./K2.jpg",
  },
  {
    title: "Korean Spicy Fries",
    price: "159.00",
    desc: "Crispy golden fries tossed in bold Korean gochujang seasoning, drizzled with spicy mayo and garnished with green onions and sesame seeds for an extra kick.",
    category: "Korean Spicy Fest",
    image: "./K3.jpg",
  },
  {
    title: "Korean Spicy Chicken (4 Pcs)",
    price: "199.00",
    desc: "Tender chicken pieces, double-fried to golden perfection and coated in a fiery Korean gochujang glaze. Served crispy outside, juicy inside – perfect for spice lovers.",
    category: "Korean Spicy Fest",
    image: "./K4.jpg",
  },
  {
    title: "Korean Spicy Chicken (7 Pcs)",
    price: "309.00",
    desc: "Seven pieces of succulent chicken, double-fried for extra crunch and tossed in our bold, spicy Korean gochujang sauce. A fiery, flavorful treat perfect for sharing—or not!",
    category: "Korean Spicy Fest",
    image: "./K5.jpg",
  },
  {
    title: "Korean Spicy Chicken Wings (4 Pcs)",
    price: "209.00",
    desc: "Four crispy chicken wings coated in a rich, spicy Korean gochujang glaze. Bold flavor with a perfect balance of heat and sweetness—an irresistible Korean twist!",
    category: "Korean Spicy Fest",
    image: "./K6.jpg",
  },
  {
    title: "Korean Spicy Paneer Meal For 1",
    price: "299.00",
    desc: "A flavorful fusion meal featuring our signature Korean Spicy Paneer Burger, served with crispy Peri Peri Fries and a chilled Chocolate Thick Shake. A bold, satisfying combo for spice lovers!",
    category: "Korean Spicy Fest",
    image: "./K7.jpg",
  },
  {
    title: "Korean Spicy Chicken Meal For 1",
    price: "399.00",
    desc: "Enjoy a fiery feast with our Korean Spicy Chicken Burger, paired with crunchy Peri Peri Fries and a refreshing Chocolate Thick Shake. Perfectly portioned for one—bold flavors, big satisfaction!",
    category: "Korean Spicy Fest",
    image: "./K8.jpg",
  },
  {
    title: "Korean Spicy Paneer Meal For 2",
    price: "599.00",
    desc: "Double the spice, double the delight! Share the bold flavors of two Korean Spicy Paneer Burgers, Peri Peri Fries, and two Chocolate Thick Shakes—perfect for a fiery meal made for two.",
    category: "Korean Spicy Fest",
    image: "./K9.jpg",
  },
  {
    title: "Korean Spicy Chicken Meal For 2",
    price: "699.00",
    desc: "Turn up the heat with two Korean Spicy Chicken Burgers, crispy Peri Peri Fries, and two rich Chocolate Thick Shakes. A perfect combo to spice up mealtime for two!",
    category: "Korean Spicy Fest",
    image: "./K10.jpg",
  },
  // Value Meals Lists
  {
    title: "Crispy Veg Meal (Med)",
    price: "194.00",
    desc: "A perfect medley of flavor and crunch! Enjoy a crispy veg burger, medium fries, and a refreshing drink—your go-to comfort meal with a veggie twist.",
    category: "Value Meals",
    image: "./V1.jpg",
  },
  {
    title: "Crispy Chicken Meal (Med)",
    price: "214.00",
    desc: "Satisfy your cravings with our Crispy Chicken Meal! Includes a juicy chicken burger, medium crispy fries, and a chilled soft drink—your ultimate chicken combo in one meal.",
    category: "Value Meals",
    image: "./V2.jpg",
  },
  {
    title: "Veg Makhani Brust Meal (Reg)",
    price: "174.00",
    desc: "A rich burst of North Indian flavor! Enjoy a soft veg patty drenched in creamy Makhani sauce, layered with fresh veggies and signature spices—packed in a regular-sized delight.",
    category: "Value Meals",
    image: "./V3.jpg",
  },
  {
    title: "Chicken Makhani Brust Meal (Reg)",
    price: "194.00",
    desc: "Indulge in a hearty meal featuring our Chicken Makhani Burst burger—juicy chicken patty smothered in creamy Makhani sauce, paired with crispy fries and a refreshing drink. A satisfying combo with bold Indian flavors in every bite.",
    category: "Value Meals",
    image: "./V4.jpg",
  },
  {
    title: "Crunchy Veg Taco Meal (Reg)",
    price: "184.00",
    desc: "Enjoy a delightful combo of crispy veg tacos packed with seasoned veggies and creamy sauces, served with golden fries and a chilled drink. A perfect crunchy treat for your hunger cravings!",
    category: "Value Meals",
    image: "./V5.jpg",
  },
  {
    title: "Crunchy Chicken Taco Meal (Reg)",
    price: "204.00",
    desc: "Savor the crunch! This meal features crispy chicken-loaded tacos topped with fresh veggies and creamy sauces, served with golden fries and a chilled drink. A bold and satisfying feast for one.",
    category: "Value Meals",
    image: "./V6.jpg",
  },
  {
    title: "Crispy Veg Double Patty Meal (Reg)",
    price: "194.00",
    desc: "Double the delight! Enjoy two crispy veg patties stacked in a soft bun with fresh veggies and signature sauces, served with fries and a chilled drink. A perfect meal for true veggie lovers.",
    category: "Value Meals",
    image: "./V7.jpg",
  },
  {
    title: "Crispy Chicken Double Patty Meal (Reg)",
    price: "215.00",
    desc: "Double the crunch, double the delight! This meal features a crispy chicken burger stacked with two golden patties, layered with fresh veggies and sauces, served with fries and a refreshing drink. A satisfying treat for serious hunger.",
    category: "Value Meals",
    image: "./V8.jpg",
  },
  {
    title: "TB Veggie Meal (Med)",
    price: "244.00",
    desc: "A wholesome and hearty meal featuring a delicious veggie burger filled with crispy patty, fresh lettuce, tomatoes, and signature sauces. Served with medium fries and a chilled drink — perfect for a satisfying veggie indulgence.",
    category: "Value Meals",
    image: "./V9.jpg",
  },
  {
    title: "TB Chicken Meal (Med)",
    price: "274.00",
    desc: "Enjoy the perfect combo of taste and crunch with our TB Chicken Meal. Featuring a tender and juicy chicken burger with signature sauces, served with crispy fries and a chilled medium drink — it’s the ultimate comfort meal!",
    category: "Value Meals",
    image: "./V10.jpg",
  },
  {
    title: "Extra Crunchy Veg Whopper Deluxe Meal",
    price: "284.00",
    desc: "Savor the crunch! Our Extra Crunchy Veg Whopper Deluxe features a crispy veggie patty layered with fresh lettuce, tomatoes, onions, and creamy sauces — all stacked in a toasted sesame bun. Paired with golden fries and a refreshing drink, it’s a deluxe treat for every veg lover.",
    category: "Value Meals",
    image: "./V11.jpg",
  },
  {
    title: "Extra Crunchy Chicken Whopper Deluxe Meal",
    price: "304.00",
    desc: "Sink your teeth into the Extra Crunchy Chicken Whopper Deluxe — packed with a thick, crispy chicken patty, fresh lettuce, juicy tomatoes, and creamy mayo inside a soft sesame bun. Served as a meal with golden fries and a refreshing drink, it’s the ultimate deluxe indulgence!",
    category: "Value Meals",
    image: "./V12.jpg",
  },
  {
    title: "Original Whopper Veg(XL Size Bun) Meal",
    price: "324.00",
    desc: "Enjoy the iconic taste of the Original Veg Whopper—now bigger and better with an XL size bun. Packed with a thick veg patty, fresh onions, tomatoes, lettuce, creamy mayo, and signature Whopper sauce. Served with crispy fries and a chilled drink for a satisfying meal experience.",
    category: "Value Meals",
    image: "./V13.jpg",
  },
  {
    title: "Original Whopper Chicken(XL Size Bun) Meal",
    price: "344.00",
    desc: "Experience the iconic Original Chicken Whopper, now bigger and better with an XL-size bun! Featuring a flame-grilled chicken patty layered with fresh lettuce, tomatoes, onions, creamy mayo, and signature Whopper sauce. Served with crispy fries and a chilled drink for a full-on feast.",
    category: "Value Meals",
    image: "./V14.jpg",
  },
  {
    title: "Fiery Chicken Meal (Med)",
    price: "344.00",
    desc: "Turn up the heat with the Fiery Chicken Meal! A spicy, crispy chicken patty loaded with fiery sauce, fresh veggies, and creamy mayo in a toasted bun. Paired with medium fries and a drink — perfect for spice lovers craving a bold bite.",
    category: "Value Meals",
    image: "./V15.jpg",
  },
  {
    title: "Paneer Royele Meal (Med)",
    price: "344.00",
    desc: "Indulge in royal flavors with the Paneer Royele Meal! A rich and crispy paneer patty layered with creamy sauces, fresh veggies, and soft buns. Served with medium crispy fries and a refreshing drink — a true vegetarian delight fit for a king!",
    category: "Value Meals",
    image: "./V16.jpg",
  },
  {
    title: "Chicken Tandoori Meal (Med)",
    price: "344.00",
    desc: "Savor the smoky goodness of the Chicken Tandoori Meal! Juicy chicken infused with bold tandoori spices, layered with fresh veggies and tangy sauces in a toasted bun. Comes with medium crispy fries and a chilled drink — a perfect fusion of desi spice and classic taste.",
    category: "Value Meals",
    image: "./V17.jpg",
  },
  {
    title: "Crunchy Chicken Wrap Meal (Med)",
    price: "344.00",
    desc: "Enjoy the ultimate crunch with the Crunchy Chicken Wrap Meal! Packed with crispy chicken strips, fresh lettuce, creamy mayo, and tangy sauces all wrapped in a soft tortilla. Served with medium fries and a refreshing drink — the perfect combo for on-the-go cravings!",
    category: "Value Meals",
    image: "./V18.jpg",
  },
  {
    title: "Paneer Royele Wrap Meal (Med)",
    price: "324.00",
    desc: "Indulge in the royal flavors of the Paneer Royele Wrap! Stuffed with soft, spiced paneer cubes, fresh veggies, zesty sauces, and creamy mayo, all rolled in a warm tortilla. Comes with medium crispy fries and a cool drink — a true vegetarian delight in every bite.",
    category: "Value Meals",
    image: "./V19.jpg",
  },
];

const FoodMenu = ({ activeTab }) => {
  const filteredMenu = menuData.filter(item => item.category === activeTab);

  return (
    <div className="menu-container container py-5">
      {filteredMenu.length > 0 ? (
        filteredMenu.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.highlight ? "highlighted" : ""}`}
          >
            <img src={item.image} alt={item.title} className="menu-image img-fluid" />
            {item.highlight && (
              <div className="menu-highlight">
                <h4 className="text-start">{item.highlight}</h4>
              </div>
            )}
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-title">{item.title}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <div className="menu-line" />
              <p className="menu-desc text-start">{item.desc}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No menu items for "{activeTab}"</p>
      )}
    </div>
  );
};

export default FoodMenu;