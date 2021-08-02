import './Cards.css'
import Bounce from 'react-reveal/Bounce';

function Cards (props) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return(
        <div className="Card-con">
            <Bounce right>
            <div className="card">    
            <img className="sites-logo"  src={props.img} />
            <h1 className="sitename" style={{color: props.btncolour}}>{props.sitename}</h1>
            <button onClick={() => openInNewTab(props.btnurl)} className="site-btn" style={{backgroundColor: props.btncolour}}>{props.btntext}</button>
            </div>    
            </Bounce>  
        </div>
    );
}
export default Cards