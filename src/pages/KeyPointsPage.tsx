import { Heading, VStack, Box, Image, Text, Button, Stack } from "@chakra-ui/react";

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
    return (
        <Box padding={16}>
            <VStack spacing={8}>
                <Heading>
                    ZATRZYMAJMY WZROST OPŁAT!
                </Heading>
                <Stack direction={{base: 'column', lg: 'row'}}>
                    {points.map(point => <KeyPoint key={point.key} title={point.title} description={point.description} image={point.image} />)}
                </Stack>
            </VStack>
        </Box>
    );
};

const KeyPoint = ({ title, description, image } : KeyPointData) => (
    <Box color={'white'}
        bg={'gray.100'}
        paddingBottom={4}>
        <VStack spacing={4}>
            <Image
                h='full'
                src={image}
                fallbackSrc='https://via.placeholder.com/1440x1080'
                objectFit='cover' />
            <Heading as={'h2'} size={'md'}>{title}</Heading>
            <Text align={"center"}
                paddingX={4}>
                {description}
            </Text>
            <Button color={'white'} bg={'orange'}>Dowiedz się więcej</Button>
        </VStack>
    </Box>
);

export default KeyPointsPage;