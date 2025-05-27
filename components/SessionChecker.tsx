// app/components/SessionChecker.tsx
'use client'; // This line is crucial to indicate it's a Client Component

import { useSession } from "next-auth/react";
import { LandingPage } from '@/components/LandingPage'; // Adjust the import path as necessary
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function SessionChecker({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isLoading = true; // simulate state

  if (status === 'loading') {
    return <div><Preloader /> </div>; // You can show a loading state here
  }

  return (
    <>
      {!session ? (
        <LandingPage />
      ) : (
        <>
        
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
