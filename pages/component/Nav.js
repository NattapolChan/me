import {
    Box,
    Flex,
    Text,
    Stack,
    HStack,
    Grid,
    GridItem,
    Collapse,
    Center,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
  import {
    LinkIcon,
    ExternalLinkIcon,
    NotAllowedIcon,
    ArrowBackIcon,
    ArrowRightIcon,
  } from '@chakra-ui/icons';
import React from 'react';


  export default function Navbar() {
    const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','gray.400']
    return (
      <>
        <Flex maxWidth="100%" pt={'70px'} overflow="hidden" display={{base: 'none', xl: 'flex'}}>
            <Center w={"50%"} bg={'transparent'} >
              <Link 
                href='/'
                // onClick={(e) => e.preventDefault()}
                textAlign= {'center'}
                fontFamily={'heading'}
                color={'gray.400'}
                fontSize='1.6em'
                fontWeight={800}
                className='hide'
                _hover={{textDecoration:'none', color: color_scheme[0]}}
              >
                NC
              </Link>
            </Center>
            <Box w={"50%"} >
              <DesktopNav />
            </Box>
        </Flex>
        <VStack display={{base:'block', xl: 'none'}} 
              overflow={'hidden'} 
              position='relative'
              align={'center'}
              minW={'14em'}
              m='auto'>
          <Center bg={'transparent'} >
            <Link 
            href='/'
            // onClick={(e) => e.preventDefault()}
            textAlign= {'center'}
            fontFamily={'heading'}
            color={'gray.400'}
            bg={color_scheme[3]}
            pt='0.1em'
            pb='0.1em'
            fontSize='1.6em'
            fontWeight={800}
            className='hide'
            width={'100%'}
            _hover={{textDecoration:'none', color: color_scheme[0]}}
            >
              NC
            </Link>
          </Center>
          <Flex h='70vh' align={'flex-start'}
                direction={'row'} spacing='5vh' justify={'space-evenly'} minW='14em'>
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
          w='6.5em'
          pl={'2px'}
          pr={'2px'}
          pt={'0px'}
          pb={'0px'}
          borderWidth={'1px'}
          // borderColor={'white'}
          _hover={{
            borderColor: linkHoverColor,
            color: linkHoverColor
          }}
          bgColor={color_scheme[1]}
          color={linkColor}
        >
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={1}
              href={navItem.href ?? '#'}
              fontSize={'xl'}
              fontWeight={700}
              _hover={{
                textDecoration: 'none'
              }}
              >
              {navItem.label}
            </Link>
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
              <Stack>
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
      <Stack direction={'row'} spacing={4}>
        <Flex justifyContent={"flex-end"} gap = {6} overflow>
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
            >
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'xl'}
                    fontWeight={800}
                    _hover={{
                      textDecoration: 'none'
                    }}
                    >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    rounded='0px'
                    _hover={{
                      borderWidth: '2px',
                      borderColor: 'white',
                    }}
                    p={4}
                    minW={'sm'}>
                    <Stack>
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
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        _hover={{ 
        bgColor: 'none',
      }}
        >
        <Stack direction={'row'} align={'center'}>
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
      </Link>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'Research',
      children: [
        {
          label: 'Parallel Curves Detection Method based on Hough Transform',
          subLabel: 'see page 135',
          href: 'https://www.math.science.cmu.ac.th/tjcdcggg/Book-abstract.pdf#page=135',
        },
        {
          label: 'Deeply Supervised CNN with Attention Mechanism',
          subLabel: 'High school graduation project',

        },
      ],
    },
    {
      label: 'Project',
      children: [
        {
          label: 'SaraTree',
          subLabel: 'A submission to HACKVCIS hackathon',
          href: 'https://saratree.vercel.app/'
        },
        {
          label: 'Guitar Tab Generator',
          subLabel: 'A website to generate guitar tab from .wav file',
          href: 'https://nattapolguitartab.netlify.app/'
        },
      ]
    },
    {
      label: 'Resume',
    //   href: 'https://docs.google.com/document/d/1GJzsIIE7Eez76El0f2XoZvN4Wolvu9-fxL5yCWRA200/edit?usp=sharing',
      href: '/Chanpaisit_Nattapol_Resume.pdf',
    },
    {
      label: 'About',
      href: '/About',
      // href: '/me/utils/Chanpaisit_Nattapol_Resume.pdf',
    },
  ];