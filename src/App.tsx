import { VStack, Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WelcomePage from './pages/WelcomePage';
import ContactPage from './pages/ContactPage';
import KeyPointsPage from './pages/KeyPointsPage';

const Page = ({ children }: { children: ReactNode }) => (
  <Box w='100%'>
    <Flex flexFlow={'column'}>
      {children}
    </Flex >
  </Box>
);

function App() {
  return (
    <>
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
        <Footer />
      </VStack>
    </>
  )
}

export default App
