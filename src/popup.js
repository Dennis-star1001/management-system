import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";


const popup = () => {
  return (
    <Box>
      <Flex justifyContent='center' h='100vh' w='100vw' bg='#97211d' alignItems='center' color='#3c3c3c' >

        <FormControl d='flex' id="email" w='auto' borderRadius='10' bg='white' p='20'>
         

          <Box>
          <HStack pb='10'>
            <Avatar name="Dan Abrahmov"  src="https://bit.ly/dan-abramov" />
            <Box>
              <Text fontSize='xl' fontWeight='bold' color='black'>Daniel</Text>
              <Text color='black'>Daniel</Text>
              <Button color='black' h='7' bg='#edecec' _hover={{bg: '#edecec'}}>Upload</Button>
              </Box>
          </HStack>
            <HStack spacing='12'>
              <Box d='block'>
                <FormLabel textAlign='left'>Full Name</FormLabel>
                <Input type="text" w='255px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>E-mail</FormLabel>
                <Input type="email" w='255px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
            </HStack>
            <HStack spacing='12'>
              <Box d='block'>
                <FormLabel textAlign='left'>Designation</FormLabel>
                <Input type="text" w='152px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>Staff ID</FormLabel>
                <Input type="text" w='152px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>Phone Number</FormLabel>
                <Input type="number" w='152px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
            </HStack>
            <HStack spacing='10'>
              <Box d='block'>
                <FormLabel textAlign='left'>Date of Joining</FormLabel>
                <Input type="date" w='100px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>Date of Birth</FormLabel>
                <Input type="date" w='100px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>Nationality</FormLabel>
                <Input type="text" w='100px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
              <Box d='block'>
                <FormLabel textAlign='left'>State of Origin</FormLabel>
                <Input type="text" w='100px' h='7' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
              </Box>
            </HStack>
            <Box d='block'>
              <FormLabel textAlign='left'>Address</FormLabel>
              <Input type="text" minWidth='40' w='555px' h='20' _hover={{ borderColor: '#edecec' }} borderColor='#edecec' />
            </Box>
            <HStack spacing='5' justifyContent='right' pt='10'>
              <Link to='/Employees'>
              <Button color='black' h='7' bg='#edecec'>Close</Button>
              </Link>
              <Button color='white' h='7' bg='#97211d' _hover={{ color: 'black', bg: 'none', border: '1px solid #97211d' }}>Save Changes</Button>
            </HStack>
          </Box>
        </FormControl>

      </Flex>
    </Box>
  )
}
export default popup;