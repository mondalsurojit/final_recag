import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom';
import img1 from '../../../assets/google.svg';
import img2 from '../../../assets/gmail.svg';
import img5 from '../../../assets/login-signup-img.png';
import img6 from '../../../assets/BharatAi.svg';
// import './Login.css'

export default function Signup() {
    const [value , setValue] = useState("2");
    const handleClick = (e)=>{
        setValue(e.target.value);
        // e.preventDefault();
    }

  return (
    <section className='login-section'>
      <div className="login-container">
        <div className="login-top">
            <a href="#">
                <div className="login-head">
                    <img src={img6} alt="img" />
                </div>
            </a>
            <div className="login-sub-head">
                <div className="login-greeting">Welcome!</div>
                <div className="choices">
                    <NavLink to={'/login'}>
                        <div className="signin" value={
                        "1"} onClick={handleClick}>
                            <h4 className='text'>Sign In</h4>
                            <div value={"1"} className={`down-line ${value==="1" ? "visible":"invisible"}`}></div>
                        </div>
                    </NavLink>
                    <NavLink to={"/signup"}>
                        <div className="register" value={"2"} onClick={handleClick}>
                            <h4 className='text'>Register</h4>
                            <div value={"2"} className={`down-line ${value==="2" ? "visible":"invisible"}`}></div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="login-bottom">
            <form  method="post">
                <div className="login-options">
                    <div className="login-google">
                        <div className="via-google">
                            <div className="google-img">
                                <img src={img1} alt="img" />
                            </div>
                            <h3 className='text'>Register with Google</h3>
                        </div>
                    </div>
                    <div className="login-gmail">
                        <div className="via-gmail">
                            <div className="gmail-img">
                                <img src={img2} alt="img" />
                            </div>
                            <h3 className='text'>Register with Gmail</h3>
                        </div>
                    </div>
                </div>    
            </form>
            <div className="login-account">
                <p className="account">
                    Already have an account ? <NavLink to="/login" className='lined'>Sign In</NavLink>
                </p>
            </div>
        </div>
        <div className="bottom-img">
            <img src={img5} alt="img" />
        </div>
      </div>
      <div className="contact-sec">
        <p className="signup-info">
        When you NavLink your Facebook, Google, or Yahoo account, Kaggle collects certain information stored in that account that you have configured to make available. By NavLinking your accounts, you authorize Kaggle to access and use your account on the third party service in connection with your use of kaggle.com.
        </p>
        <a href="#" className='lined'>
            <h4 className='support'>Contact Us/Support</h4>
        </a>
      </div>
    </section>
  )
}
