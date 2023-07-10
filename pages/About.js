import { Center, Text, VStack, Box, Container, ChakraProvider } from "@chakra-ui/react";
import Description from "/components/Description";
import Contact from "/components/Contact";
import Navbar from "/components/Nav";

const About = () => {
	const color_theme = ['#F5EFE7','#D8C4B6','#4F709C', '#213555']
  return (
    <>
        <Box  w='full' overflowY='hidden' bg= "#2E3047">
            <Navbar />
            <Center display='block' w='full' 
                    p='8' minH='90vh' bgColor={color_theme[0]}
                    mt={{base: "24", xl: "0"}}
            > 
                <Description />
            </Center>
            <Contact />
        </Box>
    </>
  );
};

export default About;
