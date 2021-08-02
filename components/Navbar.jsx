import { Flex, HStack, Img, Button, Spacer, Text, useMediaQuery, useToast } from '@chakra-ui/react'
import { GoLinkExternal } from 'react-icons/go'

import Link from 'next/link'

function Navbar () {
  const [isSmall] = useMediaQuery('(max-width: 580px)')
  const toast = useToast()

  return (
    <Flex
      backgroundColor='gray.800'
      zIndex='9'
      boxShadow='xl'
      as='nav'
      p='2'
      justifyContent='center'
      alignItems='center'
      position='sticky'
      top='0'
    >
      <HStack w={{ sm: '95%', lg: '80%', xl: '1200px' }}>
        <Link href='/' passHref>
          <a>
            <HStack>
              <Img h='20' src='/logo.svg' />
              {!isSmall && (
                <Text fontWeight='extrabold' fontSize='3xl'>
                  DistroBoy
                </Text>
              )}
            </HStack>
          </a>
        </Link>
        <Spacer />
        <Button
          onClick={() =>
            toast({
              title: 'DistroBoy is in closed beta',
              duration: 10000,
              isClosable: true,
              description:
                'Our team is working now to give you our service soon...'
            })}
        >
          Join us{' '}
        </Button>
        <Link href='/demo' passHref>
          <Button colorScheme='orange'>
            Try our demo
            <GoLinkExternal style={{ marginLeft: '5px' }} />
          </Button>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Navbar
