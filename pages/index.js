import NextLink from "next/link"
import { 
    Container, 
    Box,
    Button,
    Heading, 
    Image,
    Link,
    useColorModeValue
 } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from "../components/layouts/article"

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAplha.200')}
                p={3} 
                mb={6}
                align="center">
                    What&apos;s up? I&apos;m passionate about the best web & mobile development technologies.
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Pedro Sanches
                        </Heading>
                        <p>Digital Craftsman ( Web3 Blockchain Expert | Metaverse | Futurist | Software Engineer )</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0 }}
                        ml={{md: 6}}
                        align="center"
                    >
                        <Image 
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/avatar.png"
                            alt="profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                    Specialist in custom application development, he joined Accenture in 2016.
                    <br/>
                    I&apos;ve been working as Team Lead for a financial solutions client preparing a team of a-players to
                    create the best solutions together with the product team and scale the applications to over
                    600,000 users.
                    <br/>
                    Experience in team leadership, people management, agile development, complex systems analysis,
                    architecture design, process automation, evangelist of the DevOps culture.
                    <br/>
                    Over these 6 years, he participated in the delivery of 11 projects serving 8 clients in the
                    agribusiness, telecom, consumer goods, finance solutions and resources segments.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
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
                        Completed the Postgraduate Program in Information Security at the Union of Brazilian Institutes of Technology university.
                    </BioSection>
                    <BioSection>
                        <BioYear>2016 to present</BioYear>
                        Programming has always been a hobby, but the key turned when I started working at Accenture Brasil as a Full iOS Developer.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I &#10084;
                    </Heading>
                    <Paragraph>
                        Family, Cars, Music, Football, Basketball, Poker,
                        Fishing, Information security, 
                        {' '} 
                        <Link href="">
                        Programming
                        </Link>, and
                        {' '} 
                        <Link href="">
                        3D Modeling
                        </Link>.
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page