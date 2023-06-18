import { Box, Flex, HStack, Heading, Image, VStack, Text } from "@chakra-ui/react";

const NeighborsAndOwnersPage = () => {
    return <Box
        id='neighborsowners-page'
        padding={20}
        color={'white'}
        bg={'gray.100'}>
        <VStack
            w='full'
            spacing={3}>
            <Flex w='full' alignContent={'flex-start'}>
                <Heading>SĄSIEDZI I WŁAŚCICIELE</Heading>
            </Flex>
            <HStack
                w='full'
                spacing={7}>
                <Image
                    h='full'
                    src='neighbors.jpg'
                    fallbackSrc='https://via.placeholder.com/530x280'
                    objectFit='cover' />
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero. Ullamcorper dignissim cras tincidunt lobortis feugiat. Elementum nibh tellus molestie nunc non blandit massa. Tellus in metus vulputate eu scelerisque. Ullamcorper eget nulla facilisi etiam dignissim diam. Aliquam purus sit amet luctus venenatis. Mauris pharetra et ultrices neque ornare. Montes nascetur ridiculus mus mauris vitae ultricies. Facilisis volutpat est velit egestas dui id ornare.
                    <br />
                    <br />
                    Ullamcorper eget nulla facilisi etiam dignissim diam. Aliquam purus sit amet luctus venenatis. Mauris pharetra et ultrices neque ornare. Montes nascetur ridiculus mus mauris vitae ultricies. Facilisis volutpat est velit egestas dui id ornare.
                </Text>
            </HStack>
        </VStack>
    </Box>;
};

export default NeighborsAndOwnersPage;