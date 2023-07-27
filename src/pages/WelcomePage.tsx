import { Box, Image, Heading, Text, Flex } from '@chakra-ui/react'

const WelcomePage = () => {
    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}>
            <Box display={{ base: 'none', lg: 'block' }}
                minW={'30vw'}/>
            <Box
                id='title-box'
                position={{ base: 'relative', lg: 'absolute' }}
                w={{ base: '80vw', lg: '40vw' }}
                m={8}
                p={{ base: 8, lg: 16 }}
                top={{base: 0, lg: '25vh'}}
                bg={'white'}
                _after={{
                    position: 'absolute',
                    width: 32,
                    height: 16,
                    content: '""',
                    right: 0,
                    bottom: 0,
                    borderRight: '4px solid orange',
                    borderWidth: { base: 4, lg: 8 },
                    borderColor: 'orange'
                }}>
                <Heading as='h3' size='lg'>MÓJ URSUS</Heading>
                <Text fontSize='lg'>Nasze osiedle, nasza sprawa</Text>
                <Text fontSize='sm'>Etapy 1, 2, 3</Text>
            </Box>
            <Image
                objectFit='cover'
                src='background.jpg'
                fallbackSrc='https://via.placeholder.com/1440x1080'/>
        </Flex>
    );
};

export default WelcomePage;