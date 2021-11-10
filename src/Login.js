
import { Box, Button, Flex, FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from '@chakra-ui/react';
import './App.css';
import { BsFillPersonFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <Box bg='#97211D' h='100vh'>
            <Flex h='100vh' justifyContent='center' alignItems='center'>
                <Box border='1px solid white' borderRadius='xl'>

                    <FormControl p='10'>
                        <Text textAlign='center' fontWeight='bold' mb='10' color='white'>ADMIN LOGIN</Text>

                        <InputGroup w='48'>

                            <InputLeftElement
                                pointerEvents="none"
                                Icon mt='3' h='5' color='white' as={BsFillPersonFill}
                            />

                            <Input borderRadius='none' fontSize='sm' borderBottom='1px solid white' border='none' type="text" placeholder="Username" />
                        </InputGroup>

                        <InputGroup w='48'>

                            <InputLeftElement
                                pointerEvents="none"
                                Icon mt='3' h='5' color='white' as={BiLock}




                            />
                            <InputRightElement
                                pointerEvents="none"
                                Icon mt='3' h='5' color='white' as={BsFillEyeSlashFill}



                            />

                            <Input borderRadius='none' fontSize='sm' borderBottom='1px solid white' border='none' type="password" placeholder="Password" />
                        </InputGroup>
                        <VStack justifyContent='center' pt='5'>
                            <Link to='/Dashboard'>
                                <Button bg='white' w='48' color='#97211D' >LOGIN</Button>
                            </Link>
                            <Button bg='none' h='2' _hover={{ bg: 'none' }} color='white' fontWeight='thin' fontSize='xx-small'>FORGET PASSWORD</Button>
                        </VStack>
                    </FormControl>
                </Box>
            </Flex>
        </Box>
    );
}

export default Login;
