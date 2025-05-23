import React from 'react';
import qs from 'qs';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  initialState,
  setCategoryId,
  setCurrentPage,
  setFilters,
  SortParams,
} from '../redux/slices/filterSlice.ts';

import '../scss/app.scss';

import ErrorCard from '../components/ErrorCard.tsx';
import Kboard from '../components/KboardCard/index.tsx';
import Skeleton from '../components/KboardCard/Skeleton.tsx';
import Categories from '../components/Categories.tsx';
import Sort, { list } from '../components/Sort.tsx';
import Pagination from '../components/Pagination/index.tsx';

import { fetchKboards, selectKboardData } from '../redux/slices/kboardSlice.ts';
import { RootState, useAppDispatch } from '../redux/store.ts';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, totalPages, status } = useSelector(selectKboardData);

  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter,
  );

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (pageN: number) => {
    dispatch(setCurrentPage(pageN));
  };

  const getKboards = () => {
    const search = searchValue ? `&title=*${searchValue}` : '';
    const sortP = sort.sortProperty;

    dispatch(
      fetchKboards({
        search,
        categoryId,
        sortP,
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
      const params = qs.parse(window.location.search.substring(1)) as {
        categoryId?: string;
        currentPage?: string;
        sortProperty?: string;
        searchValue?: string;
      };
      console.log('params: ', params);

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      console.log('sort :', sort);

      dispatch(
        setFilters({
          categoryId: Number(params.categoryId ?? initialState.categoryId),
          currentPage: Number(params.currentPage ?? initialState.currentPage),
          searchValue: params.searchValue ?? initialState.searchValue,
          sort: (sort as SortParams) ?? initialState.sort,
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

  const keyboards = items.map((obj: any) => <Kboard key={obj.id} {...obj} />);
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
