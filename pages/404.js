import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Oh dear, you&apos;re lost?</Heading>
      <Text>Come back in a little while or return to the homepage.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Link as={NextLink} href="/" passHref target="_blank">
          <Button colorScheme="yellow">Return to home</Button>
        </Link>
      </Box>
    </Container>
  )
}

export default NotFound
