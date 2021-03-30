import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./css/package.scss";
import "./css/packagetablet.scss";
import "./css/packageandroid.scss";
import one from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";
import fifth from "./images/5.png";
import legend from './images/legend.png';
import bullet from './images/bullet2.png';
import a1 from './images/a1.png';
import a2 from './images/a2.png';
import a3 from './images/a3.png';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import a4 from './images/a4.png';
import iot from './images/iot.png';
import modules from './images/modules.png';
import faq from './images/faq.png';
import query from './images/query.png';

import Header from "./Header";
import Footer from "./footer";







function Package(){
    return    ( 
    <div id="Package" >

    <Header/>
<div  id="student" data-aos="fade" >

    <div className="col-sm-7 col-md-7 col-xs-12" style={{width:'100%'}} >
    
        <div  id="studentbox" data-aos="fade-up" data-aos="fade-up">
          <table style={{borderCollapse: 'separate',fontFamily: 'Roboto Condensed'}}> 
            <tr>
            <td>
              <div style={{marginRight:'5%'}}>
            <h1 style={{color:'#007FEB',opacity:'1'}} id="studentboxheading"> STUDENT PACKAGE </h1>
          </div>  
          </td>
            <td style={{overflow:'hidden'}} id="headervl">

            <div className="vl" style={{marginLeft: 'auto',marginRight: 'auto',verticalAlign:'top'}}  ></div>
            </td>
            <td>
            <div style={{marginLeft:'8%'}}>
              <p style={{color:'black',verticalAlign:'bottom'}} id="headerp"> Ace your journey of becoming an IoT expert with an interactive hands-on lab kit developed by experts from IIT.
              </p>
            </div> 
            </td>
            </tr>
            </table>
        </div>
      </div>

        <div className="col-sm-4 col-md-4 col-xs-12 "  id="buttons" style={{width:'100%'}} data-aos="fade-up">
          <button  className="b1" id="button1" style={{fontFamily: 'Roboto Condensed'}}> ADD TO CART </button>
      <br/>
        
          <button classname="b2"  id="button2" style={{fontFamily: 'Roboto Condensed'}}> BUY NOW </button>
        </div>
      
        </div>

      
<div className="hl" data-aos="fade-left"></div>
<br/>



<div className="container-fluid"  id="container2" >

  <div className="heading" >

    <h2 id="heading1" style={{fontFamily: 'Roboto Condensed',fontWeight:'normal',color:'#474747'}} data-aos="fade-up"> KEY FEATURES </h2>

  </div>

  <div className="row" style={{marginTop:'2%',textAlign:'center', width:'100%', marginLeft: 'auto',marginRight: 'auto',fontFamily: 'Roboto Condensed'}}>
    <div className="col-md-0" id="temp"></div>
    
    <div class="col-sm-12 col-md-2 col-xs-12" id="tempdiv" >
    
      <div className="card" style={{border:'0px solid red'}} id="card1" >
        <div id="cardtempwidth" >
        <img className="card-img-top" src={one} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto'}} data-aos="fade-up"/>
        </div>
        <div className="card-body" id="cardtempwidth" data-aos="fade-down">
          <h4 id="tempdivheading"> Industry 4.0 Learning</h4>
          <p  id="tempdivpara" > Encompasses LoRa, BLE,
           <br/> NB-IoT, WiFi and various
            sensors.
            
          </p>
    
        </div>
      </div>
    <hr id="temphr"/>
    </div>
       

    <div class="col-sm-12 col-md-2 col-xs-12" id="tempdiv" >
    
    <div className="card" style={{border:'0px solid red'}} id="card1" >
      <div id="cardtempwidth" >
      <img className="card-img-top" src={second} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto'}} data-aos="fade-up"/>
      </div>
      <div className="card-body" id="cardtempwidth" data-aos="fade-down">
        <h4 id="tempdivheading"> Industry Grade
            IoT Kit</h4>
        <p  id="tempdivpara" >     It comprises all the equipment and study material of the course.
        </p>
  
      </div>
    </div>
  <hr id="temphr"/>
  </div>

  <div class="col-sm-12 col-md-2 col-xs-12" id="tempdiv" >
    
    <div className="card" style={{border:'0px solid red'}} id="card1" >
      <div id="cardtempwidth" >
      <img className="card-img-top" src={third} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto'}} data-aos="fade-up"/>
      </div>
      <div className="card-body" id="cardtempwidth" data-aos="fade-down">
        <h4 id="tempdivheading">    Designed by IIT 
            Professors</h4>
        <p  id="tempdivpara" >    It leverages your IoT expertise
            and makes you industry-ready.
            
          
        </p>
  
      </div>
    </div>
  <hr id="temphr"/>
  </div>

  <div class="col-sm-12 col-md-2 col-xs-12" id="tempdiv" >
    
    <div className="card" style={{border:'0px solid red'}} id="card1" >
      <div id="cardtempwidth" >
      <img className="card-img-top" src={fourth} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto'}} data-aos="fade-up"/>
      </div>
      <div className="card-body" id="cardtempwidth" data-aos="fade-down">
        <h4 id="tempdivheading"> Real-World 
            Projects</h4>
        <p  id="tempdivpara" >     Develop dynamic projects
            like smart street lights, etc
            in this course.
          
        </p>
  
      </div>
    </div>
  <hr id="temphr"/>
  </div>

  <div class="col-sm-12 col-md-2 col-xs-12" id="tempdiv" >
    
    <div className="card" style={{border:'0px solid red'}} id="card1" >
      <div id="cardtempwidth" >
      <img className="card-img-top" src={fifth} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto'}} data-aos="fade-up"/>
      </div>
      <div className="card-body" id="cardtempwidth" data-aos="fade-down">
        <h4 id="tempdivheading">   No
            Pre-requisites</h4>
        <p  id="tempdivpara" >     Learners of all levels can
            benefit from this course with
            absolutely no pre-requisites.
            
          
        </p>
  
      </div>
    </div>
  <hr id="temphr"/>
  </div>


    </div>     
</div>


<div className="hl" style={{marginTop:'1%;'}} data-aos="fade-left"></div>
<br/><br/>





<div style={{marginLeft:'auto',marginRight:'auto'}}>
<div className="container-fluid" id="benefits"> 
<fieldset className="col-sm-12 col-md-12 col-xs-12" id="fieldset1" style={{backgroundColor: 'rgba(0,138,255,0.2)',borderRadius:'65px',padding:'4%',paddingLeft:'5%',paddingRight:'5%',marginLeft: 'auto',marginRight: 'auto'}} >


  <legend style={{textAlign: 'center'}} data-aos="flip-up">
 <img src={legend}  id="legend1" /> 
  </legend>
  <img src={legend}  id="tempimg1" data-aos="flip-up" />
  <h1 className="legendheading2 legendheading" style={{color:"black",fontFamily: 'Roboto Condensed'}} data-aos="fade-up">   BENEFITS OF THE COURSE </h1>
  
  
  <table  style={{fontFamily: 'Roboto Condensed', borderSpacing:'30px',
  borderSpacing: '15px',float:'left'}}>
        <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}   id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>Encompasses cutting edge technologies like LoRa, BLE, WiFi, and various kinds of sensors, microcontroller, and programmer.</td> </tr>
    
        

          <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}   id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>

          Includes numerous real-world projects to give an extensive hands-on experience on these technologies.
          </td> </tr>
    
          <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}   id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>
          Continuous AI monitored evaluations throughout the course ensure consistent learning.
           </td> </tr>
    
           <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}   id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>
          The idea generation stage enables you to shape your ideas and bring them into reality, making you at par with industry standards.
           </td> </tr>
    
           <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}  id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>
          The devices in the course kit have been custom developed for this course, and hence are the best fit for an enriching learning experience.
           </td> </tr>
    
           <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}   id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>
          Best performers of the course will be given internship opportunities in IoT companies.
           </td> </tr>
    
           <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  data-aos="fade"> 
          <td style={{verticalAlign: 'top',paddingRight:'15px'}} > <img src={bullet}  id="bullet" /></td>
          <td style={{paddingBottom:'20px'}}>
          Potential IoT ideas developed during this course can avail funding opportunities for working on their ideas.
           </td> </tr>
    

  </table>
</fieldset>
</div>
</div>


<div className="hl" data-aos="fade-left"></div>

<br/>




<div className="col-md-10 col-sm-1"></div>
<h1 className="legendheading" data-aos="fade-up" style={{position:'relative',textAlign:'center',marginBottom:'1%',  fontFamily: 'Roboto Condensed'}} > COURSE DELIVERABLES </h1>



<div className="container" style={{fontFamily: 'Roboto Condensed'}}>

<table  className="table3" style={{marginLeft:'auto',marginRight:'auto',borderCollapse:'separate',borderSpacing: '10px'}}>
  <tr>
    <td  >
  <button className="btn btn-primary" style={{borderRadius: '10px',paddingTop:'5px',paddingBottom:'5px',float:'right'}}  data-aos="fade-left" id="table3row">
<div className="row" >

    <div className="col-sm-12 col-md-4 col-xs-12" > <img src={b1} id="b" /></div>
    <div className="col-sm-12 col-md-7 col-xs-12" id="temppadding" style={{marginTop:'auto',marginBottom: 'auto',marginRight:'0px'}} >  <h3 id="buttonheading" > Study Modules </h3>  </div>
  </div>
</button>

</td>

<td  >
  <button className="btn btn-primary" style={{borderRadius:'10px',paddingTop:'5px',paddingBottom:'5px'}}  id="table3row" data-aos="fade">
<div className="row" >

    <div className="col-sm-12 col-md-5 col-xs-12"> <img src={b2} id="b" /></div>
    <div className="col-sm-12 col-md-7 col-xs-12" style={{marginTop:'auto',marginBottom: 'auto'}}> <h3 id="buttonheading"  > Dynamic Projects  </h3> </div>
  </div>
</button>
</td>
<td >

  <button  className="btn btn-primary" style={{borderRadius:'10px',paddingTop:'5px',paddingBottom:'5px'}}  data-aos="fade-right" id="table3row">
<div class="row">

    <div className="col-sm-12 col-md-5 col-xs-12" > <img src={b3} id="b" /></div>
    <div className="col-sm-12 col-md-7 col-xs-12"  style={{marginTop:'auto',marginBottom: 'auto'}}>  <h3 id="buttonheading"  > <p id="buttonpara" style={{fontSize:'20px',marginBottom:'2px'}}> Industry Grade</p>  IoT Kit</h3> </div>
  </div>
</button>
</td>
</tr>
</table>

</div>


<div className="container"  >
 
  <div className="row"  id="btnrow2" style={{marginLeft:'auto',marginRight:'auto'}}>
<div className="col-md-1"></div>
    <div className="col-sm-12 col-md-5 col-xs-12"  > 
<table style={{borderCollapse:'separate',borderSpacing:'10px',textAlign: 'center',marginRight: 'auto',marginLeft: 'auto'}}>

<tr>
  <td data-aos="zoom-in">

    <button  id="btn2" style={{backgroundColor: '#81C0F5',color:'white'}}>
  <div className="row">
  
      <div className="col-sm-12 col-md-12 col-xs-12" > <img src={a1} id="c" /> </div>
      <div className="col-sm-12 col-md-12 col-xs-12" style={{marginTop: 'auto',marginBottom: 'auto'}}> <h4 id="buttonheading2"> Video Lectures</h4></div>
    </div>
  </button>
  </td>
  <td data-aos="zoom-in">

    <button id="btn2"  style={{backgroundColor: '#81C0F5',color:'white'}}>
  <div class="row">
  
      <div className="col-sm-12 col-md-12 col-xs-12" > <img src={a2} id="c" /> </div>
      <div className="col-sm-12 col-md-12 col-xs-12" style={{marginTop: 'auto',marginBottom: 'auto'}}> <h4 id="buttonheading2"> Module PDFs</h4></div>
    </div>
  </button>
  </td>
 
</tr>

</table>

    </div>


    <div className="col-sm-12 col-md-4 col-xs-12" style={{marginTop:'auto',marginBottom: 'auto'}} id="tempgrid"> 
    
      <table  style={{borderCollapse:'separate',borderSpacing:'10px',textAlign:'center',marginRight:'auto',marginLeft: 'auto'}}>

        <tr>
          <td data-aos="zoom-in">
        
            <button id="btn2" style={{backgroundColor:'#81C0F5',color:'white'}}>
          <div className="row">
          
              <div className="col-sm-12 col-md-12 col-xs-12" > <img src={a3} id="c" /> </div>
              <div className="col-sm-12 col-md-12 col-xs-12" style={{marginTop:'auto',marginBottom: 'auto'}}>  <h4 id="buttonheading2"> Module Quizzes </h4></div>
            </div>
          </button>
          </td>
          <td data-aos="zoom-in">
        
            <button id="btn2" style={{backgroundColor:'#81C0F5',color:'white'}}>
          <div class="row">
          
              <div  className="col-sm-12 col-md-12 col-xs-12"> <img src={a4} id="c" /> </div>
              <div className="col-sm-12 col-md-12 col-xs-12" style={{marginTop:'auto',marginBottom: 'auto'}}> <h4 id="buttonheading2"> Codes </h4></div>
            </div>
          </button>
          </td>
         
        </tr>
        
        </table>
        
    
    
    
    
    </div>

    
  </div>


</div>


<br/>









<div className="container">
  
  <div className="row"  id="container3" style={{         fontFamily: 'Roboto Condensed'}}>
    <div className="col-sm-6 col-xs-12 col-md-6"  id="modules">
    
       
  <fieldset className="card" id="modulescard" style={{      backgroundColor: 'rgba(92,106,119,0.2)',overflow:'hidden'}}  data-aos="zoom-in">
    <legend className="legend2" data-aos="flip-up">  <img src={modules} style={{height:'150px',width:'220px'}} />  </legend>
  
    <div className="card-body" style={{fontSize:'22px'}}>

      <h2  className="moduleheading" > MODULES </h2>
      
 
      <div className="rounded" style={{          marginRight: 'auto',marginLeft:'auto', borderTop:'6px solid #808080',width:'60%'}}>
      </div>

      <div className="divs2" style={{verticalAlign: 'middle'}}>
        <p style={{verticalAlign: 'middle'}}>
      Introductory
      <br/>
      Microcontrollers and Programming <br/>
      IoT and Communication <br/>
      Basics of WiFi<br/>
      Bluetooth Low Energy (BLE)<br/>
      Introduction to LoRa <br/>
      Introduction to NB-IoT
      <br/>
      Memory and its Types<br/>
      Temperature and Humidity Sensors <br/>
      Motion and Proximity Sensors<br/>
      Pressure Sensor<br/>
      Relay and its Applications <br/>
      Fire, LPG/PNG Sensors<br/>
      LED, Buzzer, and Motor<br/>
      </p>
    </div>
  </div>
  </fieldset>

    
    </div>

    <div className="col-sm-6 col-xs-12 col-md-6" id="projects">
    
      <fieldset className="card" id="projectcard" style={{backgroundColor: 'rgba(92,106,119,0.2)'}} data-aos="zoom-in">
        <legend className="legend2" data-aos="flip-up">  <img src={legend} style={{height:'150px',width:'220px'}}/>  </legend>
        <div className="card-body" style={{fontSize:'22px'}}>
    
          <h2 className="projectheading" > PROJECTS </h2>
          <div className="rounded"   style={{          marginRight: 'auto',marginLeft:'auto', borderTop:'6px solid #808080',width:'60%'}}>
      </div>

      <div className="divs3">
        <p style={{verticalAlign: 'middle'}}>
          Smart Dustbin<br/>
          Smart Street Light<br/>
          Smart Home Switch<br/>
          Temperature Logging Device
          <br/>
          Smart CNG Detectors for Cars
          <br/>
       Environment Monitoring System
 <br/>
 Smart Fire Detection System
 <br/>
 Smart Security Device for Homes
 <br/>
 Smart Parking Sensor
 <br/>
 Anti-theft System for Cupboards <br/>
 </p>
       </div>
                  </div>
    
      </fieldset>
    </div>
  </div>


</div>


<br/>
<br/><br/>





<div className="container" style={{marginLeft:'auto',marginRight:'auto',overflow:'hidden'}} id="iotcontainer">

  
<fieldset  style={{borderRadius:'20px',width:'100%',fontFamily:'Roboto Condensed'}} id="card3" data-aos="fade">

  <legend className="legend3" data-aos="fade-up"> 
    <img src={iot} /> 
   </legend>
  <div id="heading1" style={{textAlign:'center', marginBottom: '2%'}} data-aos="fade">
    <h1 style={{color:'BLACK',fontFamily: 'Roboto Condensed'}} id="iotkitheading">  IOT KIT CONTENTS </h1>
  
  </div>
 <div className="row" style={{width:'100%',marginLeft: 'auto',marginRight: 'auto',color:'rgb(77, 76, 76)'}}>
 
    <div className="col-sm-5 col-xs-12 col-md-5" >
    
<table  id="iottable1" style={{fontFamily: 'Roboto Condensed',color:'rgb(77, 76, 76)'}} >
<tr data-aos="fade">
  <td > MCU Dev Board </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> BLE Module
  </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> LoRa Dev Board </td>
  <td style={{textAlign:'right'}}>2</td>
</tr>
<tr data-aos="fade">
  <td>B-IoT Module</td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> WiFi Module </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td>Programmer </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> Memory Module </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> Temperature Sensor </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> Humidity Sensor </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> Air Quality Sensor </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>
<tr data-aos="fade">
  <td> Motion Sensor </td>
  <td style={{textAlign:'right'}}>1</td>
</tr>





</table>

    
    </div>
    <div className="col-sm-2 col-xs-12 col-md-2"  >
      <div className="vl divider2"  data-aos="slide-up" ></div>
    </div>

    <div className="col-sm-5 col-xs-12 col-md-5" >
    
      <table id="iottable2"  style={{fontFamily: 'Roboto Condensed',color:'rgb(77, 76, 76)'}} data-aos="fade">
        <tr data-aos="fade">
          <td style={{width:'322px',textAlign:'LEFT'}}> Proximity Sensor </td>
          <td style={{textAlign:'right'}}>2</td>
        </tr>
        <tr data-aos="fade">
          <td> Relay Module </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td> CNG Detector </td>
          <td style={{textAlign:'right'}}>2</td>
        </tr>
        <tr data-aos="fade">
          <td> Fire Detector Sensor </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td> Bread Board </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td>Jumper wires </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td> Batteries </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td> Buzzer</td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td>LED, Resistor </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td>Motor (Types of motor) </td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        <tr data-aos="fade">
          <td>Sensor Shield</td>
          <td style={{textAlign:'right'}}>1</td>
        </tr>
        
        
        
        
        
      </table>
    </div>

  </div>

  </fieldset>
</div>


<br></br>



<div style={{marginLeft:'auto',marginRight: 'auto'}} id="secondlastdiv">
  <div className="row" style={{fontFamily: 'Roboto Condensed'}}>
    <div className="col-sm-12 col-xs-12 col-md-6" >
    
    
 
  
       
    <fieldset  className="card" id="card4" style={{backgroundColor:'rgba(0,138,255,0.2)',width:'100%',padding:'1%',borderRadius: '65px'}}>
      <legend className="legend4" data-aos="flip-up">  <img src={faq} style={{height:'25%',width:'40%'}} />  </legend>
      <img src={faq}  id="tempimg2" style={{position:'absolute',overflow:'visible',top:'-70px',left:'25px'}} data-aos="flip-up"/>
 
      
        <h2 id="secondlastcard" style={{color:'rgba(58,58,58,1)',fontFamily: 'Roboto Condensed'}} data-aos="fade-up"> FREQUENTLY ASKED   </h2>
        
      <div className="card-body" id="scrollfaq" style={{overflowY: 'scroll'}}>

        <div data-aos="fade" style={{width:'95%',backgroundColor: '#3aa3ff1e',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'8px',padding:'2%'}}>
          <p >1. Question question question  question?? </p>
          <p style={{color:'rgb(75, 75, 75)',}}> <b>Ans.</b>answer asnwer answer  answer answer answer answer answer <b style={{color: 'blue'}}>....read more</b> </p>
          
        </div>

        
        <div data-aos="fade" style={{width:'95%',backgroundColor: '#3aa3ff1e',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'8px',padding:'2%'}}>
          <p >2. Question question question  question?? </p>
          <p style={{color:'rgb(75, 75, 75)',}} > <b>Ans.</b> answer asnwer answer  answer answer answer answer answer <b style={{color: 'blue'}}>....read more</b> </p>
          
        </div>
        
        <div data-aos="fade" style={{width:'95%',backgroundColor: '#3aa3ff1e',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'8px',padding:'2%'}}>
          <p >3. Question question question question?? </p>
          <p  style={{color:'rgb(75, 75, 75)',}}> <b>Ans.</b> answer asnwer answer  answer answer answer answer answer <b style={{color: 'blue'}}>....read more</b> </p>
          

      </div>
</div>
    </fieldset>


    
    </div>

    <div className="col-sm-12 col-xs-12 col-md-6" >
    
       
      <fieldset className="card" id="card4" style={{backgroundColor: '#80c1ff', padding:'3%',borderRadius: '50px'}}  >
        <legend className="legend4" style={{marginLeft:'auto',marginRight:'auto'}}  data-aos="flip-up">  <img src={query} style={{height:'10%',width:'40%'}} />  </legend>
      
        <img src={query}  id="tempimg2" style={{position:'absolute',overflow:'visible',top:'-70px',left:'25px'}} data-aos="flip-up"/>
 
  
          <h2 id="secondlastcard" style={{fontFamily: 'Roboto Condensed'}} data-aos="fade-up"> CONTACT FOR  QUERIES  </h2>
          
   
       
        <div className="card-body">
  
          <div style={{width:'85%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'6%'}} data-aos="fade">
            
              <label for="fname" style={{color:'white'}}>Your Name</label>
          
            
  
              <input type="text" id="fname" name="fname" style={{width: '100%',marginTop:'1%',
              backgroundColor: '#80c1ff',
              border:'0px solid black',
              height:'25px',
              borderBottom:'3px solid white',
              color:'white'  }}/>
            
          </div>
  <br/>
  
          <div style={{width:'85%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'6%'}}  data-aos="fade">
            
            <label for="fname" style={{color:'white'}}>E-mail ID</label>
            <br/>
          
  
            <input type="text" id="fname" name="fname"    style={{width: '100%',marginTop:'1%',
              backgroundColor: '#80c1ff',
              border:'0px solid black',
              height:'25px',
              borderBottom:'3px solid white',
              color:'white'}}   />
          
        </div>
  <br/>
        <div style={{width:'85%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'6%'}}  data-aos="fade">
            
          <label for="fname" style={{color:'white'}}>Query</label>
          <br/>
        
  
          <input type="text" id="fname" name="fname"    style={{width: '100%',marginTop:'1%',
              backgroundColor: '#80c1ff',
              border:'0px solid black',
              height:'25px',
              borderBottom:'3px solid white',
              color:'white'}}   />
        
      </div>
  
  <br/>
          
  <div style={{width:'100%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px',marginBottom:'4%'}}>
            
  <button type="submit" data-aos="fade" style={{backgroundColor: '#0084ff',color:'white',width:'100px',height:'50px',borderRadius: '20px',border:'1px solid white',fontWeight:'bold',float:'right'}} > Submit </button>
  </div>
  
  
  
    </div>
      </fieldset>
  
    </div>

</div>
</div>


<br/>
<br></br>
<Footer/>

    </div>
    
    );
    
    
}

export default Package;