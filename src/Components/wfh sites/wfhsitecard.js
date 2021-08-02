import './wfhsitecard.css'
import Zoom from 'react-reveal/Zoom';
import Cards from './Cards/Cards'
import Fiverrlogo from './Cards/Assets/fiverrlogo.png'
import Flexjoblogo from './Cards/Assets/Flexjobs-logo-medium.jpg'
import Upworklogo from './Cards/Assets/upworklogo.png'
import Jobspresso from './Cards/Assets/jobspressologo.png'


function Wfhsitecard () {
    return(
        <div className="wsc-parent">
            <Zoom left>
            <h1 className="wsc-heading">Top Work from home Websites</h1>
            </Zoom>
            <div className="cards">
                <Cards img={Fiverrlogo} sitename="Fiverr" btntext="Fiverr" btncolour="#1dbf73" btnurl='https://www.fiverr.com/'/>
                <Cards img={Flexjoblogo} sitename="Flex Job" btntext="Flex Job" btncolour="#4476b4" btnurl='https://www.flexjobs.com'/>
                <Cards img={Upworklogo} sitename="Upwork" btntext="Upwork" btncolour="#6bd345" btnurl='https://www.upwork.com/'/>
                <Cards img={Jobspresso} sitename="Jobspresso" btntext="Jobspresso" btncolour="#ff6716" btnurl='https://jobspresso.co/'/>
            </div>
        </div>
    );
}
export default Wfhsitecard