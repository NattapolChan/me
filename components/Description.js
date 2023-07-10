import * as React from 'react'
import { Text, VStack, Center } from '@chakra-ui/react'

const color_theme = ['#faf8f4','#D8C4B6','#4F709C', '#213555']

export default function Description(){
    return(
    <VStack direction={'column'} m='auto' spacing='20px' 
            maxW='3xl' color={color_theme[2]} textAlign= {{base: 'left', sm: 'justify'}}
            pb='3em' overflowY='hidden'
    >
        <Text fontSize='2xl' as='b'>Chanpaisit Nattapol</Text>
            <Text fontSize='xl' as='b' textAlign='center'>
                I'm Chan. <br/> Ex-Full time Physics tutor.
            </Text>
        <Text fontSize="lg">
            I'm a second year undergraduate majoring in Computer Engineering at 
            Nanyang Technological University, Singapore. I studied at Kamnoetvidya Science Academy, Thailand, 
            for High School.
        </Text>
        <Text fontSize='lg'>
            I'm interested in Computer Vision, specifically in Self-Supervised & Unsupervised Learning. 
            My first experience in CV was when I conducted research <Text as='kbd' color={color_theme[3]}>"Parallel-curve detection method based on Hough Transform." </Text>
            I've also explored Attention Mechanism 
            and its implementation in image segmentation in <Text as='kbd' color={color_theme[3]}>"Deeply-Supervised CNN with Attention Mechanism Integration for Image Segmentation."</Text>
        </Text>
        <Text fontSize='lg'>
            Besides, I also won <Text as='kbd' color={color_theme[3]}>Silver medal</Text> in <Text as='kbd' color={color_theme[3]}>52nd International Physics Olympid </Text>
            in 2022 at Switzerland. I am also a Physics Tutor for Physics Olympiad Preparation, which my students obtained 
            2 Gold medals, 2 Silver medals & a Bronze medal in Thailand Physics Olympiad. Throughout my journey in Physics Olympiad, 
            Physics has equipped me with strong 
            numerical method, data analytics & calculus background.
        </Text>
        <Text fontSize="lg">
            I also spent some of my leisure time on web development & game development. I have built a web app 
            for guitar tab transcription & an interactive learning platform, <Text as='kbd' color={color_theme[3]}>SARAtree.</Text>
        </Text>
        <Text fontSize="lg">
            Currently, I am a Tech Director for Thai Student Society, Singapore.
        </Text>
    </VStack>
    )
}
