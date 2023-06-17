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
        color='white'
        _hover={{
            textDecoration: 'none',
            bg: 'gray.200',
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navigation() {
    return (
        <>
            <Box bg='gray.100' px={10}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <NavLink><Heading as='h3' size='md'>MÓJ URSUS</Heading></NavLink>
                </Flex>
            </Box>
        </>
    );
}