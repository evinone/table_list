import React from 'react';
import { AddTableList, EditTableList } from "../pages";

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}

const AddRouter: RouterType = {
  path: '/add',
  component: AddTableList,
  root: [],
}

const EditRouter: RouterType = {
  path: '/edit',
  component: EditTableList,
  root: [],
}

const Routers: RouterType[] = ([
  AddRouter,
  EditRouter
])

export {
  Routers
}