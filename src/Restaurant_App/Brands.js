import React from 'react';

var myStyle1={
    fontFamily:'Courier',
    color:'Orange',
    fontSize:30
}
var myStyle2={
    fontFamily:'Courier',
    backgroundColor:'orange',
    color:'white'
}
var myStyle3={
    fontFamily:'Courier',
    color:'red'
}
class Brands extends React.Component
{
    render(){
       return(
           <div>
               <center><h2 style={myStyle1}>Sankalp Brands</h2></center>
               <ul>
                   <li><a href="http://www.sankalponline.com/sankalp-brands.aspx" target="_blank" style={myStyle3}>Sankalp Restaurants</a>
                   <center><h2 style={myStyle2}>Fine Dining - Sankalp</h2>
                   <img src="Images/10.jpg" height="80"></img></center>
                   <p>:-:The Group opened its first restaurant – ‘Sankalp’ at Ashram Road, 
                       Ahmedabad in 1980. The inherent desire to give customers authentic South 
                       Indian cuisine led to the establishment of Sankalp. With overwhelming customer response, 
                       the first restaurant was an instant success and Sankalp went on to become an 
                       established brand. The rest as they say, is history. Today, Sankalp is one of the 
                       leading chain of restaurants in India and is spread across 7 countries.
                    </p>
                    </li>
                
                   <li><a href="http://www.sankalponline.com/sankalp-brands.aspx" target="_blank" style={myStyle3}>Sam's Pizza</a>
                   <center><h2 style={myStyle2}>Fine Dining - Sam's Pizza</h2>
                   <img src="Images/2.jpg" height="80"></img></center>
                   <p>:-: Having analysed market potential and future prospects, 
                       in 1999 the Group diversified into the western cuisine and successfully 
                       created an own popular brand of pizza – Sam’s Pizza. This was in keeping 
                       with the changing trends that liberalization and the entry of MNCs had brought 
                       into the Indian market.
                    </p>
                    <p>:-: Sam’s pizzeria and salad bar is based on the ‘unlimited’ concept. 
                        It gives a choice of an array of unlimited pizzas, soups, garlic crispies, 
                        more than 20 varieties of fresh and healthy salads and brownie with ice cream. 
                        Sam’s Pizza in fact has been a trend setter for the ‘Unlimited Meal Deal’ 
                        from soups to dessert. At a time when the concept was unheard of, it introduced 
                        the scheme complete with a classy salad bar that found instant appeal among 
                        the young and old alike. In its deserts range, it serves the world’s best brownie. 
                        The pizzeria also offers a robust a la carte menu for discerning food connoisseurs.
                    </p>
                   </li>
                   
                   <li><a href="http://www.sankalponline.com/sankalp-brands.aspx" target="_blank" style={myStyle3}>Saffron Restaurant</a>
                   <center><h2 style={myStyle2}>Fine Dining - Saffron</h2>
                   <img src="Images/3.jpg" height="80"></img></center>
                   <p> :-: In 2001, the Group launched yet another successful restaurant brand – 
                       Saffron serving North Indian cuisine. Named after the world’s most precious spice, 
                       Saffron serves freshest ingredients with the finest tastes. Our chefs fuse together 
                       flavour and aroma to capture the essence of the traditional North Indian cuisine. 
                       True to its name, the Saffron chain epitomizes the royal experience in flavour, 
                       aroma and purity. It was first of its kind as it introduced the unique "do it yourself" 
                       concept in dining. Saffron's dining experience comes complete with a grill at 
                       the centre of the table and variety of starters skewered and ready for the guests to 
                       grill or roast according to taste on their personal grills. Saffron has become synonymous 
                       with Authentic Vegetarian Barbecue And North Indian Cuisine.</p>
                   </li>
                   <li><a href="http://www.sankalponline.com/sankalp-brands.aspx" target="_blank" style={myStyle3}>Sankalp Express Counters</a>
                   <center><h2 style={myStyle2}>Sankalp Express Counters</h2>
                   <img src="Images/4.jpg" height="80"></img></center>
                   <p> :-: In 2012, your favourite brand in South Indian cuisine expand to offer you friendly, 
                       easy to come by, whistlestop Express Kiosks. These quaint outlets that come at 
                       round – the – corner ease have been specially designed to bring to you the same 
                       authentic taste you experienced in Sankalp restaurants. So grab a crisp dosa, 
                       a soft spongy idli or a rich uttapam, even as you are on the go. At whistlestop 
                       convenience our Xpress Kiosks move in to bring you your meal of the day without 
                       cutting into your hectic time schedule.</p>
                    <p> :-: Sankalp’s Kiosk venture also extends to put on your platter the best pizza in town. 
                        Effortlessly made and yet so professional, our Quick Picks are made from the 
                        freshest dough and come with a variety of toppings. Inspired by the incredible 
                        Italian art of pizza making, we spare no effort to bring you authentic taste ~ 
                        that too in a matter of minutes. Sam’s Pizza ~ Quick Pick also offers freshly 
                        baked and flavoured breads, mouth-watering brownies and accompaniments.</p>
                   </li>
               </ul>
               <img src="Images/brands.png" width="100%"></img>
               </div>
               
       )
    }
}

export default Brands;