import * as React from 'react'
import { Text, VStack, Center } from '@chakra-ui/react'

const color_theme = ['#faf8f4','#D8C4B6','#4F709C', '#213555']

export default function Description(){
    return(
    <Center direction={'column'} m='auto' spacing='20px' 
	    height='70vh' maxWidth='3xl'
            color={color_theme[3]} textAlign= {{base: 'left', sm: 'justify'}}
            pb='3em' overflowY='hidden'
    >
	<VStack>
        <Text fontSize='2xl' as='b'>Nattapol Chanpaisit</Text>
	</VStack>
    </Center>
    )
}
