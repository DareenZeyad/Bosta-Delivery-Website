import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { LoginSectionItems } from './LoginSectionItems'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

class Navbar extends Component {
    state = {
        menuIcon: false
    }
    render(){
        return (
            <>
                <header>
                    <div className="container">
                        <div className="logo-container">
                            <a href="https://bosta.co/ar/" className="logo">
                                <img src="https://bosta.co/wp-content/uploads/2019/08/Component.svg" alt="Bosta-Logo"/>
                            </a>

                            <ul>
                                {MenuItems.map((items, index) => {
                                    return(
                                        <li key={index}>
                                            <a href={items.url} className={items.cName}>
                                                {items.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="login-container">
                            <ul>
                                {LoginSectionItems.map((items, index) => {
                                    return(
                                        <li key={index}>
                                            <a href={items.url} className={items.cName}>
                                                {items.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div 
                                className="icon-container"
                                onClick = {() => {
                                    this.setState({menuIcon: !this.state.menuIcon})
                                }}
                            >
                                <FiMenu className={this.state.menuIcon ? 'active-menu menu-icon': 'menu-icon'}/>
                                <GrClose className={this.state.menuIcon === false ? 'active-close menu-icon': 'menu-icon'}/>
                            </div>
                        </div>

                        <ul className={this.state.menuIcon ? 'mobile-nav active-nav': 'mobile-nav'}>
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#">الأسعار</a></li>
                            <li><a href="#">كلم المبيعات</a></li>
                            <li><a href="#">تتبع شحنتك</a></li>
                            <li><a href="#">تسجيل الدخول</a></li>
                        </ul>
                    </div>
                </header>
            </>
        ) 
    }
}

export default Navbar
