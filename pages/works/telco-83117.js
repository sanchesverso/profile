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
    <Layout title="Large Telco Company">
      <Container>
      <WorkImage src="/images/works/communications_and_media_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Large Telco Company <Badge>02/01/2017 - 08/31/2017</Badge>
        </Title>
        <P>
          Worked as Tech Lead in the creation of a product aimed at technical visits, using geolocation service and push notifications.
          Participated in the development, testing and delivery of the product.
          Helped in designing the solution architecture
          Assisted team members in implementing the architecture following good practices and adopted design patterns.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
        </List>       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'