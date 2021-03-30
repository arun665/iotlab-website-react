import "./css/home.scss";
import "./css/hometablet.scss";
import "./css/homeandroid.scss";
import aboutiot from './images/aboutiot.png';
import headeriotlab from './images/headeriotlab.png';
import creator from './images/creator.png';
import one from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";
import fifth from "./images/5.png";
import internship from "./images/internship.png";

import Header from "./Header";
import Footer from "./footer";


function Home(){
    return     <div id="Home">

<Header/>
<div  id="student" data-aos="fade" >

    <div className="col-sm-7 col-md-7 col-xs-12" style={{width:'100%'}} >
    
        <div  id="studentbox" data-aos="fade-up" data-aos="fade-up">
          <table style={{borderCollapse: 'separate',fontFamily: 'Roboto Condensed'}}> 
            <tr>
            <td>
              <div style={{marginRight:'5%'}}>
  
            <img src={headeriotlab} id="div1iotimg" />
    
          </div>  
          </td>
            <td  id="headervl">

            <div className="vl" style={{marginLeft: 'auto',marginRight: 'auto',verticalAlign:'top'}}  ></div>
            </td>
            <td>
            <div style={{marginLeft:'8%'}}>
              <p style={{color:'black',verticalAlign:'bottom'}} id="headerp"> The complete hands-on lab course from IIT Ropar-TIF AWaDH
              </p>
            </div> 
            </td>
            </tr>
            </table>
        </div>
      </div>

        <div className="col-sm-4 col-md-4 col-xs-12 "  id="buttons" style={{width:'100%'}} data-aos="fade-up">
          <button  className="b1" id="button1" style={{fontFamily: 'Roboto Condensed'}}> LOGIN </button>
      <br/>
        
          <button classname="b2"  id="button2" style={{fontFamily: 'Roboto Condensed'}}> JOIN USE</button>
        </div>
      
        </div>

      
<div className="hl" data-aos="fade-left"></div>
<br/>






<div style={{marginLeft:'auto',marginRight:'auto'}} id="container5">


  <div id="headingdiv">
    <h1 className="heading2" style={{fontFamily:'Roboto Condensed'}}  data-aos="fade-up">  OUR COURSES</h1>
    <p className="heading3" data-aos="fade-down" style={{fontFamily: 'Roboto Condensed'}}>Tailored courses for all levels of learners
  </p>
    </div>
  <div className="container-fluid" id="benefits"> 
<div className="row">
    <div className="col-sm-6 col-md-6 col-xs-12" >

      <table>
        <tr>
          <td>
         
            
<div id="student2" data-aos="fade" >

  
      <div  id="studentbox2" data-aos="fade-up" data-aos="fade-up">
        <table id="table4" style={{borderCollapse:'separate',fontFamily: 'Roboto Condensed',borderSpacing:'10px'}}> 
          <tr>
          <td id="student2row">

            <div style={{marginRight:'1%'}}>
              <h1 style={{color:'#007FEB',opacity:'1'}} id="studentboxheading2"> FOR STUDENTS </h1>
            </div>  
        </td>  
        

          <td  id="headervl2">

          <div className="vl2" style={{marginLeft:'auto',marginRight:'auto',verticalAlign:'top',textAlign:'center'}}  ></div>
          </td>
          <td style={{verticalAlign: 'middle'}}>
          <div style={{marginLeft:'8%'}} style={{verticalAlign: 'middle'}}>
            <p style={{color:'black',verticalAlign: 'bottom'}} id="headerp1"> Become an IoT expert with an interactive hands-on lab course developed by experts from IIT.
           
            </p>
        </div>
          </td>
          </tr>
          </table>
      </div>
    </div>

    


            


            
            

          </td>
        </tr>
      </table>
    </div>

    
    <div className="col-sm-6 col-md-6 col-xs-12" >
      <table>
        <tr>
          <td>
        
         
            <div id="collage" data-aos="fade" >

  
              <div  id="collagebox2" data-aos="fade-up" data-aos="fade-up">
                <table id="table4" style={{borderCollapse: 'separate',fontFamily: 'Roboto Condensed',borderSpacing:'10px'}}> 
                  <tr >
                  <td id="collage2row">
        
                    <div style={{marginRight:'1%'}}>
                      <h1 style={{color:'#007FEB',opacity:'1'}} id="collageboxheading2"> FOR COLLEGES </h1>
                    </div>  
                  
                
                </td>
                  <td  id="headervl3">
        
                  <div className="vl3" style={{marginLeft:'auto',marginRight:'auto',verticalAlign:'top'}}  ></div>
                  </td>
                  <td style={{verticalAlign: 'middle'}}>
                  <div style={{marginLeft:'5%'}} style={{verticalAlign: 'middle'}}>
                    <p style={{color:'black',verticalAlign: 'bottom'}} id="headerp3" > 
                      The complete lab curriculum and set up for schools and colleges to make the students industry-ready.

                   
                    </p>
                </div>
                  </td>
                  </tr>
                  </table>
              </div>
            </div>
        
            
              
        




          </td>
        </tr>
        <tr>
          <td>
            
            <div id="professionals" data-aos="fade" >

  
              <div  id="professionalsbox2" data-aos="fade-up" data-aos="fade-up">
                <table id="table4" style={{borderCollapse: 'separate',fontFamily: 'Roboto Condensed',borderSpacing:'10px'}}> 
                  <tr>
                  <td id="collage2row">
        
                    <div style={{marginRight:'1%'}}>
                      <h1 style={{color:'#007FEB',opacity:'1'}} id="professionalsheading2" > FOR PROFESSIONALS </h1>
                    </div>  
                  
                  
                </td>
                  <td  id="headervl3">
        
                  <div className="vl3" style={{marginLeft:'auto',marginRight: 'auto'}}  ></div>
                  </td>
                  <td style={{verticalAlign: 'middle'}}>
                  <div style={{marginLeft:'10%'}} style={{verticalAlign: 'middle'}}>
                    <p style={{color:'black'}} id="headerp3"> 
                      Enhance your knowledge with the industry-standard curriculum and develop revolutionary products.

                   
                    </p>
                </div>
                  </td>
                  </tr>
                  </table>
              </div>
            </div>
        
            
              
        



          </td>
        </tr>
     
      </table>
    </div>
</div>


  </div>
  </div>

  







  <div style={{marginLeft:'auto',marginRight:'auto'}} id="containertemp">


    <div id="headingdiv">
      <h1 className="heading2" style={{fontFamily: 'Roboto Condensed'}} data-aos="fade-up">  OUR COURSES</h1>
      <p className="heading3"  style={{fontFamily: 'Roboto Condensed'}} data-aos="fade-down">Tailored courses for all levels of learners
    </p>
      </div>
    <div className="container-fluid" id="benefits"> 
  <div className="row">
      <div className="col-sm-6 col-md-6 col-xs-12" >
  
     
           
              
  <div id="student2" data-aos="fade" >
  
    
        <div  id="studentbox2" data-aos="fade-up" data-aos="fade-up">
        
       
  
              <div style={{marginRight:'3%'}}>
                <h1 style={{color:'#007FEB',opacity:1}} id="studentboxheading2"> FOR STUDENTS </h1>
              </div>  
            
          </div>  
      
        </div>
      </div>
  
      
  
  
  
              
  
  
              
              
  
    
   
  
      
      <div className="col-sm-6 col-md-6 col-xs-12" >
     
              <div id="collage" data-aos="fade" >
  
    
                <div  id="collagebox2" data-aos="fade-up" data-aos="fade-up">
         
          
                      <div style={{marginRight:'5%'}}>
                        <h1 style={{color:'#007FEB',opacity:'1'}} id="collageboxheading2"> FOR COLLEGES </h1>
                      </div>  
           
                    
                  </div>  
                
                 
            
                </div>
              </div>
          
              
       
  
  
  
  
              <div className="col-sm-6 col-md-6 col-xs-12" >
     
              
              <div id="professionals" data-aos="fade" >
  
    
                <div  id="professionalsbox2" data-aos="fade-up" data-aos="fade-up">
                
                      <div style={{marginRight:'3%'}}>
                        <h1 style={{color:'#007FEB',opacity:'1',verticalAlign: 'middle'}} id="professionalsheading2" > FOR PROFESSIONALS </h1>
                      </div>  
                    
                  </div>  

                </div>
              </div>
          
              
          
          
  
  
  
   
      </div>
  </div>
  
  
    </div>







<div>
    <div style={{marginLeft:'auto',marginRight:'auto'}} id="container1">
    <div className="container" id="benefits"> 
    <fieldset classname="col-sm-12 col-md-12 col-xs-12" id="fieldset1" style={{backgroundColor: 'rgba(0,138,255,0.2)',borderRadius:'65px',padding:'4%',paddingLeft:'5%',paddingRight:'5%',marginLeft: 'auto',marginRight: 'auto'}} >
    
    
      <legend style={{textAlign:'center'}} data-aos="flip-up">
     <img src={aboutiot}  id="legend1" /> 
      </legend>
  

      <div id="legendheadingdiv">
      <h1 className="legendheading2 legendheading" style={{fontFamily:'Roboto Condensed'}} data-aos="fade-up">  ABOUT IOT LAB </h1>
      <p className="legendheading3" data-aos="fade-down" style={{fontFamily: 'Roboto Condensed'}}> The complete course to become industry-ready
    </p>
      </div>
      <table id="table1" style={{fontFamily:'Roboto Condensed', borderSpacing:'30px',borderSpacing: '15px',float:'left'}}>
            <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}}  > 
            
              <td data-aos="fade">
              
                IoTLab is a course comprising a full-fledged lab curriculum and equipment. It features various exhaustive modules, projects, and evaluation tests designed by experienced professors from IIT to provide an unparalleled learning opportunity. The course kit contains all the necessary devices and equipment for the course. It features LoRa, along with the latest technologies like Bluetooth, WiFi, and NB-IoT, empowering learners to develop real-world products, give form to their ideas, and explore the ever-expanding world of opportunities. 
    
              
              </td> </tr>
        
            
    
      
      </table>
    </fieldset>
    </div>
    </div>
</div>

    
    


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
      <img className="card-img-top" src={internship} alt="Card image"  style={{width:'70%',marginLeft: 'auto',marginRight: 'auto',border:'1.5px solid black',borderRadius: '25px'}} data-aos="fade-up"/>
      </div>
      <div className="card-body" id="cardtempwidth" data-aos="fade-down">
        <h4 id="tempdivheading">    Internship
                Opportunities</h4>
        <p  id="tempdivpara" >        Best performers of the
                course can secure
                industrial internships
              
          
        </p>
  
      </div>
    </div>
  <hr id="temphr"/>
  </div>


    </div>     
</div>


<div className="hl" style={{marginTop:'1%;'}} data-aos="fade-left"></div>
<br/><br/>










<div style={{marginLeft:'auto', marginRight:'auto'}} id="container4">
  <div className="container" id="benefits"> 
  <fieldset className="col-sm-12 col-md-12 col-xs-12" id="fieldset2" style={{backgroundColor:'rgba(0,138,255,0.2)',borderRadius:'65px',padding:'4%',paddingLeft:'5%',paddingRight:'5%',marginLeft: 'auto',marginRight: 'auto'}} >
  
  
    <legend style={{textAlign: 'center'}} data-aos="flip-up">
   <img src={creator}  id="legend2" /> 
    </legend>
    <img src={creator}  id="tempimg2" data-aos="flip-up" />

    <div id="legendheadingdiv2">
    <h1 className="legendheading4 legendheading" style={{fontFamily: 'Roboto Condensed'}} data-aos="fade-up"> MESSAGE FROM THE CREATOR</h1>
  
    </div>
    <table id="table2" style={{fontFamily: 'Roboto Condensed', borderSpacing:'30px',
    borderSpacing: '15px',float:'left'}}>
          <tr style={{color:'rgb(77, 76, 76)',marginBottom:'30px'}} > 
          
            <td >
            <p data-aos="fade">
              “Our engineering colleges breed the most brilliant minds of the nation, full of enthusiasm, brimming with extraordinary ideas. But due to lack of infrastructure and knowledge, they vanish into nothingness. Numerous innovations are possible and still untouched in the field of IoT, clearly emphasizing the importance of the subject.
</p>
<p data-aos="fade">
            
              Opening a whole new world of opportunities and career paths, this IoT lab serves as a basic curriculum to introduce our students to this evolving stream and provide them with the best in education, resources, infrastructure, learning, and a challenging and practical environment.
</p>
<p data-aos="fade">
             
              Having created a product with the best and most of my efforts, I present this to you and hope it serves its very purpose - providing state-of-the-art education to the country’s future engineers.”
</p>
<p data-aos="fade">
             
              Dr Suman Kumar<br/>
Asst. Professor, Electrical Department, IIT Ropar<br/>
Domain Coordinator - IoT, AWaDH IIT Ropar<br/>
<br/>
</p>
            
            </td> </tr>
      
          
  
    
    </table>
  </fieldset>
  </div>
  </div>
  
  








<br/>
<br></br>


<Footer/>
    </div>





    
}

export default Home;