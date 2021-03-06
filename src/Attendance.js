import { ChevronDownIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	HStack,
	Stack,
	Text,
	Menu,
	Avatar,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiArrowDropUpFill, RiArrowDropDownFill } from 'react-icons/ri'
import {  BiTimeFive, BiLogIn } from 'react-icons/bi'
import { IoIosPeople, IoIosCall, IoIosMail } from 'react-icons/io'
import { AiOutlineAppstore } from 'react-icons/ai'
import {
	Divider,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/layout'
function Attendance() {
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
							<Link to="/">
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


			<Box bg='#97211D' pt='5' h='auto' overflow='hidden'>
				<Flex alignItems='center' justifyContent='space-between'>
				<Text mt='10' ml='300px' pb='10' color='white' fontSize='2xl' fontWeight='bold'>
							ATTENDANCE
						</Text>

				</Flex>
				<Flex ml='400' justifyContent='center'>
					<Box ml='10' w='200%' bg='white' mr='52' p='5' borderRadius='xl' >
						<Flex justifyContent='space-around'>
							<Flex p='4' borderRadius='lg' bg='#FFF5F4' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25'  color='black'/>
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold' color='black'>TOTAL STAFF</Text>
											<Text fontWeight='bold' color='black'>106</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>

							<Flex p='4' borderRadius='lg' bg='#FFF5F4' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25'  color='black'/>
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold'  color='black'>STAFFS PRESENT</Text>
											<Text fontWeight='bold' color='black'>65</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
							<Flex p='4' borderRadius='lg' bg='#FFF5F4' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25'  color='black'/>
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold'  color='black'>STAFFS ABSENT</Text>
											<Text fontWeight='bold'  color='black'>44</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
						</Flex>
						<HStack justifyContent='space-between' p='7'>
							<HStack spacing='5'>
								<Menu>
									<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7'  color='black' as={Button} rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
									<MenuList>
										<MenuItem>Download</MenuItem>
										<MenuItem>Create a Copy</MenuItem>
										<MenuItem>Mark as Draft</MenuItem>
										<MenuItem>Delete</MenuItem>
										<MenuItem>Attend a Workshop</MenuItem>
									</MenuList>
								</Menu>
								<Menu>
									<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7'  color='black' as={Button} rightIcon={<ChevronDownIcon />}>Today</MenuButton>
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
								<MenuButton h='7' bg='none' _hover={{ bg: 'none' }} border='2px solid #EDF2F7'  color='black' as={Button} rightIcon={<ChevronDownIcon />}>Export Report</MenuButton>
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
							
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }}>
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
						
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7' _hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>
							<Wrap pt='5' borderTop='1px solid #edf2f7'_hover={{ cursor: 'pointer', bg: '#FFF5F4' }} >
								<WrapItem>
									<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									<Flex pl='5' justifyContent='space-between' w='900px' alignItems='center'>
										<Box>
											<Text fontWeight='bold'  color='black'>Dennis</Text>
											<Text fontSize='xs' fontWeight='medium'  color='black'>Web designer</Text>
										</Box>
										<HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropDownFill size='32'  />
												<Text>07:34</Text>
											</HStack>
											<HStack color='#A0DE3B'>
												<RiArrowDropUpFill size='32'/>
												<Text>16:26</Text>
											</HStack>
										</HStack>
										<HStack>
											<IoIosCall size='24'  color='black'/>
											<IoIosMail size='24'  color='black'/>
										</HStack>
									</Flex>

								</WrapItem>
								<Divider pt='5' />
							</Wrap>

						</Box>
					</Box>

				</Flex>
			</Box>
		</Flex>

	)
}
export default Attendance;