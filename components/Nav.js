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

const color_theme = ['#F5EFE7','#D8C4B6','#4F709C', '#213555']

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
    return (
      <>
        <Flex maxWidth="100%" pt={'70px'} display={{base: 'none', xl: 'flex'}} 
        zIndex='10' bgColor={color_theme[0]}>
            <Center w={"50%"} bg={'transparent'} zIndex='10'>
                <ChakraNextLink 
                href = '/'
                  textAlign= {'center'}
                  fontFamily={'heading'}
                  color={color_theme[3]}
                  fontSize='1.6em'
                  fontWeight={800}
                  className='hide'
                  _hover={{textDecoration:'none', color: 'gray.900'}}
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
              position='absolute'
              align={'center'}
              minW={'14em'}
              m='auto'
              zIndex='10'
              h='10vh'
              bg={color_theme[0]}
              >
          <Center bg={'transparent'} zIndex='10'>
            <ChakraNextLink textAlign= {'center'}
              href='/'
              fontFamily={'heading'}
              color={color_theme[3]}
              bg={color_theme[0]}
              pt='0.1em'
              pb='0.1em'
              fontSize='1.6em'
              fontWeight={800}
              className='hide'
              width={'100%'}
              _hover={{textDecoration:'none', color: color_theme[2]}}
              >
                NC
              </ChakraNextLink>
          </Center>
          <Flex h='100vh' align={'flex-start'}
                direction={'row'} justify={'space-evenly'} minW='14em'
                zIndex='10' w='100vw' overflow='hidden'>
            <MobileNav />
          </Flex>
      </VStack>
    </>
    );
  }


  const MobileNav = () => {
    const linkColor = color_theme[3];
    const linkHoverColor = color_theme[2];
    const popoverContentBgColor = color_theme[0];
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
          borderWidth={'1.5px'}
          _hover={{
            borderColor: linkHoverColor,
            color: linkHoverColor
          }}
          bgColor={color_theme[0]}
	  borderColor={linkColor}
          color={linkColor}
          zIndex='10'
        >
        {navItem.children&&
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
                  <ChakraLink fontSize={'xl'}
                  fontWeight={600}
                  _hover={{
                    textDecoration: 'none'
                  }}
                  p={2}
                  >
                {navItem.label}
                </ChakraLink>
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
        </Popover>}
        {
        !navItem.children && navItem.href && <ChakraNextLink
                                p={2}
                                fontSize={'xl'}
                                fontWeight={600}
                                _hover={{
                                  textDecoration: 'none'
                                }}
                                href={navItem.href ?? navItem.a ?? '#'}
                                zIndex='10'
                                >
                                {navItem.label}
                                
                            </ChakraNextLink>
        }
        {
          !navItem.children && navItem.a && <a
              href={navItem.a}
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontWeight: "600", fontSize: "20px", height: "2.3em", paddingTop: "08px"}}
            >Resume</a>
        }
      </Center>
      ))}
      </>
    );
  }

  const DesktopNav = () => {
    const linkColor = color_theme[3];
    const linkHoverColor = color_theme[2];
    const popoverContentBgColor = color_theme[0];
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
                borderColor={color_theme[3]}
                _hover={{
                  borderColor: linkHoverColor,
                  color: linkHoverColor
                }}
                bgColor={color_theme[0]}
                color={linkColor}
                zIndex='10'
            >
              {
                navItem.children && 
                <Popover trigger={'hover'} placement={'bottom-start'} zIndex='10'>
                  <PopoverTrigger>
                  <ChakraLink
                    p={2}
                    fontSize={'xl'}
                    fontWeight={800}
                    _hover={{
                      textDecoration: 'none'
                    }}
                    zIndex='10'
                    >
                    {navItem.label}
                    </ChakraLink>
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
              }
              {!navItem.children && navItem.href && 
                <ChakraNextLink
                    p={2}
                    fontSize={'xl'}
                    fontWeight={800}
                    _hover={{
                      textDecoration: 'none'
                    }}
                    href={navItem.href ?? navItem.a ?? '#'}
                    zIndex='10'
                    >
                    {navItem.label}
                    
                </ChakraNextLink>
              }
              {!navItem.children && navItem.a && 
                <a
                href={navItem.a}
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontWeight: "800", fontSize: "20px"}}
                >Resume</a>
                }
            </Box>
          ))}
        </Flex>
      </Stack>
    );
  };
  
  const SubNav = ({ label, href, subLabel }) => {
    return (
        <ChakraNextLink role={'group'}
        href={href ?? ''}
        display={'block'}
        p={2}
        _hover={{ 
        bgColor: 'none',
      }}
        zIndex='10'
      >
        <Stack direction={'row'} align={'center'} zIndex='10'>
          <Box 
              color= {color_theme[3]}
              _groupHover={{ color: color_theme[2] }}
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
            <Icon color={color_theme[0]} w={5} h={5} as={ href ? (href[0]=='h' ? LinkIcon : ArrowRightIcon) : NotAllowedIcon}/>
          </Flex>
        </Stack>
        </ChakraNextLink>
    );
  };
