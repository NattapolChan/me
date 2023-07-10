import { VStack, Stack, Box, Flex, Icon, LinkIcon, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";
import NAV_ITEMS from '/components/NAV_ITEMS'

const SubNav = ({ label, href, subLabel }) => {

	const color_theme = ['#F5EFE7','#D8C4B6','#4F709C', '#213555']
    const linkColor = color_theme[3];
    const linkHoverColor = color_theme[0];
    const popoverContentBgColor = color_theme[0];    
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
                borderColor={color_theme[0]}
                _hover={{
                  borderColor: linkHoverColor,
                  color: linkHoverColor
                }}
                bgColor={color_theme[2]}
                color={linkColor}
                zIndex='10'
            >
                <Text unselectable='on'>{label}</Text>
            </Box>
        </Link>
    );
  };

export default function Research(){
    return (
        <VStack w='100vw' h='100vh' bg='#2E3047' justifyContent='center' alignItems='center'>
            {NAV_ITEMS[0].children.map((child) => (
                <SubNav key={child.label} {...child} />
            ))}
        </VStack>
    )
}
