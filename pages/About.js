import { Center, Text, VStack, Box, Container, ChakraProvider } from "@chakra-ui/react";
import Description from "../components/Description";
// import Contact from "/components/Contact";
// import Navbar from "/components/Nav";

const About = () => {
  const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
  return (
    <ChakraProvider>
        {/* <Navbar /> */}
        <Box  w='100vw'>
            <Center display='block' w='100vw' p='20' minH='90vh' bgColor={color_scheme[1]}>
                <Description />
            </Center>
            {/* <Contact /> */}
        </Box>
    </ChakraProvider>
  );
};

export default About;
