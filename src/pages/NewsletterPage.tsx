import { Box, Flex, HStack, Heading, VStack, Text, Button, Center, Stack } from "@chakra-ui/react";
import { ReactNode } from 'react';
import { TbHeartHandshake } from 'react-icons/tb';
import { FaChartArea } from 'react-icons/fa';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

type NewsletterPointData =
    {
        key: number;
        title: string;
        description: string;
        icon: ReactNode;
    };

const points: NewsletterPointData[] = [
    {
        key: 0,
        title: 'WSPÓŁPRACA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        icon: <TbHeartHandshake size={100} color={'#C29477'} />
    },
    {
        key: 1,
        title: 'ZMNIEJSZENIE OPŁAT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        icon: <FaChartArea size={100} color={'#C29477'} />
    },
    {
        key: 2,
        title: 'ZMIANA ZARZĄDU',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        icon: <MdOutlinePublishedWithChanges size={100} color={'#C29477'} />
    }
];

const NewsletterPage = () => {
    return <Box padding={16}>
        <VStack
            spacing={4}>
            <Heading>DOŁĄCZ DO SĄDIEDZKIEGO NEWSLETTERA</Heading>
            <Box
                padding={8}
                borderLeft='4px'
                borderBottom='4px'
                borderColor={'orange'}>
                <Stack direction={{base: 'column', lg: 'row'}}
                    spacing={8}>
                    {points.map(point => <NewsletterPoint key={point.key} title={point.title} description={point.description} icon={point.icon} />)}
                </Stack>
                <Center>
                    <Box
                        w={{ base: '72%', lg: '24%' }}
                        h={16}
                        bg={'white'}
                        position={'relative'}
                        bottom={-16}>
                        <Flex
                            w={'full'} h={'full'}
                            alignContent={'center'}
                            justifyContent={'center'}>
                            <Button
                                color={'white'}
                                bg={'orange'}>
                                Dołączam!
                            </Button>
                        </Flex>
                    </Box>
                </Center>
            </Box>
        </VStack>
    </Box>;
};

const NewsletterPoint = ({ title, description, icon }: NewsletterPointData) => (
    <Box 
        paddingBottom={4}>
        <VStack spacing={4}>
            {icon}
            <Heading as={'h2'} size={'md'}>{title}</Heading>
            <Text align={"center"}
                paddingX={4}>
                {description}
            </Text>
        </VStack>
    </Box>
);

export default NewsletterPage;