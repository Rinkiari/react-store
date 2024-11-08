import React from 'react';
import '../scss/app.scss';

import Kboard from '../components/KboardCard/';
import Skeleton from '../components/KboardCard/Skeleton.jsx';
import Categories from '../components/Categories';
import Sort from '../components/Sort.jsx';
import Loader from '../components/Loader.jsx';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]); // состояние товаров
  const [isLoading, setIsLoading] = React.useState(true); // состояние загрузки
  const [categoryId, setCategoryId] = React.useState(0); // состояние выбранной категории
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  }); // состояние выбранной сортировки

  console.log('Now: ', categoryId, sortType); // проверка какая сейчас категория и сортировка

  // Отслеживание изменения состояний и запрос на бекэнд с его обработкой
  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&title=*${searchValue}` : '';
    console.log('making a request ...');
    fetch(
      `https://c09345baae5f2e48.mokky.dev/items?${
        categoryId > 0 ? `size=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}${search}`,
    )
      .then((res) => res.json())
      .then((jsonRes) => {
        setItems(jsonRes);
        console.log('Response received');
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const keyboards = items.map((obj) => <Kboard key={obj.id} {...obj} />);
  // .filter((obj) => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // })
  const skeletons = [...new Array(7)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
      <Sort value={sortType} onChangeSortType={(i) => setSortType(i)} />

      <div className="container_cartochek">
        {isLoading ? (
          <>
            <Loader />
            {skeletons}
          </>
        ) : (
          keyboards
        )}
      </div>
    </>
  );
};
export default Home;
