import { Container, VStack, Box } from '@chakra-ui/react'
import { ReactNode } from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WelcomePage from './pages/WelcomePage';
import ContactPage from './pages/ContactPage';
import KeyPointsPage from './pages/KeyPointsPage';
import NeighborsAndOwnersPage from './pages/NeighborsAndOwnersPage';
import NewsletterPage from './pages/NewsletterPage';

const Page = ({ children }: { children: ReactNode }) => (
  <Box>
    {children}
  </Box>
);

function App() {
  return (
    <Container
      p={0}
      minW={'100vw'}
      overflow={'hidden'}
    >
      <Navigation />
      <VStack spacing={0}>
        <Page>
          <WelcomePage />
        </Page>
        <Page>
          <ContactPage />
        </Page>
        <Page>
          <KeyPointsPage />
        </Page>
        <Page>
          <NeighborsAndOwnersPage />
        </Page>
        <Page>
          <NewsletterPage />
        </Page>
        <Footer />
      </VStack>
    </Container>
  )
}

export default App
