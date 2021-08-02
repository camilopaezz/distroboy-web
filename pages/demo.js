import {
  Box,
  Flex,
  Img,
  Input,
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react'
import { useState } from 'react'

function Demo () {
  const [{ cover, name, album, author }, setFormData] = useState({
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

  return (
    <Box
      display='flex'
      justifyContent='center'
      m='0 auto'
      borderWidth='1px'
      w='100%'
      maxW='620px'
      p='8'
    >
      <Box as='form' action='/api/process' encType='multipart/form-data' method='POST'>
        <Flex wrap='wrap' justifyContent='center'>
          <Box mb='4' mr='6'>
            <Box cursor='pointer' as='label' htmlFor='cover'>
              <Img
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
                accept='audio/x-wav, audio/mpeg'
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
  )
}

export default Demo
