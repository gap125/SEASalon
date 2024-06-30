import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Service from './Services'
import LandingPage from './landingPage.jsx'
import Form from './form'
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "800"] })

const Index = () => {
  return (
    <div className={poppins.className}>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Service></Service>
      <Form></Form>
      <Footer></Footer>
    </div >
  )
}

export default Index
