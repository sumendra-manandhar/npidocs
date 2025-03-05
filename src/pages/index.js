import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Login from '../components/Login';
import AuthGuard from '../components/AuthGuard';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    // alert("here")

    
    if (typeof window !== 'undefined') {

      sessionStorage.clear();
    }

    const username = sessionStorage.getItem('username');

    if (username === 'admin') {
      history.push('/docs/intro');
    } else if (username === 'npi') {
      history.push('/docs_npi/intro');
    }
    else {
      history.push('/')
    }
  }, [history]);


  return (

    <AuthGuard>
    {/* <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />"> */}
      <Login />
      <main>
        <HomepageFeatures />
      </main>
    {/* </Layout> */}
    </AuthGuard>


    // <AuthGuard>
    //   <Layout title={`${siteConfig.title}`} description="Protected Content">
    //     <main>
    //       <HomepageFeatures />
    //     </main>
    //   </Layout>
    // </AuthGuard>
    
  );
}
