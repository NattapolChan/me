import { Center, Text, VStack, Box, Container, ChakraProvider } from "@chakra-ui/react";
import Description from "/components/Description";
import Contact from "/components/Contact";
import Navbar from "/components/Nav";

const About = () => {
  const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
  return (
    <>
        <Box  w='full' overflowY='hidden' bg= "#2E3047">
            <Navbar />
            <Center display='block' w='full' 
                    p='8' minH='90vh' bgColor={color_scheme[1]}
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
