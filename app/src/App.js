import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactQueryDevtools } from 'react-query-devtools';

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';
import Navbar from '../../../sap_eventzion/src/Navbar';
import WelcomeBanner from '../../../sap_eventzion/src/WelcomeBanner';

function App() {
  const { t } = useTranslation();

  return (
    // <BrowserRouter>
    //   <ReactQueryDevtools initialIsOpen={false} />
    //   <Helmet title={t('helmet.title.app')} />
    //   <Shell title={t('shell.title')} />
    //   <ErrorBoundary>
    //     <Routes />
    //   </ErrorBoundary>
    // </BrowserRouter>
    <div className='App px-5'>
     <Navbar/>
     <WelcomeBanner/>
    </div>
  );
}

export default App;
