import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/shipping2.scss';
import './css/shippingtablet.scss';
import './css/shippingandroid.scss';

import Header from "./Header";
import Footer from "./footer";



function Shipping2(){
    return     <div id="Billing">

<Header/>





<div className="container" style={{width:'100%'}}>
   


<div className="row">
   



    <div className="col-sm-12 col-md-8 col-xs-12">
<div className="container-fluid billingform" id="billingform" style={{width:'100%'}}>
    <ul className="progressbar">
        <li className="active"> Shipping Details</li>
        <li id="secondpart"> Billing Details</li>
    </ul>


    <form  style={{alignItems:'center',marginLeft:'auto',marginRight:'auto',width:'100%'}}>



<table style={{width:'100%',marginLeft: 'auto',marginRight:'auto',borderCollapse: 'separate',borderSpacing: '10px'}} id="table2">
    <tr>
            <td>
            <div className="form-group">
              <label for="email">Type of address:</label>
              <select className="form-control" id="sel1">
                <option>home</option>
                <option>office</option>
                <option>personal</option>
                
              </select>
            </div>
            </td>
        </tr>  
        <tr>
            <td>
                <div className="form-group">
                    <label for="email">First name:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
                  </div>
                      
            </td>
            <td>
                <div className="form-group">
                    <label for="email">last name:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter last name " name="email"/>
                  </div>
                      
            </td>
        </tr>
    
        <tr>
            <td>
                <div className="form-group">
                    <label for="email">Street Address:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
                  </div>
                      
            </td>
            <td>
                <div className="form-group">
                    <label for="email">Area:</label>
                    <select className="form-control" id="sel1">
                        <option>home</option>
                        <option>office</option>
                        <option>other</option>
                        
                      </select>
                  </div>
                      
            </td>
        </tr>
        <tr>
            <td>
                <div className="form-group">
                    <label for="email">Emirate:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
                  </div>
                      
            </td>
            
        </tr>

        <tr>
            <td><br/> </td>
        </tr>
    
        <tr>
            <td > Enter card details <br/> <br/></td>
        </tr>
        <tr>
            <td>
                <div className="form-group">
                    <label for="email">Card number:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
                  </div>
                      
            </td>
            <td>
                <div className="form-group">
                    <label for="email">Other payment methods:</label>
                    <select className="form-control" id="sel1">
                        <option>UPI</option>
                        <option>office</option>
                        <option>other</option>
                        
                      </select>
                  </div>
                      
            </td>
        </tr>
        <tr>
            <td>
                <div className="form-group">
                    <label for="email">Card number name:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
                  </div>
            </td>
        </tr>
        <tr>
            <td >
                <div className="form-group">
                    
                   <label> Exp Date</label>
                    <div className="row" id="payment" style={{marginLeft:'1%'}}>
                        <div className="col-sm-3" class="form-group">
                   
                          <input type="text" className="form-control" id="expyear" name="expyear" placeholder="MM" maxlength="2" />
                        </div>
                        <div className="col-md-3 col-sm-3" class="form-group">
                     
                            <input type="text" className="form-control" id="expyear" name="expyear" placeholder="YYYY" maxlength="4"/>
                          </div>
                          
                          <div className="col-md-3 col-sm-3" class="form-group">
                       
                            <input type="text" className="form-control" id="expyear" name="expyear" placeholder="CVV"/>
                          </div>
                  
                      </div>
                  </div>
            </td>
        </tr>
        <tr>
            <td>
               
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" id="prev" className="btn btn-danger"> Previous </button>
            </td>
            <td>
                <button type="submit" id='submit' className="btn btn-success"> Submit </button>
            </td>
            
        </tr>
        
    
    
    </table>         
    
    




    </form>
</div>


</div>


<div className="col-sm-12 col-md-4 col-xs-12"> 

    <table className="table" id="table3">
        <thead>
          <tr >
            <th colspan="2"> Summary</th>
            
      </tr>
          
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: 'left'}}>Price (4-item)</td>
            <td style={{textAlign: 'right'}}>$128.60</td>
         
          </tr>
          <tr>
            <td style={{textAlign: 'left'}}>Delivery Charge</td>
            <td style={{textAlign: 'right'}}>$16</td>
         
          </tr>  
           <tr>
            <td style={{textAlign: 'left'}}>Total Price</td>
            <td style={{textAlign: 'right'}}>$145</td>
         
          </tr>
        </tbody>

      </table>

</div>

</div>

</div>

<br/>
<br/>





<Footer/>
    </div>;
    
    
}

export default Shipping2;