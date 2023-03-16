import Link from 'next/link'
import { Text, Image, useColorModeValue } from '@chakra-ui/react'
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
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  const avatarImg = `/images/logo${useColorModeValue('', '-dark')}.svg`

  return (
    <LogoBox>
      <Image src={avatarImg} width={25} height={25} alt="logo" />
      <Link href="/">
        <Text
          color={useColorModeValue('gray.800', 'whiteAplha.900')}
          fontFamily="'M PLUS ROUNDED 1c'"
          fontWeight="bold"
          ml={3}
        >
          Pedro Sanches
        </Text>
      </Link>
    </LogoBox>
  )
}

export default Logo
