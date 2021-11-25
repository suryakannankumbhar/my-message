import React from 'react';

import { GoogleOutlined } from '@ant-design/icons';

import firebase from 'firebase/app';

import { auth } from '../firebase';

export default function Login() {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>
                    Welcome to <span className='app-name'>MyMessage</span>
                </h2>

                <div
                    className='login-button google'
                    onClick={() =>
                        auth.signInWithRedirect(
                            new firebase.auth.GoogleAuthProvider()
                        )
                    }
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
            </div>
        </div>
    );
}
