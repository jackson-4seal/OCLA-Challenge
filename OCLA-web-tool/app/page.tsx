"use client";

import ClientPage from "./client/ClientPage";
import ProviderPage from "./provider/ProviderPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useState } from "react";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(true);
  const [signupOpen, setSignupOpen] = useState(false);
  const [clientOpen, setClientOpen] = useState(false);
  const [providerOpen, setProviderOpen] = useState(false);

  return (
    <main>
      <div className="flex justify-between p-4 bg-gray-200">
        <p className="w-max whitespace-nowrap text-2xl font-bold text-gray-700 self-center">
          OCLA Web Tool
        </p>
        <div className="flex w-full justify-end gap-6">
          {!clientOpen && !providerOpen && (
            <>
              <button
                type="button"
                className="bg-gray-300 rounded-full py-2 px-4"
                onClick={() => {setSignupOpen(true); setLoginOpen(false); setClientOpen(false); setProviderOpen(false);}}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="bg-teal-400 rounded-full py-2 px-4"
                onClick={() => {setLoginOpen(true); setSignupOpen(false); setClientOpen(false); setProviderOpen(false);}}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>

      {signupOpen && <SignupPage setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />}
      {loginOpen && <LoginPage setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />}
      {clientOpen && <ClientPage />}
      {providerOpen && <ProviderPage />}
    </main>
  );
}
