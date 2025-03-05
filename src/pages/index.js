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

    const role = sessionStorage.getItem('role');

   // Route to different paths based on username or role
   if (role === "admin") {
    history.push("/docs/intro");
  } else if (role === "NPI_QR_GW") {
    history.push("/docs_npiqrgt/intro");
  } else if (role === "CROSSBORDER") {
    history.push("/docs_crossborder/intro");
  } else if (role === "NPI") {
    history.push("/docs_npi/intro");
  } else if (role === "NPS") {
    history.push("/docs_nps/intro");
  } else if (role === "WALLET") {
    history.push("/docs_wallet/intro");
  } else if (role === "NPI_REMIT") {
    history.push("/docs_npiremit/intro");
  } else if (role === "NEPALPAY_QR") {
    history.push("/docs_nepalpay_qr/intro");
  } else if (role === "NCHL_GW") {
    history.push("/docs_gw/intro");
  } else {
    
    // Default route if no specific username match
    history.push("/");
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
