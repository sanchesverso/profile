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

const Page = () => {
    return (
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAplha.200')}
            p={3} 
            mb={6} 
            align="center">
                What&apos;s up? I&apos;m a mobile developer specializing in web3!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Pedro Sanches
                    </Heading>
                    <p>Digital Craftsman ( Developer / 3D Modeler / Designer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0 }}
                    ml={{md: 6}}
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={ 2 }
                        borderStyle="solid"
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
                Sanches is a Senior Mobile Developer who has been working at Accenture Brazil for 7 years, where he has already participated in the active development of 10 projects, and occasional help in another 5 projects. During this period, I was able to learn new technologies and increase my range of activities. I started acting as a tech leader in 2018 and in 2020 as a team leader where I am currently leading 3 squads.                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
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
    )
}

export default Page