import "./wfhtext.css";
import Bounce from 'react-reveal/Bounce';

function Wfhtext() {
  return (
    <div className="wfh-text-par">
      <Bounce left>
      <div className="wfh-text">
        <h1 className="head">Work From Home</h1>
        <p className="def">
          Work from home describes work being done remotely, instead of at an
          office. The acronym “WFH” is used as a nickname for the concept. Many
          organizations transitioned their employees from the office to a work
          from home model during the Coronavirus global pandemic.
        </p>
      </div>
      </Bounce>
    </div>
  );
}
export default Wfhtext;
