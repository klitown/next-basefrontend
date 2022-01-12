import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Spacer,
    Avatar
} from "@chakra-ui/react";

import { MdSettingsPhone, MdEmail, MdLocationOn, MdReceipt, MdPrivacyTip } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const UserCard = () => {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="100%"
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >
                <Image
                    w="full"
                    h={56}
                    fit="cover"
                    objectPosition="center"
                    src="https://vancouver.ca/images/cov/feature/corp-plan-landing.jpg"
                    alt="avatar"

                />

                <Flex justify="center" px={6} py={3} bg="gray.900">
                    <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                        SENADIS PRO - FUNCIONARIOS
                    </chakra.h1>
                </Flex>

                <Box py={4} px={6}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Admin Administrador
                    </Text>

                    <Flex justify='center' mt="5">
                        <Avatar
                            size='xl'
                            name='Kola Tioluwani'
                            src='https://bit.ly/tioluwani-kolawole'
                        />
                    </Flex>

                    <Flex mt="10" flexWrap='wrap' flexDirection={{ base: 'column', sm: 'column', md: 'column', xl: 'row' }}>
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '4' }}>
                            <Icon
                                as={BsFillBriefcaseFill}
                                as={BsFillBriefcaseFill}
                                h={6}
                                w={6}
                                mr={2}
                            />
                            <Text px={2} fontSize="lg">
                                Funcionario de Senadis
                            </Text>
                        </Box>
                        <Spacer />
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '4' }}>
                            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                            <Text px={2} fontSize="lg">
                                Asunción
                            </Text>
                        </Box>
                        <Spacer />
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '4' }}>
                            <Icon as={MdEmail} h={6} w={6} mr={2} />

                            <Text px={2} fontSize="lg">
                                admin@enterprise.com.py
                            </Text>
                        </Box>
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '7' }}>
                            <Icon as={MdSettingsPhone} h={6} w={6} mr={2} />

                            <Text px={2} fontSize="lg">
                                0983 712 421
                            </Text>
                        </Box>
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '7' }}>
                            <Icon as={MdReceipt} h={6} w={6} mr={2} />

                            <Text px={2} fontSize="lg">
                                3.341.927
                            </Text>
                        </Box>
                        <Box w={{ base: '100%', sm: '100%', md: '100%', xl: '33.3%' }} mt={{ sm: '7' }}>
                            <Icon as={MdPrivacyTip} h={6} w={6} mr={2} />

                            <Text px={2} fontSize="lg">
                                Info
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default UserCard;