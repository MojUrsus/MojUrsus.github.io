import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Link,
    Heading
} from '@chakra-ui/react';

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        color='#FAFAFA'
        _hover={{
            textDecoration: 'none',
            bg: '#505d6b',
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navigation() {
    return (
        <>
            <Box bg='#343C45' px={10}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <NavLink><Heading as='h3' size='md'>MÓJ URSUS</Heading></NavLink>
                </Flex>
            </Box>
        </>
    );
}