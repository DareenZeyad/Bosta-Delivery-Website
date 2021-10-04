import React from 'react'
import './Table.css'
import { TableData } from './TableData'
import moment from 'moment'
import arLocal from "moment/locale/ar"

function Table({TransitList}) {
    var commonHub
    TransitList.map((value, index) => {
        if (value.hub) commonHub = value.hub
        
        value.state === 'TICKET_CREATED' ? value.state = 'تم إنشاء الشحنة':
        value.state === 'PACKAGE_RECEIVED' ? value.state = 'تم إستلام الشحنة من التاجر':
        value.state === 'IN_TRANSIT' ? value.state = 'تم الشحن':
        value.state === 'NOT_YET_SHIPPED' ? value.state = 'لم يتم اخراج الشحنة':
        value.state === 'OUT_FOR_DELIVERY' ? value.state = 'الشحنة خرجت للتسليم':
        value.state === 'WAITING_FOR_CUSTOMER_ACTION' ? value.state = 'لم يتم تسليم الشحنة':
        value.state === 'DELIVERED_TO_SENDER' ? value.state = 'تم التسليم للمرسل':
        value.state = 'تم التسليم'
    })

    return (
        <div className="table-container">
            <p className="table-header">تفاصيل الشحنة</p>
            <table>
                <thead>
                    <tr>
                        <th>الفرع</th>
                        <th>التاريخ</th>
                        <th>الوقت</th>
                        <th>تفاصيل</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TransitList.map((item, index) => {
                            var date = moment(item.timestamp).locale("en_us").calendar()
                            var time = moment(item.timestamp).locale("en_us").format("hh:mm A")
                            return(
                                <tr key={index}>
                                    <td>{commonHub}</td>
                                    <td>{date}</td>
                                    <td>{time}</td>
                                    <td className={`${item.reason ? 'reason state' : 'no-reason state'}`}>
                                        {item.state}
                                        <p>
                                            {item.reason}
                                        </p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
