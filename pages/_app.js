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






class MyApp extends App {
  render() {
    

    

   // NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });
    
    

    const { Component, pageProps } = this.props;
    

    return (

     
            
        <Layout>
         <AuthProvider>
         <ThemeProvider theme={theme}>
        <ToastProvider />
          <Component {...pageProps} />
          </ThemeProvider>
          </AuthProvider>
        </Layout>
      
    );
  }
}

export default MyApp;
