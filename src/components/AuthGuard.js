import { useEffect, useState } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';

const AuthGuard = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [role, setRole] = useState(null);

  

  useEffect(() => {
debugger

    if (typeof window !== 'undefined') {
      // Ensure `sessionStorage` is only accessed in the browser
      const storedRole = sessionStorage.getItem('role');
      setRole(storedRole );
    }


    if (!role) {
      history.push('/'); // Redirect to login if not authenticated
      return;
    }

    // Define the allowed paths for each user
    const allowedPaths = {
      admin: '/docs/intro',
      NPI_QR_GT: '/docs_npiqrgt/intro',
      CROSSBORDER :'/docs_crossborder/intro',
      NPI :'/docs_npi/intro',
      NPS :'/docs_nps/intro',
      WALLET :'/docs_wallet/intro',
      NPI_REMIT :'/docs_npiremit/intro',
      NEPALPAY_QR :'/docs_nepalpay_qr/intro',
      NCHL_GW :'/docs_gw/intro',
    };

    const userPath = allowedPaths[role];

    // If user tries to access a different path, redirect them
    if (userPath && !location.pathname.startsWith(userPath)) {
      history.push(userPath);
    }
  }, [role, history, location.pathname]);

  return children;
};

export default AuthGuard;


// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     // Ensure `sessionStorage` is only accessed in the browser
//     const storedUsername = sessionStorage.getItem('username');
//     setUsername(storedUsername);
//   }
// }, []);