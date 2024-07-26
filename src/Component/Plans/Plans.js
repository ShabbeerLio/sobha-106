import React, { useState } from 'react'
import "./Plans.css"
import FormFloat from '../Navbar/FormFloat'

const Plans = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };
    console.log(formIsOpen)

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Floor Plans & Pricing</h3>
                <div className="plans-box">
                    <div className="plans-card" onClick={formIsOpen}>
                        <div className="plans-card-title">
                            <p>3 BHK</p>
                            <span>@ On REQUEST</span>
                        </div>
                    </div>
                    <div className="plans-card" onClick={formIsOpen}>
                        <div className="plans-card-title">
                            <p>4 BHK</p>
                            <span>@ REQUEST</span>
                        </div>
                    </div>
                    <div className="plans-card" onClick={formIsOpen}>
                        <div className="plans-card-title">
                            <p>Office Spaces</p>
                            <span>@ REQUEST</span>
                        </div>
                    </div>
                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
