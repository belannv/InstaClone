import React from 'react';
import './signUp.css'

const SignUp = () => {
    return (
        <div className='wrapper-signUp'>
            <div style={{color:"#474747"}}>Don't have an account?</div>
            <a href="https://www.instagram.com/accounts/emailsignup/" style={{textDecoration: "none"}}><div style={{marginLeft:"4px", fontWeight:"600"}} className='signUp__text'>Sign up</div></a>
        </div>
    );
}

export default SignUp;
