import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; 

const testimonials = [
    {
        name: 'Silvia Hatmun',
        role: 'SEO Manager',
        image: 'path_to_image_silvia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
        name: 'Alexander Smith',
        role: 'Graphic Designer',
        image: 'path_to_image_alexander', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
   
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id='testimonial'>
        
        <div className="testimonial-section">
            <h2 className="testimonial-title">TESTIMONIALS</h2>
            <Slider {...settings} className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-role">{testimonial.role}</p>
                        <p className="testimonial-text">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
        </section>

    );
};

export default Testimonial;
