import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OverviewData from './OverviewData'

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form heading={"Book Your Site Visit"} btntxt={"Enquire Now"} />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>SOBHA 106 Gurgaon is not just an address where you live, but it is a home in the true sense where you can prosper. The project provides decent sized apartments that are also planned to accommodate a range of sizes and compositions of a family. The look and feel of each apartment gives enough comfort and sophistication to the people who live there.</p>
                            <p>In addition to that, the location of SOBHA 106 Gurgaon offers more benefits to the intended users. It is located in a strategic position in relation to schools, hospitals, shops, and other necessary amenities as well as transport. This makes it fit the families that are seeking a place to live in that will offer easy access to all the basic needs in their daily lives. </p>
                        </div>
                        <div className="overview-category">
                                <ReactOwlCarousel
                                    items={6}
                                    nav={true}
                                    dots={false}
                                    responsive={responsiveOptions}
                                    >
                                    {OverviewData.map((item) => (
                                    <div className="category-card" key={item.id}>
                                        <img src={item.cover} alt="Sobha 106 Gurgaon " />
                                        <p>{item.title}</p>
                                    </div>
                            ))}
                                </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
