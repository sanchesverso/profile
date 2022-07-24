import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Router from 'next/dist/server/router'
import Footer from '../footer'

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
           <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            <title> Pedro Sanches - Homepage</title>
           </Head>

           <Navbar path={ Router.asPath } />
           
           <Container maxW="container.md" pt={14}>
                {children}

                <Footer />
           </Container>
        </Box>
    )
}

export default Main