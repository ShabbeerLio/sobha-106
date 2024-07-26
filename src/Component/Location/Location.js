import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
                <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.5820538390632!2d77.0001237!3d28.4997713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17d9b184feb3%3A0xd2856053aa19fa38!2sThe%20Party%20Store!5e0!3m2!1sen!2sin!4v1721998406449!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
