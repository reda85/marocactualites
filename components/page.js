import Head from 'next/head';
//import Link from 'next/link';
import Image from 'next/image'
import Footer from '../components/footer'
import {useState} from 'react'
import { useAmp } from 'next/amp'
import { useAuth } from '../auth';
import { firebaseClient } from "../firebaseClient";
import { Icon } from "@chakra-ui/react"
import { FaChevronDown, FaEdit, FaSignInAlt, FaSignOutAlt, FaUserCircle} from "react-icons/fa"
import { Button, ButtonGroup,Link,Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useRouter } from 'next/router';



//export const config = { amp: 'nonAmp' }

const Page = props => {
  var canURL = "https://marocactualites.com"
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  const router= useRouter()
  const [active, setActive] = useState(false);
  const [opener, setOpener] = useState(true);
  const [deconnexion, setDeconnexion] = useState(false);
  const isAmp = useAmp()
  const { user, loading } = useAuth();

  console.log("useeer", user)
  console.log("loading", loading)
  
  return (
  
    <div className="page">
      <Head>
      <link rel="canonical" href={canURL} />
        <title>{props.title ? `${props.title} | Maroc Actualités` : 'Maroc Actualités'}</title>
        <meta name="description" content={props.description ? props.description :"Les dernières actualités du Maroc : politique, sport, économie, société"} key='desc' />
        {/*<meta name="robots" content="noindex, nofollow"/>*/}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" key="equiv"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" key='view' />
       




      
      </Head>

      
      
          {/* Main */}
          <div id="main">
            <div className="inner">
              {/* Header */}
              <header style={{marginTop:'10px', display:'flex', flexDirection:'row', alignItems:'center' , justifyContent:'center'}}   >
               
              <a href={`${api_base}`}  ><Image src='/Logo KamalnoPoint PNG.png' alt='Maroc actualités' height='75' width='250'></Image> </a>
              
                
                  
                 
                
                 






{ user ? <div >
                 <div style={{ display:'flex', flexDirection:'row', alignItems:'center' , justifyContent:'space-between'}}>
                 {user.photoURL != null ? <a href="#" > <img className="avatar" alt={user.display} src={user.photoURL} width='50px' height='50px' /></a>: <a href="#"> <img className="avatar" src='/585e4bf3cb11b227491c339a.png' width='50px' height='50px' ></img></a>}
                   
                  
                  
                  <Menu>
                    <MenuButton as={Button}  rightIcon={<FaChevronDown />} >{user.displayName}</MenuButton>
                    <MenuList>
                      <MenuItem  icon={<FaUserCircle />} onClick={async () => {window.location.href = `${api_base}/Profile` ;
      }}> Profil</MenuItem>
                      <MenuItem  onClick={async () => {window.location.href = `${api_base}/Personnaliser` ;
      }} icon={<FaEdit />}> Personnaliser mon flux</MenuItem>
                      <MenuItem onClick={async () => {
                       setDeconnexion(true)
        await firebaseClient.auth().signOut();
        
        await router.push(api_base);
        setDeconnexion(false)
      }} icon={<FaSignOutAlt />}> Deconnexion</MenuItem>
                    </MenuList>
                  </Menu>
                  </div>
                 </div>
                  : null }
                 
                
              </header>
              {/* Banner */}
              <div className='flex flex-row justify-center items-center py-4 font-semibold text-base shadow-sm'>
                <div className='mx-6 hover:cursor-pointer'>Politique</div>
                <div className='mx-6 hover:cursor-pointer'>Economie</div>
                <div className='mx-6 hover:cursor-pointer'>Sport</div>
                <div className='mx-6 hover:cursor-pointer'>Société</div>
                <div className='mx-6 hover:cursor-pointer'>People</div>
              </div>
              {/* Section */}
              {props.children}
            </div>
            <Footer />
          </div>
          {/* Sidebar */}
          {/*
          <div id="sidebar" className={active? "active" : "inactive"} >
        <div className="inner">
          
          <section id="search" className="alt">
          {isAmp ? ( <form method="post" action-xhr="/components/amp-form/submit-form-input-text-xhr"
  target="_top">
              <input type="text" name="query" id="query" placeholder="Rechercher" />
            </form>) : (
      <form method="post" 
      target="_top">
                  <input type="text" name="query" id="query" placeholder="Rechercher" />
                </form>
    ) }
            
          </section>
         
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><Link href={`${api_base}`}>Accueil</Link></li>
              <li><a href={`${api_base}/category/alaune`}>A la une</a></li>
              <li><a href={`${api_base}/category/economie`}>Economie</a></li>
              <li><a href={`${api_base}/category/sport`}>Sport</a></li>
             
              <li><a href={`${api_base}/category/politique`}>Politique</a></li>
              <li><a href={`${api_base}/category/societe`}>Société</a></li>
              <li><a href={`${api_base}/category/culture`}>Culture</a></li>
              <li><a href={`${api_base}/category/hightech`}>High Tech</a></li>
              <li><a href={`${api_base}/category/people`}>People</a></li>
              <li><a href={`${api_base}/priere`}>Horaires des prières</a></li>
              
              
              
            </ul>
          </nav>
       
          <section>
            <header className="major">
              <h2>Contactez-nous</h2>
            </header>
            <p>Vous pouvez nous contacter sur les adresses suivantes</p>
            <ul className="contact">
              <li className="icon solid fa-envelope"><a href="#">contact@marocactualites.com</a></li>
             
               
            </ul>
          </section>
        
          <footer >
            <p className="copyright">© Maroc Actualités. All rights reserved. </p>
          </footer>
        </div>
        <a href="#sidebar" className="toggle" onClick={() => setActive(!active) }>Toggle</a>
      </div> */}
          
        </div>
      
      
    
  );
};

export default Page;