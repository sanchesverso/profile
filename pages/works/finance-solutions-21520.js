import {
    Container,
    Badge,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Finance Solutions Company">
      <Container>
      <WorkImage src="/images/works/banking_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Finance Solutions Company <Badge>04/01/2019 - 02/15/2020</Badge>
        </Title>
        <P>
          Participated in a squad at the client as a senior developer where I helped in the technology migration of a product aimed at the client's employees and strategic features.
          The biggest challenge was the challenge to be hired by the client, the mission was to develop a Netflix clone in the shortest possible time. In 8 hours I managed to deliver the 3 main screens of Netflix, with several features such as top menu, main banner, horizontal navigation through movie covers, all movie information consumed by API, search page by movie name or genre, page of movie details with cover, movie information and actors.
          This challenge was insane, I love competition.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML5/CSS3/TypeScript</span>
          </ListItem>
          <ListItem>
            <Meta>Framework</Meta>
            <span>Angular/Ionic 3</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
        </List>       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'