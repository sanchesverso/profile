import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weith: bold;
    fonr-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-heigth: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const avatarImg = `/images/avatar${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={avatarImg} width={20} height={20} alt="logo" />
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAplha.900')}
                    fontFamily='M PLUS ROUNDED 1c'
                    fontWeight="bold"
                    ml={3}
                    >
                        Pedro Sanches
                    </Text>
            
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo