import * as React from 'react'
import { Flex, Box, HStack, ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const color_theme = ['#faf8f4','#D8C4B6','#4F709C', '#213555']

export default function Contact(){
    return(
            <Box display='block' position='fixed' bg={color_theme[2]} bottom='0' zIndex='20' width='full' overflow='hidden' paddingTop='5px' paddingBottom='5px'>
                <HStack direction='row'  align='center' justify='center' width='100vw' spacing='20px'>
                    <Link href='https://github.com/NattapolChan'>
                        <FontAwesomeIcon icon={faGithub} size = '2x' color={color_theme[0]} className='icon'/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/nattapol-chan/'>
                        <FontAwesomeIcon icon={faLinkedin} size = '2x' color={color_theme[0]} className='icon'/>
                    </Link>
                </HStack>
            </Box>
    );
}
