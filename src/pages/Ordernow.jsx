import React from 'react';
import './Ordernow/Ordernow.css'; // Importing the CSS file

const Ordernow = () => {
  const foodItems = [
    {
      category: 'Pizza',
      items: [
        { name: 'Margherita', price: 200, img: 'https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg' },
        { name: 'Pepperoni', price: 300, img: 'https://pizzapro.in/cdn/shop/articles/pepperoni-pizza-pizza-pro.jpg?v=1645080271' },
      ],
    },
    {
      category: 'Burger',
      items: [
        { name: 'Veg Burger', price: 150, img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg' },
        { name: 'Chicken Burger', price: 250, img: 'https://www.kitchensanctuary.com/wp-content/uploads/2024/09/Buffalo-Chicken-Burger-square-FS-2.jpg' },
      ],
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Alfredo', price: 200, img: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg' },
        { name: 'Arrabbiata', price: 220, img: 'https://theplantbasedschool.com/wp-content/uploads/2024/01/Penne-with-arrabbiata-sauce-4.jpg' },
      ],
    },
    {
      category: 'Biryani',
      items: [
        { name: 'Veg Biryani', price: 180, img: 'https://www.terrafood.co.in/cdn/shop/files/VegBiryani.jpg?crop=center&height=2048&v=1687766592&width=2048' },
        { name: 'Chicken Biryani', price: 250, img: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' },
      ],
    },
    {
      category: 'Salad',
      items: [
        { name: 'Caesar Salad', price: 150, img: 'https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Classic_Caesar_Salad_715_x_477.jpg' },
        { name: 'Greek Salad', price: 170, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmgVq2RxvqK7orfJnq4CkkL2-_58FZra7Ag&s' },
      ],
    },
  ];

  return (
    <div className="order-page">
      <h1 className="order-title">Place Your Order</h1>
      <div className="categories-container">
        {foodItems.map((category, index) => (
          <div className="category-section" key={index}>
            <h2 className="category-title">{category.category}</h2>
            <div className="food-items">
              {category.items.map((item, idx) => (
                <div className="food-item" key={idx}>
                  <img src={item.img} alt={item.name} className="food-image" />
                  <div className="food-details">
                    <span className="food-name">{item.name}</span>
                    <span className="food-price">₹{item.price}</span>
                    <button className="order-button">Order</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordernow;
