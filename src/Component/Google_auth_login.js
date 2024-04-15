import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
function Google_auth_login() {
    return (
        <div style={{height:"100%",width:"100%",display:"flex",flex:1,flexDirection:"column"}}>
        <h1 style={{alignContent:"center",alignSelf:"center"}}>
            Login
        </h1>
            <div style={{height:"40%", width:"50%",alignContent:"center",alignSelf:"center"}}>
                <GoogleOAuthProvider clientId="<USer ur ID>">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />

                </GoogleOAuthProvider>
            </div>
        </div>
    )
}

export default Google_auth_login
