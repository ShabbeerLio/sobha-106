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
                            <p>Sobha 106 Gurgaon is a new housing estate by Sobha Limited, that is widely known company in the field of housing industry. This project is surrounded by cover hence it is found in a relatively quiet environment. Sobha 106 Gurgaon stands to provide a comfortable and luxurious lifestyle for people residing in it. Now it is the right time to know more about Sobha 106 Gurgaon in a simple language.                            </p>
                            <p>Sobha 106 Gurgaon property is developed with concepts of modern day architecture. The features of the buildings include; The building structures are fashionable and firm. The strategy is tailored on optimising on natural light and fresh air infiltration. This means that the apartments are bright with adequate fresh air circulating in the rooms. High-quality materials make sure that the homes that they will be constructing is very strong and safe. </p>
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
