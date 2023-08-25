import * as React from 'react'
import { Text, VStack, Center } from '@chakra-ui/react'

const color_theme = ['#faf8f4','#D8C4B6','#4F709C', '#213555']

export default function Description(){
    return(
    <VStack direction={'column'} m='auto' spacing='20px' 
            maxW='3xl' color={color_theme[3]} textAlign= {{base: 'left', sm: 'justify'}}
            pb='3em' overflowY='hidden'
    >
        <Text fontSize='2xl' as='b'>Chanpaisit Nattapol</Text>
            <Text fontSize='xl' as='b' textAlign='center'>
                Hi, I'm Chan. <br/> 
            </Text>
        <Text fontSize="lg">
            I'm a second year undergraduate majoring in Computer Engineering at 
            Nanyang Technological University, Singapore. I have deep passion for AI and High Performance Computing.
	    I have done research and projects in Computer Vision, NLP, and mathematical-based pattern recognition. Apart from AI research, I am a member in High Performance Computing Club, NTU, and was a Tech Director for Thai Student Society, Singapore, where I build a fullstack webapp to connect Thai undergrads in Singapore. Outside of academic, I enjoy playing basketball, guitar, and Rubik's cube. I also regularly participate in Hackathon and HPC or AI-related competition.
        </Text>
    </VStack>
    )
}
