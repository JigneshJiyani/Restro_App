import React from 'react';

var myStyle={
    fontFamily:'Courier',
    color:'Orange',
}


class Home extends React.Component
{
    render(){
       return(
           
           <div>
               <center><h2 style= {myStyle}>Restaurant Franchise Opportunity</h2></center>
               <img src="Images/12.jpg" height="300" width="460"/>
               <img src="Images/home-about.jpg" width="500"/>
               <img src="Images/11.jpg" height="300"/>
               
               <h5>**We offer you the right opportunity**</h5>
               <p>A franchise with The Sankalp Group comes with an immediate advantage of working with a well established brand. 
                   If you have the spirit of an entrepreneur, 
                   the zeal for growth, commitment for building a successful business and the ability to accept new challenges, 
                   we offer you the right opportunity. 
                   The Sankalp Group offers franchises for a range of restaurant brands for you to select from</p>
                <ul>
                    <li><b>Sankalp</b> - Exclusively for South Indian Cuisine</li>
                    <li><b>Sam's Pizza</b> - The Pizzeria and Salad Bar</li>
                    <li><b>Saffron</b> - The North Indian Barbeque Restaurant</li>
                </ul>
                <p>The Sankalp Group thus gives its franchises a unique advantage to explore business 
                    opportunities with expert assistance and to maximize business performances.</p>
                <a href="http://www.sankalponline.com/restaurant-franchise.aspx" target="_blank">Read More</a>
                
               </div>
               
               
       )
    }
}

export default Home;