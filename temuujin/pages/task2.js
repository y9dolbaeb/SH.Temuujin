import React, { useState } from 'react';

export default function Task4() {
  const [city, setCity] = useState('');

  const handleSearchChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#1A1A1A',
    }}>
      {/* Side Panel */}
      <div style={{
        width: '80px',
        backgroundColor: '#2C2C2C',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '10px',
        paddingRight: '10px',
        textAlign: 'center',
        color: '#FFF',
        borderRadius: '25px',
        margin: '20px',
      }}>
        {/* Icons and Links */}
        <div style={iconStyle}>
          <span role="img" aria-label="weather" style={iconImgStyle}>🌤️</span>
          <p style={textStyle}>Weather</p>
        </div>

        <div style={iconStyle}>
          <span role="img" aria-label="cities" style={iconImgStyle}>🌆</span>
          <p style={textStyle}>Cities</p>
        </div>

        <div style={iconStyle}>
          <span role="img" aria-label="map" style={iconImgStyle}>🗺️</span>
          <p style={textStyle}>Map</p>
        </div>

        <div style={iconStyle}>
          <span role="img" aria-label="settings" style={iconImgStyle}>⚙️</span>
          <p style={textStyle}>Settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        color: '#FFF',
      }}>
        {/* Search for city */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#2C2C2C',
            borderRadius: '20px',
            padding: '10px 15px',
            width: '1250px', // Увеличиваем длину поля поиска
            marginRight: '20px',
          }}>
            <span role="img" aria-label="search" style={{
              fontSize: '20px',
              marginRight: '10px',
            }}>🔍</span>
            <input
              type="text"
              value={city}
              onChange={handleSearchChange}
              placeholder="Search for cities"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFF',
                fontSize: '16px',
                width: '100%',
              }}
            />
          </div>
        </div>

        
      </div>
    </div>
  );
}

// Icon and text styles
const iconStyle = {
  marginBottom: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const iconImgStyle = {
  fontSize: '30px',
};

const textStyle = {
  marginTop: '10px',
  fontSize: '14px',
  marginBottom: '0',
};

// Rectangle style
const rectangleStyle = {
  width: '300px',
  height: '100px',
  backgroundColor: '#2C2C2C',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFF',
  fontSize: '18px',
};
