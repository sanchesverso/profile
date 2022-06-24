import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="yellow" p={3} mb={6} align="center">
            What&apos;s up? I&apos;m a mobile developer specializing in web3!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrou={1}>
                    <Heading as="h2" variant="page-title">
                        Pedro Sanches
                    </Heading>
                    <p>Digital Craftsman ( Developer / 3D Modeler / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page