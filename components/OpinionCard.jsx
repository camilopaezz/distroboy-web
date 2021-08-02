import { Box, Text, Avatar, HStack, Heading } from '@chakra-ui/react'
import { GoVerified } from 'react-icons/go'

function OpinionCard ({ artist, img, children, alt }) {
  return (
    <Box m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <HStack
          mt='1'
          mb='2'
          fontWeight='semibold'
          isTruncated
          alignItems='center'
        >
          <Avatar alt={alt} mr='1' src={img} size='sm' />
          <Heading fontSize='m' as='h3'>
            {artist}
          </Heading>
          <GoVerified />
        </HStack>
        <Text>{children}</Text>
      </Box>
    </Box>
  )
}

export default OpinionCard
