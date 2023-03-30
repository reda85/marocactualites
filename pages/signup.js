import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../firebaseClient';
const SignUp = (_props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    return (
            <div>
            
            <div class="row gtr-uniform">
            <h3 class="col-6 off-2 col-12-xsmall">Création de votre compte</h3>
            
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="Email" name="demo-email" id="demo-email" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div class="col-6 off-2 col-12-xsmall">
                    <input type="password" name="demo-password" id="demo-password"  value={pass} onChange={ (e) => setPass(e.target.value)} placeholder="Nouveau mot de passe" />
                </div>
               
                
               
                <div class="col-6 off-2 col-12-xsmall">
                    <ul class="actions">
                        <li><button  onClick= {async () => {
                await firebaseClient.auth().createUserWithEmailAndPassword(email, pass);
                window.location.href = '/';
            }} className="primary" >Connexion</button></li>
                  
                  <li><button className="icon brands fa-google" onClick= {async () => {
                await firebaseClient.auth().signInWithPopup(provider).then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;
                
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                    console.log('user', user)
                    window.location.href = '/';
                  }).catch((error) => {
                    // Handle Errors here.
                   console.log(error)
                    // ...
                  });;
                
            }}  >Continuer avec votre compte google</button></li>      
                    </ul>
                </div>
            </div>
       
        </div>);
};
export default SignUp;