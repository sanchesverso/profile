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
    <Layout title="Large Multinational of Consumer Goods Company (México)">
      <Container>
      <WorkImage src="/images/works/consumer_goods_and_services_eyecatch.png" alt="Large Natural Resources Company" />
        <Title>
        Large Multinational of Consumer Goods Company (México) <Badge>09/01/2017 - 02/01/2018</Badge>
        </Title>
        <P>
          Worked as Tech Lead in the creation of a product integrated with Salesforce CRM, with offline synchronization optimized to serve dozens of entities, focused on the census for office scanning.
          Participated in the planning, design, development, testing and delivery of the product.
          Helped in designing the solution architecture
          Assist team members in implementing the architecture following good practices and adopted design patterns.
          Improved code quality, maintainability and readability.
          Prepare knowledge transfer documentation.
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