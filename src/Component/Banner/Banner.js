import React from 'react'
import bannerimg from "../../Assets/banner.jpg"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="Sobha Aranya" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>Sobha 106</h2>
                        <h5>At Sector 106, Dwarka Expressway , Gurgaon</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 3 & 4 BHK Luxurious Apartments & Studios  </p>
                        <p>Price Starts <span>@ ₹7.25  Cr*</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
