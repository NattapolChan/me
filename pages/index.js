import Head from 'next/head'
import Image from 'next/image'
import '/styles/Home.module.css'
import Navbar from '/components/Nav'
import Threejs from '/components/EarthHeightMap'
import Contact from '/components/Contact'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Test from '../components/test'

export default function Home() {
  const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
  return (
    <ChakraProvider>
      <Test />
      {/* <Navbar />
      <Box pos = "fixed" bg={color_scheme[1]}
      opacity={'1'} height={'calc(100vh)'} width={'calc(100vw)'} 
      left='0' margin='0'>
        <Threejs/>
      </Box>
      <Contact /> */}
    </ChakraProvider>
  )
}
