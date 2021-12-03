import React from 'react';
import tmbd from '../../../assets/tmbd.svg';
import react from '../../../assets/react2.svg';
import redux from '../../../assets/redux.svg';
import axios from '../../../assets/axios.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex align-items-center flex-wrap justify-content-between py-3">
        <p className="logo">MDB-Movie</p>
        <div className="api">
          <div className="image-1">
            <p>API Source:</p>  
            <img src={tmbd} alt="The Movie DB" width={80}/>
          </div>
          <div>
            <p>Built with:</p>
            <div className="image-2">
              <img src={react} alt="reactjs" width={60}/>
              <img src={redux} alt="redux" width={50}/>
              <img src={axios} alt="axios" width={60}/>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2021 &minus; <span>Afif Firdaus</span></p>
      </div>
    </div>
  )
}

export default Footer;
