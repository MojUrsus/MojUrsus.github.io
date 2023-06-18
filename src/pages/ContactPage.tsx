import { Box, SimpleGrid, Heading, Input, VStack, Text, FormControl, FormLabel, Switch, Button } from '@chakra-ui/react';

const ContactPage = () => {
    return <Box
        id='contact-page'
        padding={20}
        color={'white'}
        bg='gray.100'
        h={'full'}>
        <SimpleGrid columns={2} spacing={20}>
            <VStack spacing={7}>
                <Heading>Dołącz do społeczności poinformowanych sąsiadów</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero. Ullamcorper dignissim cras tincidunt lobortis feugiat. Elementum nibh tellus molestie nunc non blandit massa. Tellus in metus vulputate eu scelerisque. Ullamcorper eget nulla facilisi etiam dignissim diam. Aliquam purus sit amet luctus venenatis. Mauris pharetra et ultrices neque ornare. Montes nascetur ridiculus mus mauris vitae ultricies. Facilisis volutpat est velit egestas dui id ornare.
                </Text>
            </VStack>
            <VStack spacing={2}>
                <Input placeholder='Imię *' bg={'white'} color={'gray.100'}></Input>
                <Input placeholder='Nazwisko *' bg={'white'} color={'gray.100'}></Input>
                <Input placeholder='Email *' bg={'white'} color={'gray.100'} type='email'></Input>
                <FormControl display='flex' alignItems='center' isRequired>
                    <Switch id='im-owner' paddingRight={3}/>
                    <FormLabel htmlFor='im-owner' mb='0'>
                        jestem właścicielem
                    </FormLabel>
                </FormControl>
                <FormControl display='flex' alignItems='center' isRequired>
                    <Switch id='im-tenant' paddingRight={3} />
                    <FormLabel htmlFor='im-tenant' mb='0'>
                        jestem najemcą
                    </FormLabel>
                </FormControl>
                <FormControl display='flex' alignItems='center' isRequired>
                    <Switch id='terms-and-conditions-agreement' paddingRight={3} />
                    <FormLabel htmlFor='terms-and-conditions-agreement' mb='0'>
                        akceptuję requlamin
                    </FormLabel>
                </FormControl>
                <Button
                    color={'white'}
                    bg={'orange'}
                    alignSelf={'start'}>
                    Dołączam!
                </Button>
                <Text fontSize={'xs'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero. Ullamcorper dignissim cras tincidunt lobortis feugiat. Elementum nibh tellus molestie nunc non blandit massa. Tellus in metus vulputate eu scelerisque. 
                </Text>
            </VStack>
        </SimpleGrid>
    </Box>;
};

export default ContactPage;