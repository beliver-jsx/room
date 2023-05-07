import React from "react";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";

export default function Login() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dream')
    }
  }, [session])
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
    </>
  );
}
