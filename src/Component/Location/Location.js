import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.163360433983!2d77.00170117536518!3d28.504732389872995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d170006310df1%3A0xfb39cdcad64bd2da!2sSobha%20106!5e0!3m2!1sen!2sin!4v1721994571308!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
