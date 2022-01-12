import {
    Avatar,
    Box,
    Collapse,
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
    Button,
    Divider
} from "@chakra-ui/react";
import { MdHome, MdKeyboardArrowRight, MdMenu, MdPriorityHigh, MdOutlineAttachMoney, MdOutlineBubbleChart, MdOutlineLoupe } from "react-icons/md";
import React from "react";
import { useRouter } from "next/router";
import authService from "../utils/services/auth.service";

export default function Sidebar({ children, setUser }) {
    const sidebar = useDisclosure();
    const router = useRouter();
    const integrations = useDisclosure();
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
                pl="4"
                py="3"
                cursor="pointer"
                color={useColorModeValue("inherit", "gray.400")}
                _hover={{
                    bg: useColorModeValue("gray.100", "gray.900"),
                    color: useColorModeValue("gray.900", "gray.200"),
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        _groupHover={{
                            color: useColorModeValue("gray.600", "gray.300"),
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
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">

                <Text
                    fontSize="3xl"
                    ml="2"
                    color="blue.500"
                    fontWeight="semibold"
                >
                    ENTERPRISE SOLUTIONS
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome} onClick={() => onNavigate('inicio')}>Inicio</NavItem>
                <Divider/>
                <NavItem icon={MdOutlineAttachMoney} onClick={() => onNavigate('inicio')}>Contrato</NavItem>
                <Divider/>
                <NavItem icon={MdOutlineBubbleChart} onClick={() => onNavigate('inicio')}>Permisos</NavItem>
                <Divider/>
                <NavItem icon={MdOutlineLoupe} onClick={() => onNavigate('inicio')}>Bonificaciones</NavItem>
                <Divider/>
                <NavItem icon={MdPriorityHigh} onClick={integrations.onToggle}>
                    Más información
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen && "rotate(90deg)"}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2">
                        Info 1
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Info 2
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Info 3
                    </NavItem>
                </Collapse>
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
                placement="left"
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
                    bg={useColorModeValue("white", "gray.800")}
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue("inherit", "gray.700")}
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<MdMenu />}
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
