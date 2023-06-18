import { Heading, VStack, HStack, Box, Image, Text, Button, Flex } from "@chakra-ui/react";

type KeyPointData =
    {
        key: number;
        title: string;
        description: string;
        image: string;
    };

const points: KeyPointData[] = [
    {
        key: 0,
        title: '1000 ZŁ ROCZNIE MNIEJ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        image: "money.jpg"
    },
    {
        key: 1,
        title: 'RZETELNY AUDYT WYDATKÓW',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        image: "statistics.jpg"
    },
    {
        key: 2,
        title: 'ZMIANA ZARZĄDU',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        image: "agreement.jpg"
    }
];

const KeyPointsPage = () => {
    return <Box
        id='keypoints-page'
        padding={20}>
        <VStack w='full' spacing={10}>
            <Flex w='full' alignContent={'flex-start'}>
                <Heading>ZATRZYMAJMY WZROST OPŁAT!</Heading>
            </Flex>
            <HStack>
                {points.map(point => <KeyPoint key={point.key} title={point.title} description={point.description} image={point.image} />)}
            </HStack>
        </VStack>
    </Box>;
};

const KeyPoint = ({ title, description, image } : KeyPointData) => (
    <Box color={'white'}
        bg={'gray.100'}
        paddingBottom={5}>
        <VStack spacing={4}>
            <Image
                h='full'
                src={image}
                fallbackSrc='https://via.placeholder.com/1440x1080'
                objectFit='cover' />
            <Heading as={'h2'} size={'md'}>{title}</Heading>
            <Text align={"center"}
                paddingX={5}>
                {description}
            </Text>
            <Button color={'white'} bg={'orange'}>Dowiedz się więcej</Button>
        </VStack>
    </Box>
);

export default KeyPointsPage;