import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';

import * as gtag from '../lib/gtag';
import Router from 'next/router';
import '../styles/globals.css';
import '../assets/css/main.css';
import '../public/nprogress.css';
import {AuthProvider} from '../auth'
import NProgress from 'nprogress';

import { ThemeProvider, theme, ToastProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast';

import { Sora } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const sora = Sora({ subsets: ['latin'] })




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
        <Toaster />
        <main className={sora.className}>
          <Component {...pageProps} />
          </main>
          </ThemeProvider>
          </AuthProvider>
        </Layout>
      
    );
  }
}

export default MyApp;
