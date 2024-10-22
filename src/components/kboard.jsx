import React from 'react';

function Kboard({ imageUrl, title, switches, price }) {
  const [activeSwitch, setActiveSwitch] = React.useState(switches[0]);

  const handleSwitchClick = (switchType) => {
    setActiveSwitch(switchType);
  };

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.switchesPanel}>
          {switches.map((switchType, index) => (
            <span
              key={index}
              onClick={() => handleSwitchClick(switchType)}
              style={{
                ...styles.switch,
                ...(activeSwitch === switchType && styles.switchActive),
              }}>
              {switchType}
            </span>
          ))}
        </div>
        <p style={styles.price}>${price}</p>
        <button style={styles.button}>Добавить в корзину</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '20px',
    margin: '0 0 10px 0',
  },
  switchesPanel: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  switch: {
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  switchActive: {
    backgroundColor: '#8a2be2', // Фиолетовый цвет для активного свитча
    color: '#fff',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Kboard;
