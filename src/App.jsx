import Home from "./components/Home";
import Quote from "./components/Quote";
import Restaurant from "./components/Restaurant";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Drink from "./components/Drink";
import FoodOutlet from "./components/FoodOutlet";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"

export default function App(){
  return(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Quote" element={<Quote/>}/>
      <Route path="/Restaurant" element={<Restaurant/>}/>
      <Route path="/Food" element={<FoodOutlet/>}>
        <Route index element={<Food/>}></Route>
        <Route path=":id" element={<Drink></Drink>} />
      </Route> 
    </Routes>
    <Footer/> 
  </BrowserRouter>
  
  
  )
}