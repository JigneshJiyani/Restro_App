import React from 'react';

class Contact extends React.Component
{
    render(){
       return(
           <div>
            <img src="Images/Icon1.png" height="20" width="20"></img>
            <strong>Address</strong> 
            <p>17th Floor, Sankalp Square 3 -A, Taj Skyline, Sindhubhavan Road, Ahmedabad 380058</p>
            <img src="Images/Icon3.png" height="20"></img>
            <strong>Email :</strong> info@sankalponline.com<br/><br/>
            <img src="Images/Icon2.png" height="20"></img> 
            <strong>Phone:</strong>
            <pre>+91 79-40710000
                Franchise Enquiry:<br/>
                +91 98250 27503 | +91 99099 80259<br/>
                For US And Canada Franchise,<br/>
                +1 (431) 374-3457</pre>             
               </div>
               
       )
    }
}

export default Contact;