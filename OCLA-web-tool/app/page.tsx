"use client";

import ClientPage from "./client/ClientPage";
import ProviderPage from "./provider/ProviderPage";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between p-4 bg-gray-200">
        <p className="w-max whitespace-nowrap text-2xl font-bold text-gray-700 self-center">OCLA Web Tool</p>
        <div className="flex w-full justify-end gap-6">
          <button type="button" className="bg-gray-300 rounded-full py-2 px-4">
            Sign Up
          </button>
          <button type="button" className="bg-teal-400 rounded-full py-2 px-4">
            Log In
          </button>
        </div>
      </div>

      <ClientPage />
      <ProviderPage />
    </main>
  );
}
