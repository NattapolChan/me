import React from 'react'
import { Flex, Box, HStack, ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic'

const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','#707793']

export default function Contact(){
    return(
        <ChakraProvider>
            <Box display='block' position='fixed' bg={color_scheme[3]} bottom='0' zIndex='20' width='100vw' overflow='visible' paddingTop='5px' paddingBottom='5px'>
                <HStack direction='row'  align='center' justify='center' width='100vw' spacing='20px'>
                    <a href='https://github.com/NattapolChan'>
                        <FontAwesomeIcon icon={faGithub} size = '2x' color={color_scheme[4]} className='icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/nattapol-chan/'>
                        <FontAwesomeIcon icon={faLinkedin} size = '2x' color={color_scheme[4]} className='icon'/>
                    </a>
                </HStack>
            </Box>
        </ChakraProvider>
    );
}
