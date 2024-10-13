'use client';
import './globals.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Your App Title</title>
        <link rel="stylesheet" href="https://path-to-your/external-stylesheet.css" />
      </Head>
      <html lang="en" data-theme="light">
        <body className='bg-custom-bg min-h-screen'>
          <Provider store={store}>
            <div>
              {children}
            </div>
          </Provider>
        </body>
      </html>
    </>
  );
};

export default Layout;
