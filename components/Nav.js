import {
  Box,
  Flex,
  Text,
  Stack,
  Center,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  VStack,
} from '@chakra-ui/react';
import {
  LinkIcon,
  NotAllowedIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';
import Link from "next/link";
import { Link as ChakraLink} from "@chakra-ui/react"
import React from "react";
import NAV_ITEMS from './NAV_ITEMS';


const ChakraNextLink = React.forwardRef(({ href, children, ...props }, ref) => {
  return (
    <Link href={href} passHref>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});


export default function Navbar() {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    return (
      <>
        <Flex maxWidth="100%" pt={'70px'} display={{base: 'none', xl: 'flex'}} 
        zIndex='10' bgColor={color_scheme[1]} overflow='hidden'>
            <Center w={"50%"} bg={'transparent'} zIndex='10'>
                <ChakraNextLink 
                href = '/'
                  textAlign= {'center'}
                  fontFamily={'heading'}
                  color={'gray.400'}
                  fontSize='1.6em'
                  fontWeight={800}
                  className='hide'
                  _hover={{textDecoration:'none', color: color_scheme[0]}}
                  zIndex='10'
                >
                  NC
                  </ChakraNextLink>
            </Center>
            <Box w={"50%"} zIndex='10'>
              <DesktopNav />
            </Box>
        </Flex>
        <VStack display={{base:'block', xl: 'none'}} 
              position='relative'
              align={'center'}
              minW={'14em'}
              m='auto'
              zIndex='10'
              h='10vh'
              bg={color_scheme[1]}>
          <Center bg={'transparent'} zIndex='10'>
            <ChakraNextLink textAlign= {'center'}
              href='/'
              fontFamily={'heading'}
              color={'gray.400'}
              bg={color_scheme[1]}
              pt='0.1em'
              pb='0.1em'
              fontSize='1.6em'
              fontWeight={800}
              className='hide'
              width={'100%'}
              _hover={{textDecoration:'none', color: color_scheme[0]}}
              >
                NC
              </ChakraNextLink>
          </Center>
          <Flex h='70vh' align={'flex-start'}
                direction={'row'} spacing='5vh' justify={'space-evenly'} minW='14em'
                zIndex='10' w='100vw' overflow='hidden'>
            <MobileNav />
          </Flex>
      </VStack>
    </>
    );
  }


  const MobileNav = () => {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    const linkColor = color_scheme[4];
    const linkHoverColor = color_scheme[0];
    const popoverContentBgColor = color_scheme[1];
    return(
      <>
      {NAV_ITEMS.map((navItem)=>(
        <Center key={navItem.label} 
          minW ='5.5em'
          w = '20%'
          pl={'2px'}
          pr={'2px'}
          pt={'0px'}
          pb={'0px'}
          borderWidth={'1px'}
          _hover={{
            borderColor: linkHoverColor,
            color: linkHoverColor
          }}
          bgColor={color_scheme[1]}
          color={linkColor}
          zIndex='10'
        >
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
                <ChakraNextLink fontSize={'xl'}
                href={navItem.href ?? '#'}
                fontWeight={600}
                _hover={{
                  textDecoration: 'none'
                }}
                p={2}
                >
              {navItem.label}
              </ChakraNextLink>
          </PopoverTrigger>
          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={popoverContentBgColor}
              rounded='0px'
              p={4}
              minW={'sm'}
              _hover={{
                borderWidth: '2px',
                borderColor: 'white',
              }}
            >
              <Stack zIndex='10'>
                {navItem.children.map((child) => (
                  <SubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Center>
      ))}
      </>
    );
  }

  const DesktopNav = () => {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    const linkColor = color_scheme[4];
    const linkHoverColor = color_scheme[0];
    const popoverContentBgColor = color_scheme[1];
    return (
      <Stack direction={'row'} spacing={4} zIndex='10'>
        <Flex justifyContent={"flex-end"} gap = {6} zIndex='10'>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} 
                w='100%'
                pl={'30px'}
                pr={'30px'}
                pt={'5px'}
                pb={'5px'}
                borderWidth={'1px'}
                borderColor={color_scheme[4]}
                _hover={{
                  borderColor: linkHoverColor,
                  color: linkHoverColor
                }}
                bgColor={color_scheme[1]}
                color={linkColor}
                zIndex='10'
            >
              <Popover trigger={'hover'} placement={'bottom-start'} zIndex='10'>
                <PopoverTrigger>
                <ChakraNextLink
                  p={2}
                  fontSize={'xl'}
                  fontWeight={800}
                  _hover={{
                    textDecoration: 'none'
                  }}
                  href={navItem.href ?? '#'}
                  zIndex='10'
                  >
                  {navItem.label}
                  </ChakraNextLink>
                </PopoverTrigger>
                {navItem.children && (
                  <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  rounded='0px'
                  p={4}
                  minW={'sm'}
                  _hover={{
                    borderWidth: '2px',
                    borderColor: 'white',
                  }}
                >
                  <Stack zIndex='10'>
                    {navItem.children.map((child) => (
                      <SubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Flex>
      </Stack>
    );
  };
  
  const SubNav = ({ label, href, subLabel }) => {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    return (
        <ChakraNextLink role={'group'}
        href={href ?? '#'}
        display={'block'}
        p={2}
        _hover={{ 
        bgColor: 'none',
      }}
        zIndex='10'
      >
        <Stack direction={'row'} align={'center'} zIndex='10'>
          <Box 
              color= {'gray.400'}
              _groupHover={{ color: color_scheme[0] }}
              transition={'all .3s ease'}
          >
            <Text
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'} >{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={color_scheme[0]} w={5} h={5} as={ href ? (href[0]=='h' ? LinkIcon : ArrowRightIcon) : NotAllowedIcon}/>
          </Flex>
        </Stack>
        </ChakraNextLink>
    );
  };
