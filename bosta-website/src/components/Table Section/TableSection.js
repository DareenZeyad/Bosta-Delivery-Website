import React from 'react'
import './TableSection.css'
import Table from './Table/Table'
import {AiOutlineQuestion} from 'react-icons/ai'

function TableSection({TransitList}) {
    const TransitTimeStamp = TransitList.map((value, index) => { 
        const {state, timestamp} = value;
    });

    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="table-container">
                    <Table TransitList = {TransitList}/>
                </div>

                <div className="address-container">
                    <p>عنوان التسليم</p>
                    <div className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam velit iusto numquam</div>
                    <div className="question-section">
                        <div className="img-container">
                            <AiOutlineQuestion size="70"/>
                        </div>
                        <div className="question-content">
                            <p>!هل يوجد مشكلة في شحنتك؟</p>
                            <div className="button">إبلاغ عن مشكلة</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableSection
