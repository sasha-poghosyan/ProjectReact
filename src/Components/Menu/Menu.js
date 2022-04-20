import React from "react";
import {NavLink} from 'react-router-dom'
import './Menu.css';

export default function Menu(){
    return(
        <div id="nav">
            <ul id="ul">
                <NavLink to='/Home'className={({isActive})=>(isActive ?'Li2':'Li1')}><li>Home</li></NavLink>
                <NavLink to='/AboutPage'className= {({isActive})=>(isActive?'Li2':'Li1')}><li>About</li></NavLink>
                <NavLink to='/ContactPage'className={({isActive})=>(isActive?'Li2':'Li1')}><li>Contact</li></NavLink>
                <NavLink to='/Corona'className={({isActive})=>(isActive?'Li2':'Li1')}><li>Corona</li></NavLink>
                <NavLink to='/RegisterPage' className={({isActive})=>(isActive?'Li2':'Li1')}><li>RegisterPage</li></NavLink>
            </ul>

        </div>
    )
}