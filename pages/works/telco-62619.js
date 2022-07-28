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
      <WorkImage src="/images/works/communications_and_media_1_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Large Telco Company <Badge>10/01/2018 - 06/26/2019</Badge>
        </Title>
        <P>
          Worked as Tech Lead, he led a team in the technology migration of a product intended for sales and after-sales services for the client.
          Participated in the design, development, testing and delivery of the product.
          Helped design the solution architecture
          Assisted team members in implementing the architecture following best practices and adopted design patterns.
          Continuously improved code quality, maintainability and readability.
          Closely followed the testing and approval of the product.
          Participated in on-site meetings and design thinking sessions with clients.
          Product brought great financial results to the customer a few months later.
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