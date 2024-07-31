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
    // <Router>
    //   <NavBar />
    //   <ScrollToTop />
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/food-scanner" element={<FoodScannerImageUpload />} />
    //     <Route path="/nutri-plan" element={<NutriPlanGenerator />} />
    //     <Route path="/food" element={<NutritionPlan />} />
    //     <Route path="*" element={<h1>Not Found</h1>} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;