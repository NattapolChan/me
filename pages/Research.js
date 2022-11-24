import { VStack, Stack, Box, Flex, Icon, LinkIcon, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";
import NAV_ITEMS from '/components/NAV_ITEMS'

const SubNav = ({ label, href, subLabel }) => {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    const linkColor = color_scheme[4];
    const linkHoverColor = color_scheme[0];
    const popoverContentBgColor = color_scheme[1];    
    return (
        <Link href={href ? href :'#'}>
            <Box 
                unselectable='true'
                w='50em'
                pl={'30px'}
                pr={'30px'}
                pt={'25px'}
                pb={'25px'}
                textAlign='center'
                borderWidth={'1px'}
                borderColor={color_scheme[0]}
                _hover={{
                  borderColor: linkHoverColor,
                  color: linkHoverColor
                }}
                bgColor={color_scheme[2]}
                color={linkColor}
                zIndex='10'
            >
                <Text unselectable='on'>{label}</Text>
            </Box>
        </Link>
    );
  };

export default function Research(){
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    console.log("hi")
    console.log(NAV_ITEMS[0].children)
    return (
        <VStack w='100vw' h='100vh' bg='#2E3047' justifyContent='center' alignItems='center'>
            {NAV_ITEMS[0].children.map((child) => (
                <SubNav key={child.label} {...child} />
            ))}
        </VStack>
    )
}