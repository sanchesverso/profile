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
    <Layout title="Large Natural Resources Company">
      <Container>
      <WorkImage src="/images/works/natural_resources_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Large Natural Resources Company <Badge>05/18/2020 - 06/30/2020</Badge>
        </Title>
        <P>
          Worked as a Tech Lead in creating a product with offline synchronization, event management and user profiles.
          Participated in the planning, design, development, testing and delivery of the product.
          Was responsible for designing the solution architecture
          He assisted team members in implementing the architecture following the adopted design patterns.
          Continuously improved code quality, maintainability and readability.
          Prepared knowledge transfer documentation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML5, CSS3, TypeScript, NodeJS</span>
          </ListItem>
          <ListItem>
            <Meta>Framework</Meta>
            <span>Ionic 3</span>
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