import Header from "./Header";
import Footer from "./footer";
import './css/cart.scss';
import './css/cartandroid.scss';
import './css/carttablet.scss';
import faq from './images/faq.png';



function Cart(){
    return < div id="Cart">
<Header/>



<div className="container">
  <div className="row">
    <div className="col-md-7 col-sm-12 col-xs-12" style={{overflow: 'hidden'}}>

      <h2 data-aos="fade"> CART</h2>
<hr style={{color:'black',backgroundColor: 'black'}}  data-aos="slide-right"/>
      <table className="" style={{borderCollapse: 'separate',width:'100%'}}>
        <tr data-aos="fade">
          <td style={{borderBottom:'1px solid grey'}}>
<table style={{border:'0px solid red',borderCollapse: 'separate',borderSpacing: '10px',float:'left',textAlign: 'left'}}>
  <tr data-aos="fade">
    <td  rowspan="3"><img style={{height:'100px'}} src={faq} data-aos="flip-left"/> </td>
    <td><h4 >Product title</h4>
      <p style={{color:'#007FEB'}} ><del data-aos="fade-left" style={{color:'grey'}}>$32</del>  {' '}  $25 {' '}</p>
    </td>
  </tr>
  <tr data-aos="fade">
 
    <td > 
<p >      <button className="btn  btn-outline-primary" data-aos="fade-left">+{'  '}</button>
   {'   '}1{'    '} 
      <button className="btn  btn-outline-primary" data-aos="fade-right">-</button>
</p>
    </td>
  </tr>

  <tr>

    <td></td>
  </tr>
 
  
  

  
</table>



          </td>


          <td style={{borderBottom:'1px solid grey'}}>
            <button className="btn  btn-outline-danger" style={{float:'right'}} data-aos="fade">REMOVE</button>
          </td>
        
        </tr>

        <tr data-aos="fade">
          <td style={{borderBottom:'1px solid grey'}}>
<table style={{border:'0px solid red',borderCollapse: 'separate',borderSpacing: '10px',float:'left',textAlign: 'left'}}>
  <tr data-aos="fade">
    <td  rowspan="3"><img style={{height:'100px'}} src={faq} data-aos="flip-left"/> </td>
    <td><h4 >Product title</h4>
      <p style={{color:'#007FEB'}} ><del data-aos="fade-left" style={{color:'grey'}}>$32</del>  {' '}  $25 {' '}</p>
    </td>
  </tr>
  <tr data-aos="fade">
 
    <td > 
<p >      <button className="btn  btn-outline-primary" data-aos="fade-left">+{'  '}</button>
   {'   '}1{'    '} 
      <button className="btn  btn-outline-primary" data-aos="fade-right">-</button>
</p>
    </td>
  </tr>

  <tr>

    <td></td>
  </tr>
 
  
  

  
</table>



          </td>


          <td style={{borderBottom:'1px solid grey'}}>
            <button className="btn  btn-outline-danger" style={{float:'right'}} data-aos="fade">REMOVE</button>
          </td>
        
        </tr>

        <tr data-aos="fade">
          <td style={{borderBottom:'1px solid grey'}}>
<table style={{border:'0px solid red',borderCollapse: 'separate',borderSpacing: '10px',float:'left',textAlign: 'left'}}>
  <tr data-aos="fade">
    <td  rowspan="3"><img style={{height:'100px'}} src={faq} data-aos="flip-left"/> </td>
    <td><h4 >Product title</h4>
      <p style={{color:'#007FEB'}} ><del data-aos="fade-left" style={{color:'grey'}}>$32</del>  {' '}  $25 {' '}</p>
    </td>
  </tr>
  <tr data-aos="fade">
 
    <td > 
<p >      <button className="btn  btn-outline-primary" data-aos="fade-left">+{'  '}</button>
   {'   '}1{'    '} 
      <button className="btn  btn-outline-primary" data-aos="fade-right">-</button>
</p>
    </td>
  </tr>

  <tr>

    <td></td>
  </tr>
 
  
  

  
</table>



          </td>


          <td style={{borderBottom:'1px solid grey'}}>
            <button className="btn  btn-outline-danger" style={{float:'right'}} data-aos="fade">REMOVE</button>
          </td>
        
        </tr>

        <tr data-aos="fade">
          <td style={{borderBottom:'1px solid grey'}}>
<table style={{border:'0px solid red',borderCollapse: 'separate',borderSpacing: '10px',float:'left',textAlign: 'left'}}>
  <tr data-aos="fade">
    <td  rowspan="3"><img style={{height:'100px'}} src={faq} data-aos="flip-left"/> </td>
    <td><h4 >Product title</h4>
      <p style={{color:'#007FEB'}} ><del data-aos="fade-left" style={{color:'grey'}}>$32</del>  {' '}  $25 {' '}</p>
    </td>
  </tr>
  <tr data-aos="fade">
 
    <td > 
<p >      <button className="btn  btn-outline-primary" data-aos="fade-left">+{'  '}</button>
   {'   '}1{'    '} 
      <button className="btn  btn-outline-primary" data-aos="fade-right">-</button>
</p>
    </td>
  </tr>

  <tr>

    <td></td>
  </tr>
 
  
  

  
</table>



          </td>


          <td style={{borderBottom:'1px solid grey'}}>
            <button className="btn  btn-outline-danger" style={{float:'right'}} data-aos="fade">REMOVE</button>
          </td>
        
        </tr>


      </table>
    </div>


    <div class="col-md-5 col-sm-12 col-xs-12">

      <div  data-aos="fade" className="card" id="card" style={{marginTop:'10%',marginLeft: 'auto',padding:'4%',marginRight: 'auto',border:'2px solid rgb(0, 81, 255)',backgroundColor: 'white'}}>
        <div  style={{backgroundColor: 'white'}}>

          
          <div className="form-group">
            <label for="pwd">
          <h4> <b> Add Promo Code</b></h4>
            </label>
            <input type="password" style={{border:'2px solid rgb(0, 132, 255)',borderRadius:'0px'}} class="form-control" placeholder="Enter promo code" id="pwd"/>
          </div>
          <button type="button" className="btn btn-primary" style={{float:'right'}}>Add </button>
        </div>
        <div  >

          <div>
          <h4> <b> Summary</b></h4>
          </div>
          <br/>
          
          <table className="table" style={{width:'100%'}}>
          
            <tbody>
              <tr style={{width:'100%'}}>
                <td >Price(4 Item)</td>
                <td style={{color:'rgb(0, 132, 255)'}}> $128.60</td>
     
              </tr>
              <tr style={{width:'100%'}}>
                <td >Delivery Charge</td>
                <td style={{color:'rgb(0, 132, 255)'}}> $15</td>
     
              </tr>
              <tr style={{width:'100%'}}>
                <td >Total Charge</td>
                <td style={{color:'rgb(0, 132, 255)'}}> $143.60</td>
     
              </tr>     
              <tr style={{width:'100%'}}>
                <td >
                  <button className="btn btn-outline-primary" style={{float:'left'}}  data-aos="fade-left"> CONTINUE SHOPPING</button>

                </td>
                <td style={{color:'rgb(0, 132, 255)'}}>
                  <button className="btn btn-primary" style={{float:'right'}}  data-aos="fade-right">PLACE ORDER </button>
                </td>
     
              </tr> 

           
            </tbody>
          </table>

        </div>

      </div>

      


    </div>
  </div>
</div>

<br/>
<br/>




<Footer/>
    </div>;
}


export default Cart;