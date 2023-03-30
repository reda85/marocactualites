import React, { useState } from 'react';
import Image from 'next/image';
import { useToast } from "@chakra-ui/react"
import { Button, Icon } from "@chakra-ui/react"
import {FaGoogle, FaFacebook, FaSignInAlt} from "react-icons/fa"

import { firebaseClient } from '../firebaseClient';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Login = (_props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false)
    const [loadingF, setLoadingF] = useState(false)
    const [loadingG, setLoadingG] = useState(false)
    const toast = useToast()
    const router = useRouter()
    let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    const fprovider = new firebaseClient.auth.FacebookAuthProvider();
    return (
     
        
            
            <div class="row gtr-uniform" style = {{  display:"flex" , justifyContent:"center", padding:"15px 15px 15px 15px",  marginLeft:"0px", marginRight:"0px", position: "fixed", top: "50%", left: "50%",transform: "translate(-50%, -50%)",  boxShadow: "2px 2px 8px 2px rgba(0,0,0,0.2)" , borderRadius: "5px 5px 5px 5px"}}>
            
             
            <h3 style={{display:'flex', alignItems:'center'}} ><Image src='/Logo Solo PNG.png' height='35' width='35'></Image>Connexion à votre compte</h3>
            
                <div class="col-9  col-12-xsmall">
                    <input type="Email" name="demo-email" id="demo-email" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div class="col-9  col-12-xsmall">
                    <input type="password" name="demo-password" id="demo-password"  value={pass} onChange={ (e) => setPass(e.target.value)} placeholder="Nouveau mot de passe" />
                </div>
               
                
               
                <div class="col-9  col-12-xsmall" >
                    
                        <Button colorScheme="green" leftIcon={<FaSignInAlt />} isDisabled={loadingF || loadingG || loading} isFullWidth onClick= {async () => {
                            setLoading(true)
                await firebaseClient.auth().signInWithEmailAndPassword(email, pass).then((result) => {
                toast({
                  title: "Connecté avec succès.",
                  description: "Vous allez être dirigé vers la page d'acceuil.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })

                
                    // ...
                    
                     router.push(api_base);
              }).catch((error) => {
                    
                // Handle Errors here.
               console.log(error)
               toast({
                title: "Erreur de connexion.",
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
              setLoading(false)
                // ...
              });; }} isLoading={loading}> Se connecter</Button>
            </div>
                <div class="col-9  col-12-xsmall">
                  <Button colorScheme="green" leftIcon={<FaGoogle />} isDisabled={loadingF || loadingG || loading} isFullWidth isLoading={loadingG} onClick= {async () => {
                    setLoadingG(true)
                await firebaseClient.auth().signInWithPopup(provider).then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    toast({
                      title: "Connecté avec succès.",
                      description: "Vous allez être dirigé vers la page d'acceuil.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
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
                   toast({
                    title: "Erreur de connexion.",
                    description: error.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
                  setLoadingG(true)
                    // ...
                  });;
                
            }}  >Continuer avec votre compte google</Button>  
             </div>
                <div class="col-9  col-12-xsmall"> 
             <Button colorScheme="green" leftIcon={<FaFacebook />} isDisabled={loadingF || loadingG || loading} isLoading={loadingF} isFullWidth onClick= {async () => {
               setLoadingF(true)
                await firebaseClient.auth().signInWithPopup(fprovider).then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    toast({
                      title: "Connecté avec succès.",
                      description: "Vous allez être dirigé vers la page d'acceuil.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
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
                   toast({
                    title: "Erreur de connexion.",
                    description: error.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
                    // ...
                  });;
                  setLoadingF(false)
            }}  >Continuer avec votre compte facebook</Button>    
                    
                     </div>
                <div class="col-9  col-12-xsmall">
                        <div> Veuillez vous <Link href="/signup">inscrire </Link>si vous n&apos;êtes pas encore inscrit</div>
                        </div>
                </div>
            

        );
};
export default Login;