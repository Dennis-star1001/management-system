
import { Box, Button, Flex, FormControl, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack, Img } from '@chakra-ui/react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
    
    return (
        <Box>
            <Flex justifyContent='center' alignItems='center'>
                <Box>
                    <Text maxW='64'>Punctuality as a function of time with respect to date is a very essential requirement in every organization.</Text>
                </Box>
                <Box className='main-svg' h='200' w='200' bg="red">
                </Box>
            </Flex>
        </Box>
    );
}

export default App;
