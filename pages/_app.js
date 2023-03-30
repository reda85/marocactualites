import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as gtag from '../lib/gtag';
import Router from 'next/router';
import '../styles/globals.css';
import '../assets/css/main.css';
import '../public/nprogress.css';
import {AuthProvider} from '../auth'
import NProgress from 'nprogress';

import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'






class MyApp extends App {
  render() {
    

    

   // NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });
    
    Router.onRouteChangeStart = () => {
       console.log('onRouteChangeStart triggered');
      NProgress.start();
    };
    
   
    
    Router.onRouteChangeError = () => {
       console.log('onRouteChangeError triggered');
      NProgress.done();
    };

    Router.events.on('routeChangeComplete', (url) => {gtag.pageview(url) ;
      NProgress.done();
    })

    const { Component, pageProps } = this.props;
    

    return (

     
            
        <Layout>
         <AuthProvider>
         <ThemeProvider theme={theme}>
        
          <Component {...pageProps} />
          </ThemeProvider>
          </AuthProvider>
        </Layout>
      
    );
  }
}

export default MyApp;
