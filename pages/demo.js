import {
  Box,
  Flex,
  Img,
  Input,
  FormControl,
  FormLabel,
  Button,
  CircularProgress,
  Text,
  Heading
} from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { GoLinkExternal } from 'react-icons/go'

function Demo () {
  const [isLoading, setLoadingState] = useState(false)
  const [completed, setCompletedState] = useState('')

  const [{ cover, name, sound, album, author }, setFormData] = useState({
    cover: {
      blob: '/defaultArt.jpg'
    },
    name: '',
    album: '',
    author: ''
  })

  const handleInput = (e) => setFormData((state) => {
    if (e.target.files) {
      return {
        ...state,
        [`${e.target.name}`]: {
          blob: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        }
      }
    }

    return {
      ...state,
      [`${e.target.name}`]: e.target.value
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingState(true)
    const formData = new window.FormData()

    formData.append('cover', cover.raw)
    formData.append('sound', sound.raw)
    formData.append('name', name)
    formData.append('author', author)
    formData.append('album', album)

    axios
      .post('http://api-distroboy.herokuapp.com/', formData, {
      // .post('http://localhost:3009/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res)
        setLoadingState(false)
        setCompletedState(
          'http://api-distroboy.herokuapp.com/songs/' + 'res.songName'
          // 'http://localhost:3009/songs/' + res.data.songName
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (completed) {
    return (
      <Box textAlign='center' my='20'>
        <Heading mb='5'>Your song was uploaded</Heading>
        <Link passHref href={completed}>
          <Button colorScheme='orange'>
            Checkout here
            <Box ml='2'>
              <GoLinkExternal />
            </Box>
          </Button>
        </Link>
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Head>
          <title>Loading | DistroBoy</title>
        </Head>
        <CircularProgress pt='20' pb='4' isIndeterminate size='120px' color='green.300' />
        <Text>Wait until files are upload...</Text>
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>Demo | DistroBoy</title>
      </Head>
      <Box
        display='flex'
        justifyContent='center'
        m='0 auto'
        mt='20'
        borderWidth='1px'
        borderRadius='lg'
        w='100%'
        maxW='620px'
        p='8'
      >
        <Box as='form' encType='multipart/form-data' onSubmit={handleSubmit}>
          <Flex wrap='wrap' justifyContent='center'>
            <Box mb='4' mr='6'>
              <Box cursor='pointer' as='label' htmlFor='cover'>
                <Img
                  alt='your custom cover'
                  objectFit='contain'
                  borderRadius='lg'
                  overflow='hidden'
                  src={cover.blob}
                  w='250px'
                />
                <input
                  required
                  accept='image/png, image/jpeg, image/jpg'
                  onChange={handleInput}
                  id='cover'
                  name='cover'
                  style={{ display: 'none' }}
                  type='file'
                />
              </Box>
              <Button mt='3' mr='6' cursor='pointer' as='label' htmlFor='sound'>
                Select Sound
                <input
                  required
                  accept='audio/mpeg'
                  onChange={handleInput}
                  id='sound'
                  name='sound'
                  style={{ display: 'none' }}
                  type='file'
                />
              </Button>
            </Box>
            <Box>
              <FormControl isRequired mb='2'>
                <FormLabel fontWeight='bold'>Name</FormLabel>
                <Input
                  value={name}
                  name='name'
                  onChange={handleInput}
                  type='text'
                />
              </FormControl>
              <FormControl isRequired mb='2'>
                <FormLabel fontWeight='bold'>Album</FormLabel>
                <Input
                  value={album}
                  name='album'
                  onChange={handleInput}
                  type='text'
                />
              </FormControl>
              <FormControl isRequired mb='2'>
                <FormLabel fontWeight='bold'>Author</FormLabel>
                <Input
                  value={author}
                  name='author'
                  onChange={handleInput}
                  type='text'
                />
              </FormControl>
              <Button
                mt='5'
                colorScheme='orange'
                textAlign='center'
                type='submit'
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Demo
