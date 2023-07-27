import { Flex, Box, Image, Heading, Text, Center, VStack } from '@chakra-ui/react'

const WelcomePage = () => {
    return (
        <VStack h='full'>
            <Image
                h='full'
                src='background.jpg'
                fallbackSrc='https://via.placeholder.com/1440x1080'
                objectFit='cover' />
            <Center>
                <Box
                    id='title-box'
                    position={'relative'}
                    m={8}
                    px={{ base: 8, lg: 16 }}
                    py={8}
                    _after={{
                        position: 'absolute',
                        width: 32,
                        height: 16,
                        content: '""',
                        right: 0,
                        bottom: 0,
                        borderRight: '4px solid orange',
                        borderWidth: {base: 4, lg: 8},
                        borderColor: 'orange'
                    }}>
                    <Heading as='h3' size='lg'>MÓJ URSUS</Heading>
                    <Text fontSize='lg'>Nasze osiedle, nasza sprawa</Text>
                    <Text fontSize='sm'>Etapy 1, 2, 3</Text>
                </Box>
            </Center>
        </VStack>
    );
};

export default WelcomePage;