import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFinanceSolutions from '../public/images/works/banking_eyecatch.png'
import thumbNaturalResources from '../public/images/works/natural_resources_eyecatch.png'
import thumbNaturalResources1 from '../public/images/works/natural_resources_1_eyecatch.png'
import thumbCommunicationsMedia from '../public/images/works/communications_and_media_eyecatch.png'
import thumbCommunicationsMedia1 from '../public/images/works/communications_and_media_1_eyecatch.png'
import thumbCustomerGoods from '../public/images/works/consumer_goods_and_services_eyecatch.png'
import thumbAgribusiness from '../public/images/works/agribusiness_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => (
      <Layout>
        <Container>
          <Heading as="h3" fontSize={20} mb={4} mt={4}>
            Works
          </Heading>
    
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem 
                id="natural-resources-63020" 
                title="Large Natural Resources Company" 
                thumbnail={thumbNaturalResources}
              >
                Worked as a Tech Lead in creating a product with offline synchronization, event
                management and user profiles.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="natural-resources-33120"
                title="Large Natural Resources Company"
                thumbnail={thumbNaturalResources1}
              >
                Worked as Tech Lead in creating a product for route control and employee management.
              </WorkGridItem>
            </Section>
    
            <Section delay={0.1}>
              <WorkGridItem
                id="finance-solutions-21520"
                title="Finance Solutions Company"
                thumbnail={thumbFinanceSolutions}
              >
                Participated in a squad at the client as a senior developer where I helped in the technology migration of a product aimed at the client&apos;s employees and strategic features.
              </WorkGridItem>
            </Section>
            <Section delay={0.1}>
              <WorkGridItem 
                id="telco-62619" 
                title="Large Telco Company"
                thumbnail={thumbCommunicationsMedia1} 
              >
                As a Tech Lead, he led a team in the technology migration of a product intended for sales
                and after-sales services for the client.
              </WorkGridItem>
            </Section>
            <Section delay={0.1}>
              <WorkGridItem 
                id="agribusiness-93018" 
                title="Large National Agricultural Company"
                thumbnail={thumbAgribusiness} 
              >
                As Tech Lead led the team in creating a product integrated with Salesforce CRM, with
                super optimized offline synchronization capable of processing large loads of data from
                entities in minutes, focused on monitoring crops on farms.
              </WorkGridItem>
            </Section>
            <Section delay={0.1}>
              <WorkGridItem 
                id="customer-goods-20118" 
                title="Large Multinational of Consumer Goods Company (México)"
                thumbnail={thumbCustomerGoods} 
              >
                Worked as Tech Lead in the creation of a product integrated with Salesforce CRM, with
                offline synchronization optimized to serve dozens of entities, focused on the census for
                office scanning.
              </WorkGridItem>
            </Section>
            <Section delay={0.1}>
              <WorkGridItem 
                id="telco-83117" 
                title="Large Telco Company"
                thumbnail={thumbCommunicationsMedia} 
              >
                Worked as Tech Lead in the creation of a product aimed at technical visits, using
                geolocation service and push notifications.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
  )
  
  export default Works