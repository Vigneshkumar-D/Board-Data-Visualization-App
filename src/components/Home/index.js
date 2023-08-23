import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LineChartContainer from '../LineChartComponent'
import { FaGreaterThan } from "react-icons/fa6";
import PieChartComponent from '../PieChartComponent'
import { AiOutlineDoubleLeft} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import LeftContainer from '../LeftContainer'

import './index.css'

class Home extends Component{
    state = {
        sidebarstate: false,
      }

    toggleMenu = () => {
        this.setState({ sidebarstate: !this.state.sidebarstate });
      };

render(){
    const {sidebarstate} = this.state
    console.log(sidebarstate)
    return(
        <div className="home-container">
            <div className={
                sidebarstate
                ? "home-left-container smallscreenshow"
                : "home-left-container smallscreenhide"
                }>
            <div className="bigscreen">
                <LeftContainer />
            </div>
            <div className='smallscreen'>
                <div className='btn-con'>
                        <button
                            type="button"
                            onClick={this.toggleMenu}
                            className="menu-icon"
                        >
                        <AiOutlineDoubleLeft className='left-arrow'/>
                        </button>
                    </div>
                    <LeftContainer />
                </div>
            </div> 
            <div className='home-right-container'>
                <BiMenu className='bi-menu-con' onClick={this.toggleMenu}/>
                <div className='home-right-top-container'>
                    <h1 className='dashboard-title'>Dashboard</h1>
                    <div className='home-right-sub-container'>
                        <div className='search-container'>
                            <input type='search' className='search-input' placeholder='Search...' />
                            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692607132/OpeninApp%20Assignment/Search_icon_rs9i6d.png" className='search-icon' alt="search icon" />
                        </div>            
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692607241/OpeninApp%20Assignment/Vector_1_gyib1r.png" className='notification-icon' alt='notification icon' />
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692607241/OpeninApp%20Assignment/Mask_Group_ny5ivl.png" className='profile' alt='profile pic' />
                    </div>
                </div>
                <div className='search-container-mobile'>
                            <input type='search' className='search-input' placeholder='Search...' />
                            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692607132/OpeninApp%20Assignment/Search_icon_rs9i6d.png" className='search-icon' alt="search icon" />
                        </div>
                <div className='home-right-bottom-container'>
                    <div className='home-right-bottom-top-container'>
                        <div className='revenue-container'>
                            <img className='revenue-image' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692611849/OpeninApp%20Assignment/Vector_2_zjhhtr.png" alt="revenue pic" />
                            <p className='revenue-title'>Total Revenue</p>
                            <h1 className='revenue'>$2,129,430</h1>
                        </div>
                        <div className='transaction-container'>
                            <img className='transaction-image' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692611849/OpeninApp%20Assignment/Vector_3_oypd5c.png" alt="transaction pic" />
                            <p className='transaction-title'>Total Revenue</p>
                            <h1 className='transaction'>1,520</h1>
                        </div>
                        <div className='likes-container'>
                            <img className='likes-image' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692611849/OpeninApp%20Assignment/Vector_4_g52ws9.png" alt="likes pic" />
                            <p className='likes-title'>Total Likes</p>
                            <h1 className='likes'>9,721</h1>
                        </div>
                        <div className='users-container'>
                            <img className='users-image' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692611849/OpeninApp%20Assignment/Vector_5_miwkcb.png" alt="users pic" />
                            <p className='users-title'>Total Users</p>
                            <h1 className='users'>892</h1>
                        </div>
                    </div>
                    <div className='activity-container'>
                        <h1 className='activity-title'>Activity</h1>
                        <div className='graph-container'>
                        <LineChartContainer />
                        </div>
                    </div>
                    <div className='bar-chart-and-schedule-container'>
                        <div className='bar-chart-container'>
                            <div className='bar-chart-top-container'>
                                <h1 className='schedule-title'>Top products</h1>
                                <div className='btn-container'>
                                    <button className='see-all-btn' type='button'>May - June 2023</button>
                                    <FaGreaterThan className='icon' />
                                </div>
                            </div>
                            <PieChartComponent />
                        </div>
                        <div className='schedule-container'>
                            <div className='schedule-top-container'>
                                <h1 className='schedule-title'>Today’s schedule</h1>
                                <div className='btn-container'>
                                    <button className='see-all-btn' type='button'>See All</button>
                                    <FaGreaterThan className='icon' />
                                </div>
                                </div>
                                <div className='schedule-bottom-container1'>
                                    <p className='schedule-sub-title'>Meeting with suppliers from Kuta Bali</p>
                                    <p className='schedule-time'>14.00-15.00</p>
                                    <p className='location'>at Sunset Road, Kuta, Bali</p>
                                </div>
                                <div className='schedule-bottom-container2'>
                                    <p className='schedule-sub-title'>Check operation at Giga Factory 1</p>
                                    <p className='schedule-time'>18.00-20.00</p>
                                    <p className='location'>at Central Jakarta </p>
                                </div>
                        </div> 
                    </div>
                    <Link className="login-link" to='/login'>Login</Link> 
                </div>
            </div>
        </div>
    )
}
}
export default Home