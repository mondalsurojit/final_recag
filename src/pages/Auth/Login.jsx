import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import img1 from '../../../assets/google.svg';
import img2 from '../../../assets/gmail.svg';
import img3 from '../../../assets/fb.svg';
import img4 from '../../../assets/yahoo.svg';
import img5 from '../../../assets/login-signup-img.png';
import img6 from '../../../assets/BharatAi.svg';
import './Login.css'

export default function Login() {
    const [value , setValue] = useState("1");
    const handleClick = (e)=>{
        setValue(e.target.value);
        console.log(value);
        // e.preventDefault();
    }
  return (
    <section className='login-section'>
      <div className="login-container">
        <div className="login-top">
            <NavLink to={"/"}>
                <div className="login-head">
                    <img src={img6} alt="img" />
                </div>
            </NavLink>
            <div className="login-sub-head">
                <div className="login-greeting">Welcome!</div>
                <div className="choices">
                    <NavLink to={'/login'}>
                    <div className="signin" value={
                        "1"} onClick={handleClick}>
                            <h4 className='text'>Sign In</h4>
                            <div className={`down-line ${value==="1" ? "visible":"invisible"}`}></div>
                        </div>
                    </NavLink>
                    <NavLink to={"/signup"}>
                    <div className="register" value={"2"} onClick={handleClick}>
                            <h4 className='text'>Register</h4>
                            <div className={`down-line ${value==="2" ? "visible":"invisible"}`}></div>
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
                            <h3 className='text'>Sign in with Google</h3>
                        </div>
                    </div>
                    <div className="login-gmail">
                        <div className="via-gmail">
                            <div className="gmail-img">
                                <img src={img2} alt="img" />
                            </div>
                            <h3 className='text'>Sign in with Gmail</h3>
                        </div>
                    </div>
                    <div className="login-fb">
                        <div className="via-fb">
                            <div className="fb-img">
                                <img src={img3} alt="img" />
                            </div>
                            <h3 className='text'>Sign in with Facebook</h3>
                        </div>
                    </div>
                    <div className="login-yahoo">
                        <div className="via-yahoo">
                            <div className="yahoo-img">
                                <img src={img4} alt="img" />
                            </div>
                            <h3 className='text'>Sign in with Yahoo</h3>
                        </div>
                    </div>
                </div>    
            </form>
            <div className="login-account">
                <p className="account">
                    Don't have an account ? <NavLink to="/signup" className='lined'>Create One</NavLink>
                </p>
            </div>
        </div>
        <div className="bottom-img">
            <img src={img5} alt="img" />
        </div>
      </div>
      <div className="contact-sec">
        <a href="#" className='lined'>
            <h4 className='support'>Contact Us/Support</h4>
        </a>
      </div>
    </section>
  )
}
