import '/styles/Home.module.css'
import Navbar from '/components/Nav'
import Threejs from '/components/EarthHeightMap'
import Contact from '/components/Contact'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function Home() {
	const color_theme = ['#F5EFE7','#D8C4B6','#4F709C', '#213555']
  return (
    <>
      <Navbar />
      <Box pos = "fixed" bg={color_theme[0]}
      opacity={'1'} height={'100vh'} width={'100vw'} 
      left='0' margin='0'>
        <Threejs/>
      </Box>
      <Contact />
    </>
  )
}
