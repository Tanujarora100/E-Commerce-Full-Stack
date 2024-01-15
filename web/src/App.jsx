// Import necessary dependencies
import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import store from './redux/store';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
// TODO: Implement features
// - [JIRA-123] Dark Mode
// - [JIRA-124] Sign Up and Log In Functionality
// - [JIRA-125] Create a Sign Up and Log In Functionality Using Formik
// - [JIRA-126] Create an express Server With Proper Authentication and MiddleWares
// - [JIRA-127] Connect the app to Mongo DB
// - [JIRA-128] Save the user and render the state here in the card with the data in cart functionality
// - [JIRA-129] Add FAQ Section
// - [JIRA-130] Implement Feedback Mechanism
// - [JIRA-131] Implement Product Filtering by Category
// - [JIRA-132] Implement Pagination for Product List

function App() {
  // TODO: Add state and logic for features

  return (
    <Provider store={store}>
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Cart></Cart>}></Route>
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
