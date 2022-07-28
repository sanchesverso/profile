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
    <Layout title="Large National Agricultural Company">
      <Container>
      <WorkImage src="/images/works/agribusiness_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Large National Agricultural Company <Badge>03/01/2018 - 09/30/2018</Badge>
        </Title>
        <P>
          Worked as Tech Lead led the team in creating a product integrated with Salesforce CRM, with super optimized offline synchronization capable of processing large loads of data from entities in minutes, focused on monitoring crops on farms.
          Participated in the design, development, testing and delivery of the product.
          Helped in designing the solution architecture
          Assisted team members in implementing the architecture following good practices and adopted design patterns.
          Continuously improved code quality, maintainability and readability.
          Prepared knowledge transfer documentation.
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