import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleOrdernowClick = () => {
    navigate('/Ordernow'); // This navigates to the "Order Now" page
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '400px',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Quick Delivery</h1>
          <p style={{ fontSize: '1.5rem' }}>Delicious meals at your doorstep in minutes</p>
        </div>
      </div>

      {/* Order Now Section */}
      <div
        style={{
          margin: '20px auto',
          maxWidth: '800px',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <p style={{ fontSize: '18px', color: '#555' }}>
          Explore our wide range of cuisines and order your favorite dishes today!
        </p>
        <button
          style={{
            backgroundColor: '#ff7f50',
            color: '#fff',
            border: 'none',
            padding: '12px 25px',
            fontSize: '18px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff4500')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff7f50')}
          onClick={handleOrdernowClick}
        >
          Order Now
        </button>
      </div>

      {/* Features Section */}
      <div
        style={{
          marginTop: '40px',
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#2a5298', textAlign: 'center', fontWeight: 'bold' }}>
          Why Choose Us?
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#333', fontWeight: 'bold' }}>Live Tracking</h3>
            <p>Track your order in real-time from the kitchen to your doorstep.</p>
          </div>
          <div
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#333', fontWeight: 'bold' }}>Exclusive Offers</h3>
            <p>Enjoy exclusive discounts and deals every day.</p>
          </div>
          <div
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#333', fontWeight: 'bold' }}>Easy Payment</h3>
            <p>Multiple payment options including cards, UPI, and wallets.</p>
          </div>
          <div
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#333', fontWeight: 'bold' }}>Customer Support</h3>
            <p>24/7 support to assist you with all your queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
