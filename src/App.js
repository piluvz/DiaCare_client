import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import FoodScannerImageUpload from './pages/FoodScanner';
import NutriPlanGenerator from './pages/NutriPlanForm';
import NutritionPlan from './pages/NutriPlan';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/food-scanner" component={FoodScannerImageUpload} />
        <Route path="/nutri-plan" component={NutriPlanGenerator} />
        <Route path="/food" component={NutritionPlan} />
        <Route path="*" component={() => <h1>Not Found</h1>} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;