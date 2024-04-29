import React from 'react';

const LoadingPage = () => {
    return (
        <div className='wrapper-loading-page' style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <img style={{width:"70px"}} src="assets/Instagram-loading-logo.png" alt="" />
            <p style={{position:"absolute", bottom:"45px", color:"rgb(103, 103, 103)", fontFamily: "Arial", marginTop:"200px"}}>from</p>
            <img style={{position:"absolute", bottom:"30px", width:"100px"}} src="assets/meta-logo.png" alt="" />
        </div>
    );
}

export default LoadingPage;
