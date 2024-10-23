import React from 'react';
import '../scss/app.scss';

import Kboard from '../components/KboardCard/';
import Skeleton from '../components/KboardCard/Skeleton.jsx';
import Categories from '../components/Categories';
import Sort from '../components/Sort.jsx';

const Home = () => {
  const url = 'https://c09345baae5f2e48.mokky.dev/items';
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        setItems(jsonRes);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Categories />
      <Sort />

      <div className="container_cartochek">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Kboard key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
export default Home;
