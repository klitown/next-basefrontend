
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Button, Input, Link, Center } from '@chakra-ui/react';
import { FiKey, FiUserCheck } from "react-icons/fi";
import BaseImage from "../public/images/base.png";
import { Formik } from 'formik';
import * as Yup from "yup";
import authService from '../utils/services/auth.service';
import { useEffect } from 'react';

const Login = ({setUser}) => {

    const user = authService.getCurrentUser();
    const router = useRouter();
    const handleButtonRegister = () => {
        router.push("/register");
    }

    useEffect(() => {
        if (user){
            router.push('inicio');
        }
    }, []);

    const onSubmit = (values) => {
        authService.login(values.email, values.password).then(
            () => {
                setUser(true); // Setear el USER en _app.js!
                router.push('/inicio');
            }
        )
    };

    const initialValues = {
        email: "",
        password: "",

    };

    const validationSchema = Yup.object({
        email: Yup.string().required(),
        password: Yup.string().required()
    });

    return (
        <Box w="100vw" minHeight="100vh">
            <Flex flexWrap="wrap">
                <Flex w={['100%', '100%', '100%', '60%']} h="100vh" justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                        Iniciar sesión
                    </Text>
                    <Box>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {props => (
                                <Box onSubmit={props.handleSubmit}
                                    m="5"
                                    p="5"
                                    as="form">
                                    <Input placeholder='Usuario' marginTop="5" backgroundColor="gray.100"
                                        name="email" value={props.values.email} onChange={props.handleChange}
                                    />
                                    <Input placeholder='Contraseña' marginTop="5" backgroundColor="gray.100"
                                        type="password" name="password" value={props.values.password} onChange={props.handleChange}
                                    />
                                    <Center>
                                        <Button fontSize="xl"
                                            marginTop="10"
                                            type='submit'
                                            size='lg'
                                            width="530px"
                                            borderRadius="10px"
                                            backgroundColor="blue.600"
                                            color="whiteAlpha.900"
                                            leftIcon={<FiKey />}
                                            _hover={{
                                                background: "blue.400",
                                                color: "white.100",
                                            }}
                                        >
                                            Ingresar
                                        </Button>
                                    </Center>
                                </Box>
                            )}
                        </Formik>
                    </Box>

                    <Box marginTop="10">
                        <Link> <Text fontSize="22px" opacity="0.7"> Olvidé mi contraseña</Text> </Link>
                    </Box>
                    <Box h="100px" borderTop='1px' borderColor='gray.200' marginTop="70px">
                        <Button onClick={() => handleButtonRegister()}
                            fontSize="xl"
                            marginTop="10"
                            size='lg'
                            width="530px"
                            borderRadius="10px"
                            backgroundColor="blue.100"
                            color="black.900"
                            leftIcon={<FiUserCheck />}
                            _hover={{
                                background: "blue.100",
                                color: "blue.600",
                            }}
                        >
                            ¿No eres usuario? <Text fontWeight="bold">&nbsp;Regístrate aquí</Text>
                        </Button>
                    </Box>
                </Flex>
                {/* END FIRST FLEX */}

                <Box w="40%" display={['none', 'none', 'none', 'initial']} position='relative'>
                    <Image src={BaseImage} alt='Enterprise LOGO' quality="100" layout='fill' priority='true' />
                </Box>
            </Flex>
        </Box>
    );
}

export default Login;