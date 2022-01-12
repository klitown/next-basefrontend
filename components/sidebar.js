import React, { useState } from "react";
import {
    Avatar,
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Text,
    useColorModeValue,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    Button
} from "@chakra-ui/react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/router";
import authService from "../utils/services/auth.service";

export default function Sidebar({ children, setUser }) {

    const sidebar = useDisclosure();
    const router = useRouter();
    const onNavigate = (path) => {
        router.push(`/${path}`);
    }
    const onCerrarSesion = () => {
        authService.logout();
        setUser(false); // Setear el USER en _app.js!
        router.push('/login');
    }

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                mx="2"
                rounded="md"
                py="3"
                cursor="pointer"
                color="blue.700"
                _hover={{
                    bg: "blue.100",
                    color: "whiteAlpha.900",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="3"
                        mt="0"
                        boxSize="4"
                        _groupHover={{
                            color: "black.300",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white.600"
            borderColor="blackAlpha.300"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">

                <Text fontSize="4xl" ml="2" color="blue.300" fontWeight="semibold">
                    Enterprise Solutions
                </Text>

            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="blue.600"
                aria-label="Main sidebar"
            >
                <NavItem onClick={() => onNavigate('inicio')} icon={MdHome}> Administración</NavItem>
                <NavItem onClick={() => onNavigate('test')} icon={FaRss}> Módulo 2 </NavItem>
                <NavItem onClick={() => onNavigate('home')} icon={HiCollection}> Módulo 2 </NavItem>
                <NavItem onClick={() => onNavigate('home')} icon={FaClipboardCheck}> Módulo 3 </NavItem>
            </Flex>
        </Box>
    );

    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            <SidebarContent display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="top"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg="white"
                    borderBottomWidth="1px"
                    borderColor="blackAlpha.300"
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />
                    <Box w="96" />

                    <Flex align="center">
                        <Menu>
                            <MenuButton as={Button} colorScheme='white'>
                                <Avatar
                                    ml="0"
                                    mr="2"
                                    size="sm"
                                    name="anubra266"
                                    src="https://avatars.githubusercontent.com/u/30869823?v=4"
                                    cursor="pointer"
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem>Payments </MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title='Help'>
                                    <MenuItem>Docs</MenuItem>
                                    <MenuItem onClick={() => onCerrarSesion()}>Cerrar sesión</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                <Box as="main" p="4">
                    <Box h="96">
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}