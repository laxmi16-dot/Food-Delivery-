import React from 'react';

const TopRestaurantsBangalore = () => {
  const restaurants = [
    {
      name: 'The Fatty Bao',
      location: 'Indiranagar',
      rating: 4.8,
      image: 'https://www.wdaspaces.com/static/db29e276ab4d3e750474f7612b085219/10527/the-fatty-bao-hero.jpg',
    },
    {
      name: 'Toit Brewpub',
      location: 'Indiranagar',
      rating: 4.7,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/41/8a/66/toit.jpg',
    },
    {
      name: 'Truffles',
      location: 'Koramangala',
      rating: 4.6,
      image: 'https://b.zmtcdn.com/data/pictures/0/51040/3614a681863f438e8a1018e313ed070f.jpg',
    },
    {
      name: 'Airlines Hotel',
      location: 'MG Road',
      rating: 4.5,
      image: 'https://b.zmtcdn.com/data/reviews_photos/a5e/8d3bf6b3e999f11c6216b69581450a5e_1631795858.jpg?fit=around|750:500&crop=750:500;*,*',
    },
    {
      name: 'Corner House',
      location: 'Multiple Locations',
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYL9xcyZVGwuTOXlVY03fklLIqeiaTZZCEQ&s',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: '#1e3c72' }}>
        Top Restaurants in Bangalore
      </h2>
      <ul className="list-unstyled">
        {restaurants.map((restaurant, index) => (
          <li
            key={index}
            className="d-flex align-items-center mb-4 shadow-sm p-3 bg-white rounded"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="rounded me-3"
              style={{ width: '120px', height: '80px', objectFit: 'cover' }}
            />
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#2a5298' }}>
                {restaurant.name}
              </h5>
              <p className="mb-0 text-muted">
                Location: <span className="fw-semibold">{restaurant.location}</span>
              </p>
              <p className="mb-0">
                Rating: <span className="fw-semibold">{restaurant.rating}★</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRestaurantsBangalore;
