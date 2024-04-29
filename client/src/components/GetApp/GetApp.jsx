import React from 'react';
import './getApp.css'

const GetApp = () => {
    return (
        <div className='wrapper-getApp'>
            <div className='getApp__text'>Get the app.</div>
            <div className='box-image'>
                <div className='box-image__first'>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D96625688-6718-4B57-AF51-FA444FA9A1B2%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.instagram.com%2Faccounts%2Flogin%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fonetap%252F%253Fnext%253D%25252F%2526__coig_login%253D1" target='blank'>
                        <img src="assets/get-it-on-google-play.png" alt="get-it-on-google-play" /></a>
                </div>
                <div className='box-image__second'>
                    <img src="assets/get-it-from-microsoft.png" alt="get-it-from-microsoft" />
                </div>
            </div>
        </div>
    );
}

export default GetApp;
