import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tracker from '../components/DeliveryTracker/Tracker'
import TableSection from '../components/Table Section/TableSection'

import {request} from '../services/request'
import {getshipments} from '../services/serviceObjects/shipments/serviceObjects'

import moment from 'moment'
import arLocal from "moment/locale/ar"

class shipments extends React.PureComponent {
    state = {
        createDate: '',
        currentState: '',
        timeStamp: '',
        currReason: '',
        lastUpdate: '',
        promiseDate: '',      
        supportPhoneNumber: '',
        trackingNumber: '',
        trackingURL: '',
        recipient: 'SOUQ.COM',
        TransitList: []
    }

    constructor(props){
        super(props)
    } 

    componentDidMount(){
        // 6636234, 7234258, 9442984,1094442 
        request(getshipments('9442984')).then((res) => {
            console.log(res)
            if(res){
                const {CreateDate, CurrentStatus, PromisedDate, 
                        SupportPhoneNumbers, TrackingNumber, TrackingURL, TransitEvents} = res;                 
                const {state, timestamp, reason} = CurrentStatus;

                // Splitting the timestamp for the 'Last Update'
                const lastUpdateDay = moment(timestamp).locale('ar_sr').format('dddd');
                const lastUpdateDate = moment(timestamp).locale('en_us').format('h:mmA, DD/MM/YYYY')
                const lastUpdateVar = `at ${lastUpdateDate} ${lastUpdateDay}`
            
                const promiseDateVar = moment(PromisedDate).locale('en_us').format('DD/MM/YYYY')
            
                this.setState({
                    createDate: CreateDate,
                    currentState: state,
                    timeStamp: timestamp,
                    currReason: reason,
                    lastUpdate: lastUpdateVar,
                    promiseDate: promiseDateVar,
                    supportPhoneNumber: SupportPhoneNumbers,
                    trackingNumber: TrackingNumber,
                    trackingURL: TrackingURL,
                    TransitList: [...TransitEvents]
                })
            }
        })
    }
    render(){
        return(
            <>
                <Navbar/>
                <Tracker 
                    trackingNumber = {this.state.trackingNumber} 
                    currentState = {this.state.currentState} 
                    lastUpdate = {this.state.lastUpdate}
                    recipient = {this.state.recipient}
                    promiseDate = {this.state.promiseDate}
                    reason = {this.state.currReason}
                />
                <TableSection 
                    TransitList = {this.state.TransitList}
                />
            </>
        );
    }
}

export default shipments