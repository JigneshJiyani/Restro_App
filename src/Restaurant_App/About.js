import React from 'react';
//import './Src.css';

var myStyle1={
    fontFamily:'Courier',
    backgroundColor:'orange',
    color:'green'
}
var myStyle2={
    fontFamily:'Courier',
    backgroundColor:'black',
    color:'black'
}

class About extends React.Component
{
    render(){
       return(
           <div>
               <center><h2 style={myStyle1}>About Sankalp Group</h2></center>
               <center><h3 style={myStyle2}>Our Commitment</h3></center>
               <p> “In a world that is increasingly coming closer we seek to promote the harmony of Indian culture, 
                   cuisine and architecture. As a fast growing Indian company in various countries, 
                   it is our commitment to live up to our nation's promise to give the best to the world. 
                   We strive to set benchmarks in various aspects of our businesses in Food, Hospitality, 
                   Hoteliering and Real Estate.”</p>
                   <center><h3 style={myStyle2}>Who We Are</h3></center>
                <p> :-:Starting with a speciality restaurant in Ahmedabad in 1980, 
                    the Group today has more than 150 successfully operating restaurants across the globe. 
                    It is a highly diversified entity with interests in Hospitality, 
                    Packaged Foods, Manufacturing And Distribution, Exports, Hoteliering and Real Estate.</p>
                <p> :-:Considered as one of the fastest growing companies in India, 
                    the Group is spearheaded to becoming a major player in the economic scenario of India.
                    Apart from India, it has a strong presence in countries like U.S.A., 
                    Canada, U.K., U.A.E, Australia.</p>
                <div>
                <center><h3 style={myStyle2}>VISION</h3></center>
                    <p>
                    :-:To create an unmatched experience by maintaining the highest standard of quality, 
                    hygiene, service and customer satisfaction.
                    </p>
                </div>
                <div>
                <center><h3 style={myStyle2}>MISSION</h3></center>
                    <p>
                    :-:To repeatedly offer value addition in all spheres thereby inducing loyalty by patrons. 
                    To capture, recreate and replicate the brand experience in as many areas as possible.
                    </p>
                </div>
                <img src="Images/awards.png" width="1340"></img>
               </div>
               
       )
    }
}

export default About;