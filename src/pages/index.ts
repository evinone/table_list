import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const AddTableList = lazy(() => import('./AddTableList'));
const EditTableList = lazy(() => import('./EditTableList'));

export {
  Home,
  AddTableList,
  EditTableList
}