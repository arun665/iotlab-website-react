import react from "react";

import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./footer";
import Package from "./Package";
import Home from "./Home";
import Product from "./product.jsx";
import Cart from "./cart.jsx";
import Shipping from "./Shipping.jsx";
import Shipping2 from "./Billing.jsx";


function Heading(){
    return   <>  
  <br/>

    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/package"> Package</Link>
    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/home"> home </Link>
    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/product"> Product </Link>
    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/cart"> Cart </Link>
    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/shipping"> Shipping </Link>
    
    <Link style={{padding:'5px',fontSize:'25px'}}  className="btn btn-outline-primary" to="/shipping2"> Billing </Link>
    
    <br/>


    <Switch>
       
        <Route exact path="/header" component={Header} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/package" component={Package} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/shipping2" component={Shipping2} />
        
    
        

        
        

        
       
    </Switch>

    </>;
    
    
}

export default Heading;