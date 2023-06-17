import { Flex, Box, Image, Heading, Text, Center } from '@chakra-ui/react'

const WelcomePage = () => {
    return <Box h='full'>
        <Flex h='full'>
            <Box w={'75%'}>
                <Box
                    id='floating-header'
                    minW={200} minH={100}
                    h={'30%'} w={400}>
                    <Flex
                        alignContent={'center'}
                        justifyContent={'center'}
                        h={'100%'}
                        position={'relative'}
                        left={'30%'} top={'100%'}
                        bg='white'>
                        <Center>
                            <Box>
                                <Heading as='h3' size='lg'>MÓJ URSUS</Heading>
                                <Text fontSize='lg'>Nasze osiedle, nasza sprawa</Text>
                                <Text fontSize='sm'>Etapy 1, 2, 3</Text>
                            </Box>
                        </Center>
                        <Box
                            h={'40%'} w={'3'}
                            bg='orange'
                            position={'absolute'}
                            right={-1} bottom={0}>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box h='full'>
                <Image
                    h='full'
                    src='background.jpg'
                    fallbackSrc='https://via.placeholder.com/1440x1080'
                    objectFit='cover'/>
            </Box>
        </Flex>
    </Box>
};

export default WelcomePage;