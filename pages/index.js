import {
  Heading,
  Text,
  Img,
  Divider,
  Grid,
  useMediaQuery,
  VStack,
  Button,
  Box,
  Flex,
  Container,
  useToast
} from '@chakra-ui/react'
import OpinionCard from '../components/OpinionCard'
import Footer from '../components/Footer'

export default function Home () {
  const [isLaptop, isMobile] = useMediaQuery([
    '(max-width: 1325px)',
    '(max-width: 426px)'
  ])

  const toast = useToast()
  const margin = isLaptop ? '4' : '20'

  return (
    <>
      <VStack
        divider={<Divider stroke />}
        w={{ sm: '90%', lg: '80%', xl: '1200px' }}
        m='0 auto'
      >
        <Grid
          my={margin}
          as='section'
          gridTemplateColumns={isLaptop ? '1fr' : '1.2fr 2fr'}
          gap='21px'
          placeItems='center'
          textAlign='center'
          justifyContent='center'
          padding='4'
        >
          <Container>
            <Heading
              as='h1'
              bg='linear-gradient(to left, #c21500, #ffc500)'
              bgClip='text'
              mb='3%'
              fontSize={isMobile ? '4xl' : '6xl'}
            >
              Your music, for all the world
            </Heading>
            <Text margin='0 auto' maxInlineSize='60ch' mb='5'>
              In <b>DistroBoy</b> we are committed to help independent musicians
              to show their music to the world.
            </Text>
            <Button px='16' colorScheme='orange' size='lg'>
              Join us
            </Button>
          </Container>
          <Img m='0 auto' src='/disc.png' w='95%' />
        </Grid>
        <Box my={margin} textAlign='center' as='section'>
          <Heading
            bg='linear-gradient(to left, #c21500, #ffc500)'
            bgClip='text'
            textAlign='center'
            mb='7%'
          >
            What we do?
          </Heading>
          <Text maxInlineSize='50ch'>
            DistroBoy help you to manage the monetization of your music, we have
            agreements with the principal music platforms like Spotify, Apple
            Music, Deezer, etc.
          </Text>
        </Box>
        <Box my={margin} as='section'>
          <Heading
            textAlign='center'
            mb='4%'
            bg='linear-gradient(to left, #c21500, #ffc500)'
            bgClip='text'
          >
            What musicians think about us?
          </Heading>
          <Flex flexWrap='wrap' justifyContent='center'>
            <OpinionCard artist='Kanye West' img='/profile/kanye.jpeg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
            <OpinionCard artist='MadLib' img='/profile/madlib.jpg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
            <OpinionCard artist='MFDoom' img='/profile/mfdoom.jpeg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
            <OpinionCard artist='Quasimoto' img='/profile/lordquas.png'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
            <OpinionCard artist='Viktor Vaughn' img='/profile/viktor.jpg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
            <OpinionCard artist='Metal Fingers' img='/profile/metal.jpg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
              eaque eveniet nesciunt iusto cum rem maxime aut doloribus amet
              labore modi ipsa, libero et, aperiam error exercitationem optio quae
              odit!
            </OpinionCard>
          </Flex>
        </Box>
        <Box my={margin} textAlign='center' as='section'>
          <Heading
            bg='linear-gradient(to left, #c21500, #ffc500)'
            bgClip='text'
            textAlign='center'
            mb='7%'
          >
            Do you like what you heard?
          </Heading>
          <Button
            onClick={() =>
              toast({
                title: 'DistroBoy is in closed beta',
                duration: 10000,
                isClosable: true,
                description:
                'Our team is working now to give you our service soon...'
              })}
            px='16'
            colorScheme='orange'
            size='lg'
          >
            Join us
          </Button>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}
