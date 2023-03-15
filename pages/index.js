import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  Image,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitch
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey there! I&apos;m passionate about the latest web and mobile
        development technologies. Let&apos;s connect and chat more about all the
        exciting things happening in this space!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pedro Sanches
          </Heading>
          <p>
            Digital Craftsman ( Web3 Blockchain Enthusiast | Metaverse |
            Futurist | Software Engineer )
          </p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Specialist in custom application development, he joined Accenture in
          2016.
          <br />
          I&apos;ve been working as Team Lead for a financial solutions client
          preparing a team of a-players to create the best solutions together
          with the product team and scale the applications to over 600,000
          users.
          <br />
          Experience in team leadership, people management, agile development,
          complex systems analysis, architecture design, process automation,
          evangelist of the DevOps culture.
          <br />
          Over these 6 years, he participated in the delivery of 11 projects
          serving 8 clients in the agribusiness, telecom, consumer goods,
          finance solutions and resources segments.
        </Paragraph>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/works" passHref target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
              My Portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1986</BioYear>
          Born in São Paulo, SP.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Completed the Postgraduate Program in Information Security at the
          Union of Brazilian Institutes of Technology university.
        </BioSection>
        <BioSection>
          <BioYear>2016 to present</BioYear>
          Programming has always been a hobby, but the key turned when I started
          working at Accenture Brasil as a Full iOS Developer.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I &#10084;
        </Heading>
        <Paragraph>
          Family, My Car, Music, Football, Basketball, Poker, Fishing,
          Information Security,{' '}
          <Link href="https://github.com/sanchesverso" target="_blank">
            Programming
          </Link>
          , and{' '}
          <Link href="https://www.youtube.com/@sanchesverso" target="_blank">
            3D Modeling
          </Link>
          .
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <Link href="https://github.com/sanchesverso" target="_blank">
          <Button
            variant="unstyled"
            colorScheme="yellow"
            leftIcon={<IoLogoGithub />}
          />
        </Link>
        <Link href="https://twitter.com/sanchesverso" target="_blank">
          <Button
            variant="unstyled"
            colorScheme="yellow"
            leftIcon={<IoLogoTwitter />}
          />
        </Link>
        <Link href="https://www.twitch.tv/sanchesverso" target="_blank">
          <Button
            variant="unstyled"
            colorScheme="yellow"
            leftIcon={<IoLogoTwitch />}
          />
        </Link>
        <Link href="https://instagram.com/sanchesverso" target="_blank">
          <Button
            variant="unstyled"
            colorScheme="yellow"
            leftIcon={<IoLogoInstagram />}
          />
        </Link>
        @sanchesverso
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
