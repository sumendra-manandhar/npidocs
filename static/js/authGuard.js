(function () {
    // Ensure the script only runs in the browser
    if (typeof window === 'undefined') {
      return;
    }
  
    // Get the current URL path
    const currentPath = window.location.pathname;
  
    // Get the logged-in user from sessionStorage
    const role = window.sessionStorage.getItem('role');
  
    // Define the allowed paths
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



    //  // Route to different paths based on username or role
    //  if (data.role === "admin") {
    //     history.push("/docs/intro");
    //   } else if (data.role === "") {
    //     history.push("/docs_npiqrgt/intro");
    //   } else if (data.role === "") {
    //     history.push("/docs_crossborder/intro");
    //   } else if (data.role === "NPI") {
    //     history.push("/docs_npi/intro");
    //   } else if (data.role === "") {
    //     history.push("/docs_nps/intro");
    //   } else if (data.role === "WALLET") {
    //     history.push("/docs_wallet/intro");
    //   } else if (data.role === "") {
    //     history.push("/docs_npiremit/intro");
    //   } else if (data.role === "NEPALPAY_QR") {
    //     history.push("/docs_nepalpay_qr/intro");
    //   } else if (data.role === "NCHL_GW") {
    //     history.push("/docs_gw/intro");
  
    // Get the user's allowed path
    const userPath = allowedPaths[role];
  
    // If the user tries to access a restricted page, redirect them
    if (userPath && !currentPath.startsWith(userPath)) {
      window.location.href = userPath;
    }
  })();
  