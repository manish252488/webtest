import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
