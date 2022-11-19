import Head from 'next/head'
import Image from 'next/image'
import '../../styles/Home.module.css'
import Navbar from '../../component/Nav'
import Threejs from '../../component/EarthHeightMap'
import Contact from '../../component/Contact'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
  return (
    <ChakraProvider>
      <Box pos = "fixed" bg={color_scheme[1]}
      opacity={'1'} height={'calc(100vh)'} width={'calc(100vw)'} 
      zIndex={"-10"} left='0' margin='0'>
        <Threejs/>
      </Box>
      <Navbar />
      <Contact />
    </ChakraProvider>
  )
}
