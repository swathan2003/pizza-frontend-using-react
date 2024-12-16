import React from 'react';

// Simplified static data for the restaurant
const RestaurantPage = () => {
  const restaurant = {
    name: "Pizza Corner",
    description: "Pizza Corner is a haven for pizza lovers, offering a wide range of gourmet pizzas, fresh salads, and delicious sides.",
    image: "https://www.abhikrama.com/wp-content/uploads/2020/11/image001.jpg",
    address: "456 Pizza Street, Gourmet City, Chennai",
    rating: 4.7,
    specialties: ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza"]
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>{restaurant.name}</h1>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        style={{ width: '80%', maxWidth: '500px', borderRadius: '8px', marginBottom: '20px' }}
      />
      <p><strong>Description:</strong> {restaurant.description}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
      <p><strong>Specialties:</strong> {restaurant.specialties.join(', ')}</p>
    </div>
  );
};

export default RestaurantPage;
