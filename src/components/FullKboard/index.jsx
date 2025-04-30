import React from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './FullKboard.module.scss';

const FullKboard = () => {
  const [keyboard, setKeyboard] = React.useState();
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchKeyboard() {
      try {
        const { data } = await axios.get(`https://c09345baae5f2e48.mokky.dev/items/${id}`);
        setKeyboard(data);
      } catch (error) {
        alert('Ошибка при получении клавиатуры.');
        navigate('/');
      }
    }
    fetchKeyboard();
  }, []);

  if (!keyboard) {
    return 'Загрузка...';
  }

  return (
    <>
      <div className={styles.container_main}>
        <img src={keyboard.imageUrl} className={styles.image_kb} />
        <h2>{keyboard.title}</h2>
        <h4>Switches: {keyboard.switches}</h4>
        <p>${keyboard.price}</p>
      </div>
    </>
  );
};

export default FullKboard;
