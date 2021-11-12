import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { AiOutlineAppstore } from 'react-icons/ai'
import { BiTimeFive, BiLogIn } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import {
	VStack,
} from '@chakra-ui/layout'

function Dashboard() {

	return (

		<Flex>
			<Box pos='fixed' w='220px' h='100%' bg='gray.50' pt='10'>
				<Box
					mx='7'
					h='100%'
					d='flex'
					flexDirection='column'
					justifyContent='space-between'>
					<Box>
						<Box mt='10'>
							<Link to="/Dashboard">
								<Button
									w='40'
									pl='2'
									size='lg'
									color='#97211D'
									py='2'
									bg='none'
									_hover={{
										color: 'white',
										bg: '#97211D',
										borderRadius: 'lg',
									}}>
									<Flex alignItems='center'>
										<AiOutlineAppstore size='20' />
										<Text ml='2' fontSize='md'>
											Dashboard
										</Text>
									</Flex>
								</Button>
							</Link>
							<Link to="/Employees">
								<Button
									w='40'
									pl='2'
									size='lg'
									color='#97211D'
									py='2'
									bg='none'
									_hover={{
										color: 'white',
										bg: '#97211D',
										borderRadius: 'lg',
									}}>
									<Flex alignItems='center'>
										<IoIosPeople size='20' />
										<Text ml='2' fontSize='md'>
											Employees
										</Text>
									</Flex>
								</Button>
							</Link>
							<Link to="/Attendance">
								<Button
									w='40'
									pl='2'
									size='lg'
									color='#97211D'
									py='2'
									bg='none'
									_hover={{
										color: 'white',
										bg: '#97211D',
										borderRadius: 'lg',
									}}>
									<Flex alignItems='center'>
										<BiTimeFive size='20' />
										<Text ml='2' fontSize='md'>
											Attendance
										</Text>
									</Flex>
								</Button>
							</Link>
							<Link to="/Login">
								<Button
									w='40'
									pl='2'
									size='lg'
									color='#97211D'
									py='2'
									bg='none'
									_hover={{
										color: 'white',
										bg: '#97211D',
										borderRadius: 'lg',
									}}>
									<Flex alignItems='center'>
										<BiLogIn size='20' />
										<Text ml='2' fontSize='md'>
											Logout
										</Text>
									</Flex>
								</Button>
							</Link>


						</Box>
					</Box>


				</Box>
			</Box>

			<Box ml='210px' bg='#97211D' px='10' pt='5' h='100vh' w='100vw'>
				<Flex alignItems='center' justifyContent='space-between'>
					<Text fontSize='xl' color='white' fontWeight='bold'>
						Dashboard
					</Text>

				</Flex>
				<Flex mt='14' justifyContent='space-between'>
					<Box w='100%'>
						<Flex justifyContent='space-around'>
							<Flex p='4' borderRadius='lg' bg='gray.50' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25' color='black' />
										<VStack justifyContent='right' color='black'>
											<Text fontSize='xs' fontWeight='bold'>TOTAL STAFF</Text>
											<Text fontWeight='bold'>106</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>

							<Flex p='4' borderRadius='lg' bg='gray.50' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25' color='black' />
										<VStack justifyContent='right' color='black'>
											<Text fontSize='xs' fontWeight='bold'>STAFFS PRESENT</Text>
											<Text fontWeight='bold'>65</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
							<Flex p='4' borderRadius='lg' bg='gray.50' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople color='black' size='25' />
										<VStack justifyContent='right' color='black'>
											<Text fontSize='xs' fontWeight='bold'>STAFFS ABSENT</Text>
											<Text fontWeight='bold'>44</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
						</Flex>

					</Box>

				</Flex>
				<Box>

				</Box>
			</Box>
		
		</Flex>

	)
}
export default Dashboard;