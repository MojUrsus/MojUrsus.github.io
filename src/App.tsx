import { VStack, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { ReactNode } from 'react';
import Navigation from "./components/Navigation";
import WelcomePage from './pages/WelcomePage';
import ContactPage from './pages/ContactPage';

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
      </VStack>
    </>
  )
}

export default App
