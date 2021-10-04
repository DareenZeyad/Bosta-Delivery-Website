import React from 'react'
import './Tracker.css'
// import './ShipmentCreated.css'
// import './ShipmentReceived.css'
import './ShipmentDelivered.css'
import { SliderContent } from './SliderContent'
import {GoCheck} from 'react-icons/go'
import {FaShippingFast} from 'react-icons/fa'

function Tracker({trackingNumber, currentState, lastUpdate, recipient, promiseDate, reason}) {
    let currStateClassName = ''
    let val = ''
    const allStates = ['تم إنشاء الشحنة', 'تم إستلام الشحنة من التاجر', 'الشحنة خرجت للتسليم', 'تم تسليم الشحنة']
    const allClassNames = ['shipment-created', 'shipment-received', 'shipment-canceled', 'delivered']
    
    const checkNames = ["SHIPMENT_CREATED", "RECEIVED_SHIPMENT", "SHIMPENT_OUT_OF_DELIVERY", "DELIVERED", "DELIVERED_TO_SENDER"];
    for (let i = 0; i < checkNames.length; ++i){
        if(currentState === checkNames[i]){
            currentState = allStates[Math.min(i, 3)];
            currStateClassName = allClassNames[Math.min(i, 3)];
            val = Math.min(((i + 1) * 25), 100).toString() + '%';
        }
    }

    return (
        <div className="hero">
            <div className="deliver-container">
                <div className="content">
                    <div className="single-content">
                        <p>{`${trackingNumber} رقم الشحنة`}</p>
                        <h3 className={`${reason ? `reason ${currStateClassName}` : currStateClassName} `}>
                            {currentState}
                        </h3>
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
                        <div className={`slider-fill ${currStateClassName}`}>
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
                        <div className="slider-content">
                            <p>تم إنشاء الشحنة</p>
                            <p className="reason">{reason}</p>
                        </div>
                        <div className="slider-content">
                            <p>تم  إستلام الشحنة من التاجر</p>
                            <p className="reason">{reason}</p>
                        </div>
                        <div className="slider-content">
                            <p>الشحنة خرجت للتسليم</p>
                            <p className="reason">{reason}</p>
                        </div>
                        <div className="slider-content">
                            <p>تم التسليم</p>
                            <p className="reason">{reason}</p>
                        </div>
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
