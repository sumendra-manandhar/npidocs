import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useEffect, useState } from "react";
import Image from "../../static/img/banner/banner.png";
import Logo from "../../static/img/banner/logo.png";

// const users = [
//   { username: "admin", password: "Whylikethis@1" },
//   { username: "NEPALPAY_QR", password: "NeP@l#838" },
//     { username: "NPI_QR_GW", password: "NeP@l#738" },
//     { username: "CROSSBORDER", password: "N3p@L!456" },
//     { username: "NPI", password: "N3P@l@891" },
//     { username: "NPS", password: "Nep@L#762" },
//     { username: "WALLET", password: "N3PaL!234" },
//     { username: "NPI_REMIT", password: "N3P@l@567" },
//     { username: "NCHL_GW", password: "Nep@L!890" }
// ];

const Login = () => {
  const { siteConfig } = useDocusaurusContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(""); 
  const history = useHistory();



  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      // Make API call to login endpoint
      const response = await fetch("https://doc.connectips.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: username, password: password }),
      });

      debugger

      // Capture the response data
      const data = await response.json();

      if (response.ok) {
        // Handle successful login

        // Store the username and role in sessionStorage
        if (typeof window !== "undefined") {
          setRole(data.role)
          sessionStorage.setItem("role", data.role);
        }

        // Route to different paths based on username or role
        if (data.role === "admin") {
          history.push("/docs/intro");
        } else if (data.role === "NPI_QR_GW") {
          history.push("/docs_npiqrgt/intro");
        } else if (data.role === "CROSSBORDER") {
          history.push("/docs_crossborder/intro");
        } else if (data.role === "NPI") {
          history.push("/docs_npi/intro");
        } else if (data.role === "NPS") {
          history.push("/docs_nps/intro");
        } else if (data.role === "WALLET") {
          history.push("/docs_wallet/intro");
        } else if (data.role === "NPI_REMIT") {
          history.push("/docs_npiremit/intro");
        } else if (data.role === "NEPALPAY_QR") {
          history.push("/docs_nepalpay_qr/intro");
        } else if (data.role === "NCHL_GW") {
          history.push("/docs_gw/intro");
        } else {
          setError("Technical error . Contact Support")
          // Default route if no specific username match
          history.push("/");
        }

        console.log("Login successful", data);
      } else {
        // Handle error if the response is not ok
        setError(data.message || "Invalid credentials.");
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      setError("Something went wrong. Please try again later.");
      console.error("Login error:", error);
    }
  };
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div class="flex flex-wrap">
      <div class="flex w-full flex-col md:w-1/3">
        <div class="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <a href="#" class=" border-b-4 pb-2 text-2xl font-bold text-gray-900">
            <img src={Logo} alt="Logo" className="w-[150px] mx-auto" />
          </a>
        </div>

        <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p class="text-center text-blue-600 text-2xl font-bold md:leading-tight md:text-left md:text-4xl">
            Welcome to<br />
            <span class="text-blue-600 text-[29px] ">NCHL DOCUMENTATION</span>
          </p>
          <p class="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <div class="flex flex-col pt-4">
            <div class="mb-4">
              <label
                for="username"
                class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autofocus=""
              />
            </div>
          </div>
          <div class="mb-4 flex flex-col ">
            <div class="mb-4">
              <label
                for="password"
                class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                autofocus=""
              />
            </div>
          </div>

          <div class="mb-4">
            <button
              class="grid w-full cursor-pointer select-none rounded-md border border-blue-500 bg-blue-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:border-blue-600 focus:bg-blue-600 focus:text-white focus:shadow-none"
              type="submit"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>

      <div class="pointer-events-none relative  h-screen select-none bg-black md:block md:w-2/3">
        {/* <div class="absolute bottom-0 z-10 px-8 text-gray-500 opacity-80">
          <p class="mb-8 text-3xl font-semibold leading-20">
            We work 10x faster than our compeititors and stay consistant. While
            they're bogged won with techincal debt, we're realeasing new
            features.
          </p>
          <p class="mb-4 text-3xl font-semibold">John Elmond</p>
          <p class="">Founder, Emogue</p>
          <p class="mb-7 text-sm opacity-70">Copyright @NCHL 2025</p>
        </div> */}
        <img
          class="-z-1 absolute top-0 h-full w-full object-fill"
          src={Image}
        />
      </div>
    </div>
  );
};

export default Login;
