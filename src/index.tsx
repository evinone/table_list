import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { history } from './utils/history';

import App from './App';
import AddTableList from './pages/AddTableList';
import EditTableList from './pages/EditTableList';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import locale from 'antd/lib/locale/zh_CN';


ReactDOM.render(
  <ConfigProvider locale={locale}>
    <React.StrictMode >
      <Router history={history}>
        <Route exact path="/" component={()=> <App />} />
        <Route exact path="/edit" component={() => <EditTableList />} />
        <Route exact path="/add" component={() => <AddTableList />} />
      </Router>
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
);

// reportWebVitals();
