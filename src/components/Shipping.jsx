import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';




import './css/shipping.scss';
import Header from "./Header";
import Footer from "./footer";




function Shipping(){
    return     <div id="Shipping">

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
        <table style={{marginLeft: 'auto',marginRight: 'auto',borderCollapse: 'separate',borderSpacing: '10px'}} id="table1">
<tr>
        <td>
        <div className="form-group">
          <label for="email">Type of address:</label>
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
                <label for="email">City:</label>
                <input type="text" className="form-control" id="email" placeholder="Enter first name " name="email"/>
              </div>
                  
        </td>
        <td>
            <div className="form-group">
                <label for="email">Phone number</label>
                <input type="text" className="form-control" id="email" placeholder="Enter last name " name="email"/>
              </div>
                  
        </td>
    </tr>

    <tr>
        <td>
         <div className="form-group">
            <label for="w3review">Delivery instructions</label>

            <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control">
            </textarea>
         </div>
        </td>
      
    </tr>


<tr>
    <td colspan="2">
<p> Term and conditions statement Molestias fringilla aliquam curae, taciti, vestibulum potenti sapien, tellus voluptatibus aliquid sapien. Nisi su aliquid sapien. Nisscipit, dapibus dapibus</p>
<button  type="button" className="btn btn-primary " id="next">CONTINUE</button>
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

export default Shipping;