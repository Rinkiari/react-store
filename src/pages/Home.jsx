import React from 'react';
import qs from 'qs';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice.js';

import '../scss/app.scss';

import ErrorCard from '../components/ErrorCard.jsx';
import Kboard from '../components/KboardCard/';
import Skeleton from '../components/KboardCard/Skeleton.jsx';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort.jsx';
import Pagination from '../components/Pagination/index.jsx';

import { fetchKboards, selectKboardData } from '../redux/slices/kboardSlice.js';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, totalPages, status } = useSelector(selectKboardData);

  console.log('Items from r: ', items);

  const { categoryId, sort, currentPage, searchValue } = useSelector((state) => state.filter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getKboards = () => {
    const search = searchValue ? `&title=*${searchValue}` : '';

    dispatch(
      fetchKboards({
        search,
        categoryId,
        sort,
        currentPage,
      }),
    );
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в reduxe
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем kboards
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getKboards();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

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
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Sort />
      {status === 'error' ? (
        <div className="extra_cont">
          <ErrorCard />
        </div>
      ) : (
        <div className="container_cartochek">{status === 'loading' ? skeletons : keyboards}</div>
      )}

      <Pagination totalPages={totalPages} value={currentPage} onChangePage={onChangePage} />
    </>
  );
};
export default Home;
