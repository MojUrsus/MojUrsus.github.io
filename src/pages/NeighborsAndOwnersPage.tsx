import { Box, Heading, Image, VStack, Text, Stack } from "@chakra-ui/react";

const NeighborsAndOwnersPage = () => {
    return <Box
        id='neighborsowners-page'
        padding={16}
        color={'white'}
        bg={'gray.100'}>
        <VStack spacing={4}>
            <Heading>SĄSIEDZI I WŁAŚCICIELE</Heading>
            <Stack direction={{base: 'column-reverse', lg: 'row'}}
                spacing={8}>
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
            </Stack>
        </VStack>
    </Box>;
};

export default NeighborsAndOwnersPage;