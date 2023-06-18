import {
    Box,
    chakra,
    Container,
    HStack,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
} from '@chakra-ui/react';
import { BsFacebook, BsDiscord, BsHeartFill } from 'react-icons/bs';
import { ReactNode } from 'react';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            w='full'
            bg={'gray.100'}
            color={'white'}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <VStack>
                    <Text>© 2023 Osiedle Mój Ursus</Text>
                    <HStack fontSize={'xs'}
                        color={'gray.200'}>
                        <Text>Made with</Text>
                        <BsHeartFill color='red' />
                        <Text>by Damian Ubowski</Text>
                    </HStack>
                </VStack>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Facebook'} href={'#'}>
                        <BsFacebook />
                    </SocialButton>
                    <SocialButton label={'Discord'} href={'#'}>
                        <BsDiscord />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}