import React from 'react'
import Header from '../Header/Header'
import Slider from '../Corousel/Corousel'
import Wfhtext from '../Wfh text/wfhtext'
import Wfhsitecards from '../wfh sites/wfhsitecard'
import Footer from '../Footer/Footer'
import './Home.css'

function Home () {
    return(
        <div>
        <Header />
        <div className="mid-sec">
        <Wfhtext />
        <Slider />
        </div>
        <Wfhsitecards />
        <Footer />
        </div>
    );
}
export default Home