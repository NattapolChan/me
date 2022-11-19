import { Center, Text, VStack, Box, Container, ChakraProvider } from "@chakra-ui/react";
import Contact from "/component/Contact";
import Navbar from "/component/Nav";

const About = () => {
  const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
  return (
    <ChakraProvider>
        <Navbar />
        <Box  w='100vw'>
            <Center display='block' w='100vw' p='20' bgColor={color_scheme[1]}>
                <VStack direction={'column'} m='auto'spacing={'20px'} maxW={'3xl'} color={'gray.400'} textAlign='justify'>
                    <Text fontSize='4xl' as={'b'}>Chanpaisit Nattapol</Text>
                    <Text fontSize='xl' as='b'>
                        I'm Chan, Math & ML enthusiast. <br/> Ex-Full time Physics tutor.
                    </Text>
                    <Text fontSize="lg">
                        I'm a Freshman Undergraduate in Electrical and Electronics Engineering at 
                        Nanyang Technological University, Singapore. I studied at Kamnoetvidya Science Academy, Thailand, 
                        for High School.
                    </Text>
                    <Text fontSize='lg'>
                        I'm interested in Computer Vision, specifically in Self-Supervised & Unsupervised Learning. 
                        My first experience in CV was when I conducted research <Text as='kbd' color={'#3BBA9C'}>"Parallel-curve detection method based on Hough Transform." </Text>
                        I've also explored Attention Mechanism 
                        and its implementation in image segmentation in <Text as='kbd' color={'#3BBA9C'}>"Deeply-Supervised CNN with Attention Mechanism Integration for Image Segmentation."</Text>
                    </Text>
                    <Text fontSize='lg'>
                        Besides, I also won <Text as='kbd' color={'#3BBA9C'}>Silver medal</Text> in <Text as='kbd' color={'#3BBA9C'}>52nd International Physics Olympid </Text>
                        in 2022 at Switzerland. I am also a Physics Tutor for Physics Olympiad Preparation, with my students obtaining 
                        2 Gold medals, 2 Silver medals & a Bronze medal in Thailand Physics Olympiad. Throughout my journey in Physics Olympiad, 
                        Physics has equipped me with strong 
                        numerical method, data analytics & calculus background.
                    </Text>
                    <Text fontSize="lg">
                        I also spent some of my leisure time on web development & game development. I have built a web app 
                        for guitar tab transcription & an interactive learning platform, <Text as='kbd' color={'#3BBA9C'}>SARAtree.</Text>
                    </Text>
                    <Text fontSize="lg">
                        Currently, I am a Tech Director for Thai Student Society, Singapore.
                    </Text>
                </VStack>
            </Center>
            <Contact />
        </Box>
    </ChakraProvider>
  );
};

export default About;
