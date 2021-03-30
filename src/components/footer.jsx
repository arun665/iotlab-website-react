import react from "react";
import lastimg from "./images/lastimg.png";
import map from "./images/map.png";
import mail from "./images/mail.png";
import facebook from "./images/facebook.png";
import insta from "./images/insta.png";
import linkedin from "./images/linkedin.png";
function Footer(){
    return <>
    <br/><br/>

<div className="container-fluid" id="footer" style={{marginBottom:'0px',backgroundColor:'#007FEB',PaddingLeft:'6%'}} data-aos="fade">
<table style={{width: '100%'}}>
  <tr>
    <td id="lastcol1" >
 <img src={lastimg} class="lastimg" />
    </td>
<td  id="lastcol2">

   
<table id="tableb" style={{textAlign:'left',fontFamily: 'Roboto Condensed',fontWeight:'normal'}}>
  <tr>
    <td colspan="2"> <h4>Contact:</h4></td>
  </tr>
  <tr>
    <td style={{verticalAlign:'top'}}>
         <img src={map} id="map" style={{verticalAlign:'top',marginTop:'3px'}} />
    </td>
    <td  style={{verticalAlign:'top'}}> 
      <p style={{verticalAlign:'top'}}>Address - Room No. 6, 3rd Floor, East Wing,<br/> M. Visvesvaraya Block, IIT Ropar, Rupnagar, <br/>
        Punjab, India - 140001 </p>
    </td>
  </tr>
  <tr>
    <td style={{verticalAlign:'top'}}>
         <img src={mail} id="mail" />
    </td>
    <td>
 <p> info@scratchnest.com</p>
    </td>
  </tr>
  
</table>

          </td>
  </tr>





  <tr>
 

  </tr>
  <tr>
    <td colspan="2">
<buttons id="footerbuttons" style={{float:'right'}}>
 
<img src={facebook} class="fa" />
<img src={insta}   class="fa" />
<img src={linkedin}  class="fa fa2" />

</buttons>

 </td>
 </tr>
 </table>
</div>

    </>;
}

export default Footer;