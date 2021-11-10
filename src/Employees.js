import { ChevronDownIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	HStack,

	Center,
	Stack,
	Text,
	Menu,
	Avatar,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDashboardLine, RiArrowDropUpFill, RiArrowDropDownFill } from 'react-icons/ri'
import { HiOutlineLogout } from 'react-icons/hi'
import { BiCalendar, BiTimeFive, BiLogIn } from 'react-icons/bi'
import { BsThreeDots, BsPeople } from 'react-icons/bs'
import { VscBellDot } from 'react-icons/vsc'
import { AiOutlineAppstore } from 'react-icons/ai'
import { IoIosPeople, IoIosCall, IoIosMail, IoIosPersonAdd } from 'react-icons/io'
import {
	Divider,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/layout'
function Employees() {

	return (
		<Box>
			<Flex >
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
								<Link to="">
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


				<Box bg='#97211D' h='200vh' pt='5' overflow='hidden'>
					<Flex alignItems='center' justifyContent='space-between'>
						<Text mt='10' fontSize='xl' color='white' fontSize='2xl' fontWeight='bold'>
							EMPLOYEES
						</Text>

					</Flex>
					<Flex ml='220' h='auto'>
						<Box ml='10' bg='white' mr='52' p='5' borderRadius='xl' >

							<HStack justifyContent='space-between' p='7'>
								<HStack spacing='5'>
									<Menu>

										<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7' as={Button} rightIcon={<ChevronDownIcon />}>
											<Flex alignItems='center'>
												<BsPeople />All
										</Flex>
										</MenuButton>

										<MenuList>
											<MenuItem>Download</MenuItem>
											<MenuItem>Create a Copy</MenuItem>
											<MenuItem>Mark as Draft</MenuItem>
											<MenuItem>Delete</MenuItem>
											<MenuItem>Attend a Workshop</MenuItem>
										</MenuList>
									</Menu>
									<Menu>
										<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7' as={Button} rightIcon={<ChevronDownIcon />}>All Desgination
										</MenuButton>
										<MenuList>
											<MenuItem>Download</MenuItem>
											<MenuItem>Create a Copy</MenuItem>
											<MenuItem>Mark as Draft</MenuItem>
											<MenuItem>Delete</MenuItem>
											<MenuItem>Attend a Workshop</MenuItem>
										</MenuList>
									</Menu>
								</HStack>
								<Menu>
									<Box>
										<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7' as={Button} rightIcon={<ChevronDownIcon />}>Export Report
										</MenuButton>
									</Box>
									<MenuList>
										<MenuItem>Download</MenuItem>
										<MenuItem>Create a Copy</MenuItem>
										<MenuItem>Mark as Draft</MenuItem>
										<MenuItem>Delete</MenuItem>
										<MenuItem>Attend a Workshop</MenuItem>
									</MenuList>
								</Menu>
							</HStack>

							<Box pt='10' h='auto'>
								<HStack w='1000px' pl='24' pr='10' fontSize='sm' fontWeight='bold' justifyContent='space-between'>
									<Text>NAMES</Text>
									<Text>DESIGNATION</Text>
									<Text >CONTACT INFO</Text>
									<Text pr='28'>ACTION</Text>

								</HStack>

								<Wrap pt='10'>
									<Divider />
									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack ml='20'>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap >

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap>

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap>

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap>

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap >

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap>

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>
								<Wrap>

									<WrapItem>
										<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
										<HStack pl='10' spacing='40' justifyContent='space-around' w='800px' alignItems='center'>
											<Box>
												<Text fontWeight='bold'>Dennis</Text>

											</Box>
											<Text fontSize='xs' fontWeight='medium'>Web designer</Text>

											<HStack>
												<IoIosCall size='24' />
												<IoIosMail size='24' />
											</HStack>
											<HStack>
												<BsThreeDots size='24' />
											</HStack>
										</HStack>

									</WrapItem>
									<Divider pt='5' />
								</Wrap>


							</Box>
						</Box>

					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
export default Employees;