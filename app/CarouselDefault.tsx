import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 


const CarouselDefault: React.FC = () => {

    return ( 
        <Carousel className="mt-10 w-1/4 self-center"> 
            <div> 
                <img src="/fh-bane-condition.png" alt="image1" /> 
            </div> 
            <div> 
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" alt="image2" /> 
                <p className="legend">Image 2</p> 

            </div> 
            <div> 
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png" alt="image3"/> 
                <p className="legend">Image 3</p> 

            </div> 
            <div> 
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png" alt="image4"/> 
                <p className="legend">Image 4</p> 

            </div> 
            <div> 
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png" alt="image5"/> 
                <p className="legend">Image 5</p> 

            </div> 
        </Carousel> 
    )
}

export default CarouselDefault;