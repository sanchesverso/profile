import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pedro Sanches | Web3 Blockchain Expert | Metaverse | Futurist | Software Engineer"
        />
        <meta name="author" content="Pedro Sanches" />
        <meta name="twitter:title" content="Pedro Sanches" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sanchesverse" />
        <meta name="twitter:creator" content="@sanchesverse" />
        <meta
          name="twitter:image"
          content="https://www.pedrosanches.com.br/card.png"
        />
        <meta property="og:site_name" content="Pedro Sanches" />
        <meta name="og:title" content="Pedro Sanches" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.pedrosanches.com.br/card.png"
        />
        <title> Pedro Sanches - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
