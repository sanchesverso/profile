import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursos="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursos="pointer">
                <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text fontSize={16} fontWeight={400} mt={2}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={12} fontWeight={100} mt={1} align="left">
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }`
        }
    />
)