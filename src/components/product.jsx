import "./css/product.scss";
import "./css/producttablet.scss";
import "./css/productandroid.scss";
import Header from "./Header";
import Footer from "./footer";
import rectangle from './images/rectangle.png';
import cardtop from './images/cardtop.png';
import account from './images/account.png';
import faq from './images/faq.png';

import product1 from './images/product1.png';




function Product(){
    return     <div id="Product" >
<Header  />


<div className="container-fluid" id="productdiv" style={{marginTop:'0px',minHeight:'597px'}} data-aos="fade">

  <div className="row" style={{height:'100%'}} id="productrow">
    <div className="col-md-6 col-sm-12 col-xs-12">
      

      <div id="productoutdiv">
        <img src={product1} id="product" data-aos="fade-up"/>
      </div>
    </div>
    <div className="col-md-6 col-sm-12 col-xs-12" id="productdivhead" style={{height:'100%'}}>
    
      <h1 style={{color:'wite'}} id="productheading2" > LoRa Module</h1>
    <h1 style={{color:'white'}} id="productheading" data-aos="fade-up" > LoRa Module</h1>
    </div>
  </div>


</div>







<div className="container-fluid" id="seconddiv">
<div className="row">
<div className="col-md-3 col-sm-12">


  <button id="seconddivbtn" className="btn btn-primary bg-info" data-aos="zoom-in"> OVERVIEW</button>
  <button id="seconddivbtn" className="btn btn-primary bg-info" data-aos="zoom-in"> Technical Specifications</button>
  <button id="seconddivbtn" className="btn btn-primary bg-info" data-aos="zoom-in"> SCHEMATIC</button>
  <button id="seconddivbtn" className="btn btn-primary bg-info" data-aos="zoom-in"> PROJECT IDEAS</button>
  <button id="seconddivbtn" className="btn btn-primary bg-info" data-aos="zoom-in"> FAQs</button>
</div>
<div className="col-md-9 col-sm-12">

 <p id="seconddivpara" data-aos="fade"> Our LoRa module is based on STM32WLE, It has high-performance Arm® Cortex®-M4 32-bit RISC core operating at a frequency of up to 48 MHz. This core implements a full set of DSP instructions and an independent memory protection unit (MPU) that enhances the application security. </p>
 <p id="seconddivpara" data-aos="fade">
  Our module allows the user to send data and reach extremely long ranges at low data-rates.It provides ultra-long range spread spectrum communication and high interference immunity whilst minimising current consumption.
  </p>
</div>

</div>

</div>




<div className="container">

  <table className="table" style={{marginLeft:'auto',marginRight:'auto'}} id="table1">

    <tbody>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}} > Based on</td>
        <td style={{float:'right'}}> STM32WLE</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Microprocessor</td>
        <td style={{float:'right'}}> Arm® Cortex®-M4 32-bit
        </td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Operating voltage</td>
        <td style={{float:'right'}}> Operating voltage</td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Recommended Input Voltage</td>
        <td style={{float:'right'}}> Recommended Input Voltage</td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Input voltage (limit)</td>
        <td style={{float:'right'}}>Input voltage (limit)
        </td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Digital I/O Pins</td>
        <td style={{float:'right'}}> Digital I/O Pins</td>

      </tr>

      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>PWM Digital I/O Pins</td>
        <td style={{float:'right'}}> PWM Digital I/O Pins</td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Analog Input PinsDC </td>
        <td style={{float:'right'}}> Analog Input PinsDC</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Current per I/O Pin</td>
        <td style={{float:'right'}}> Current per I/O Pin</td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> UART</td>
        <td style={{float:'right'}}> UART</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>SPI</td>
        <td style={{float:'right'}}>SPI
        </td>

      </tr>  <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> I2C</td>
        <td style={{float:'right'}}>I2C</td>

      </tr>

      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Frequency range</td>
        <td style={{float:'right'}}>Frequency range</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> RF Modulation</td>
        <td style={{float:'right'}}>RF Modulation</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> RX sensitivity</td>
        <td style={{float:'right'}}>RX sensitivity
        </td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> RF Output Power</td>
        <td style={{float:'right'}}>RF Output Power
        </td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> MCU</td>
        <td style={{float:'right'}}>
          MCU
          </td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Data Rate over LoRa</td>
        <td style={{float:'right'}}>Data Rate over LoRa</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Antenna Type</td>
        <td style={{float:'right'}}>Antenna Type</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Antenna Connector type</td>
        <td style={{float:'right'}}>
          Antenna Connector type
          </td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Bullet-proof front end</td>
        <td style={{float:'right'}}>Bullet-proof front end</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Channels</td>
        <td style={{float:'right'}}>Channels</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Range</td>
        <td style={{float:'right'}}>
          Range
          </td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> integrated synthesize</td>
        <td style={{float:'right'}}>integrated synthesizer</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Preamble detection</td>
        <td style={{float:'right'}}>Preamble detection</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Flash Memory</td>
        <td style={{float:'right'}}>Flash Memory</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> SRAM</td>
        <td style={{float:'right'}}>SRAM</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> EEPROM</td>
        <td style={{float:'right'}}>EEPROM</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> GPIO</td>
        <td style={{float:'right'}}>GPIO</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Clock Speed</td>
        <td style={{float:'right'}}>Clock Speed</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Connectors</td>
        <td style={{float:'right'}}>Connectors</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Form Factor</td>
        <td style={{float:'right'}}>Form Factor</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Temperature Range</td>
        <td style={{float:'right'}}>Temperature Range</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}>Length</td>
        <td style={{float:'right'}}>Length</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Width</td>
        <td style={{float:'right'}}>Width</td>

      </tr>
      <tr >
        <td style={{color:'skyblue',float:'left'}}>Weight</td>
        <td style={{float:'right'}}>Weight</td>

      </tr>
      <tr data-aos="fade">
        <td style={{color:'skyblue',float:'left'}}> Please add if any other feature</td>
        <td style={{float:'right'}}> Please add if any other feature</td>

      </tr>
   
    </tbody>
  </table>

</div>


<br></br>


<div className="container" id="div4">
     <button type="button" data-aos="fade"  className="btn btn-primary btn-outline" id="div4button"> VIEW SCHEMATIC </button>

     <button type="button" data-aos="fade" className="btn btn-primary btn-outline" id="div4button"> DOWNLOAD SCHEMETIC</button>

     <button type="button" data-aos="fade" className="btn btn-primary btn-outline" id="div4button"> DOWNLOAD DATASHEET</button>

     
</div>

<br/>



<div className="container-fluid" id="div3">


<div className="row">

  <div className="col-md-4 col-sm-6 col-xs-12">

    
    <div className="card" data-aos="fade-down" id="card1row" style={{marginLeft:'auto',marginRight:'auto',backgroundColor:'#F1F9FF',padding:'5%',color:'#007FEB',paddingTop:'0px'}} >
      <img className="card-img-top" src={cardtop} alt="Card image" style={{height:'50px',width:'20px',float:'right',marginLeft:'90%'}}/>
    
      <p className="card-text"> PROJECT1</p>
      <img className="card-img-top" src={rectangle} alt="Card image" style={{width:'100%'}}/>
      <div className="card-body">
        <h4 className="card-title">Interfacing GPS with 8051 Microcontroller</h4>
      
      </div>
    </div>
  </div>

  <div className="col-md-4 col-sm-6 col-xs-12">

    <div className="card" data-aos="fade-down" id="card1row" style={{marginLeft:'auto',marginRight:'auto',backgroundColor:'#BCE0FD',color:'#007FEB'}} >
        
      <div className="card-body">
        <p className="card-text" style={{backgroundColor:'#BCE0FD'}}> PROJECT2</p>
        <h4 className="card-title">Water Level Controller using 8051 Microcontroller</h4>
        <p> This circuit helps to detect and control the water level in an overhead tank or any other container. This system monitors the water level of the tank and automatically switches ON the motor whenever tank is empty.</p>
     
      </div>
      <div className="card-footer" style={{backgroundColor:'#daebf8',paddingBottom:'1%'}}>
       <p> <img src={account}/> Designed By:</p>
      </div>
    </div>
    
    


  </div>


  <div className="col-md-4 col-sm-6 col-xs-12">

    <div className="card" data-aos="fade-down" id="card1row" style={{marginLeft:'auto',marginRight: 'auto',backgroundColor:'#96cefc',color:'white'}} >
        
      <div className="card-body">
        <p className="card-text" > PROJECT4</p>
        <h4 className="card-title">Stepper Motor Control using 
          8051 Microcontroller</h4>
        <p>The main principle of this circuit is to rotate the stepper motor step wise at a particular step angle. The ULN2003 IC is used to drive the stepper motor as the controller cannot provide current required by the motor.</p>
       
      </div>
      <div className="card-footer" style={{backgroundColor:  '#58b7ff',paddingBottom:'1%'}}>
       <p> <img src={account}/> Designed By:</p>
      </div>
    </div>
    
    


  </div>



  <div className="col-md-4 col-sm-6 col-xs-12">

    
    <div className="card" data-aos="fade-down"  id="card2row" style={{marginLeft:'auto',marginRight: 'auto',backgroundColor:  '#F1F9FF',PADDING:'3%',color:'#007FEB',paddingTop:'0px'}} >
    
  
     
      <div className="card-body">
        <p className="card-text"> FOR STUDENTS</p>  
        <h4 className="card-title">Officia deserunt.</h4>
     <p className="card-text"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p> 
      </div>


   

      <div className="card-body">
        <p className="card-text"> FOR PROFESSIONALS</p>  
        <h4 className="card-title">Officia deserunt.</h4>
     <p className="card-text"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p> 
      </div>
    </div>
  </div>


  <div className="col-md-4 col-sm-6 col-xs-12" >

    <div className="card" data-aos="fade-down"   id="card2row" style={{marginLeft:'auto',marginRight: 'auto',backgroundColor:'#96cefc',color:'white'}} >
        
      <div className="card-body">
        <p className="card-text" > PROJECT3</p>
        <h4 className="card-title">Stepper Motor Control using 
          8051 Microcontroller</h4>
        <p>The main principle of this circuit is to rotate the stepper motor step wise at a particular step angle. The ULN2003 IC is used to drive the stepper motor as the controller cannot provide current required by the motor.</p>
       
      </div>
      <div className="card-footer" style={{backgroundColor:  '#58b7ff',paddingBottom:'1%'}}>
       <p> <img src={account}/> Designed By:</p>
      </div>
    </div>
    
    


  </div>

  <div className="col-md-4 col-sm-6 col-xs-12" >

    <div className="card" data-aos="fade-down"   id="card2row" style={{marginLeft:'auto',marginRight:'auto',backgroundColor:'#BCE0FD',color:'#007FEB',verticalAlign: 'bottom'}} >
        
      <div className="card-body">
        <p className="card-text" style={{backgroundColor:'#BCE0FD'}}> PROJECT5</p>
        <h4 className="card-title">Bidirectional Visitor Counter using 8051 Microcontroller</h4>
        <p> The main intention is to design a system wherein the number of persons entering or leaving a room is displayed on a screen.</p>
        <br/>
        <br/>
      </div>
      <div className="card-footer" style={{backgroundColor:  '#daebf8',paddingBottom:'1%'}}>
       <p> <img src={account}/> Designed By:</p>
      </div>
    </div>
    
    



</div>

</div>
</div>





<div style={{marginLeft:'auto',marginRight:'auto',overflow:'hidden'}}  data-aos="fade" >
    <div className="container-fluid" id="benefits"> 
    <fieldset className="col-sm-12 col-md-12 col-xs-12" id="fieldset1" style={{backgroundColor: 'rgba(0,138,255,0.2)',borderRadius:'65px',padding:'4%',paddingLeft:'5%',paddingRight:'5%',marginLeft: 'auto',marginRight:'auto'}}
     >
    
    
      <legend style={{textAlign: 'center'}} data-aos="flip-up">
     <img src={faq}  id="legend1" /> 
      </legend>
      <img src={faq}  id="tempimg1" data-aos="flip-up" />
      <h1 className="legendheading2 legendheading" style={{fontFamily: 'Roboto Condensed'}}  data-aos="fade">   FREQUENTLY ASKED </h1>
      <div style={{marginTop:'10%'}} >
      <p data-aos="fade"><b> 1. Question question question question question?</b></p>
      <p data-aos="fade"><b> Ans. </b>  gsgfhgjfhg jfdsghjfghjf jddbf jbdgjbgjfjghnfjvn jfbjd jfbjfdfbgdjssngjhdgs jfbgdjbjgjfnkjfnkjbn jfdbjdbjdsbj  jdhfbfjhdgbb
        dvhfhgjhdfgfhkfjhkfhkfhkhjhkgjhkjhbjb</p>
        <br/>
        
      <p data-aos="fade"><b> 1. Question question question question question?</b></p>
      <p data-aos="fade"><b> Ans. </b>  gsgfhgjfhg jfdsghjfghjf jddbf jbdgjbgjfjghnfjvn jfbjd jfbjfdfbgdjssngjhdgs jfbgdjbjgjfnkjfnkjbn jfdbjdbjdsbj  jdhfbfjhdgbb
        dvhfhgjhdfgfhkfjhkfhkfhkhjhkgjhkjhbjb</p>
        <br/>
        
      <p data-aos="fade"><b> 1. Question question question question question?</b></p>
      <p data-aos="fade"><b> Ans. </b>  gsgfhgjfhg jfdsghjfghjf jddbf jbdgjbgjfjghnfjvn jfbjd jfbjfdfbgdjssngjhdgs jfbgdjbjgjfnkjfnkjbn jfdbjdbjdsbj  jdhfbfjhdgbb
        dvhfhgjhdfgfhkfjhkfhkfhkhjhkgjhkjhbjb</p>
      </div>
      </fieldset>
    </div>
    </div>
    





<Footer/>
    </div>;
    
}

export default Product;