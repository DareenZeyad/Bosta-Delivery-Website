import React from 'react'
import './Tracker.css'
import { SliderContent } from './SliderContent'
import {GoCheck} from 'react-icons/go'
import {FaShippingFast} from 'react-icons/fa'

function Tracker({trackingNumber, currentState, lastUpdate, recipient, promiseDate}) {
    let currStateClassName = ''
    let val = ''
    if(currentState === "DELIVERED" || currentState === "DELIVERED_TO_SENDER") {
        currentState = 'تم تسليم الشحنة'
        currStateClassName = 'delivered'
        val = '100%'
    }
    // else if(currentState === "DELIVERED_TO_SENDER") currentState = 'لم يتم تسليم الشحنة'

    return (
        <div className="hero">
            <div className="deliver-container">
                <div className="content">
                    <div className="single-content">
                        <p>{`${trackingNumber} رقم الشحنة`}</p>
                        <h3 className={currStateClassName}>{currentState}</h3>
                    </div>

                    <div className="single-content">
                        <p>اخر تحديث</p>
                        <h3>{lastUpdate}</h3>
                    </div>

                    <div className="single-content">
                        <p>اسم التاجر</p>
                        <h3>{recipient}</h3>
                    </div>
                    
                    <div className="single-content">
                        <p>موعد التسليم خلال</p>
                        <h3>{promiseDate}</h3>
                    </div>
                </div>

                <div className="deliver-tracker">
                    <div className="slider">
                        <div className="slider-fill">
                            <FaShippingFast className="delivery-icon"/>
                        </div>
                        <div className="icon">
                            <GoCheck className="check-icon"/>
                        </div>
                        <div className="icon">
                            <GoCheck className="check-icon"/>
                        </div>
                        <div className="icon">
                            <GoCheck className="check-icon"/>
                        </div>
                        <div className="icon">
                            <GoCheck className="check-icon"/>
                        </div>
                    </div>
                    <div className="slider-content-container">
                        {SliderContent.map((items, index) => {
                            return(
                                <div className="slider-conent" key={index}>
                                    <p>{items.title}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mobile-bar">
                        <div className="skill-bar">
                            <div className="onway skill-fill">
                                <div className="skill-percent">{val}</div>
                            </div>
                        </div>
                        <div className="bar-content">
                            <p className="skill-title"> : الحالة الحالية للشحنة</p>
                            <h3 className="state">{currentState}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker
