import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	HStack,
	Avatar
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { AiOutlineAppstore } from 'react-icons/ai'
import { BiTimeFive, BiLogIn } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import {
	Grid,
	VStack,
} from '@chakra-ui/layout'
import { Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line, BarChart } from 'recharts';
import { motion } from 'framer-motion';
function Dashboard() {
	const data = [{ name: ['', '10th sept', '11th sept', '20th Aprill', '5th sept', '8th sept'], uv: 50, pv: 200, amt: 2400 }, { uv: 150, pv: 2400, amt: 2400 }, { uv: 200, pv: 2400, amt: 2400 }, { uv: 60, pv: 2400, amt: 2400 }, { uv: 100, pv: 2400, amt: 2400 }];
	const data2 = [{ name: ['', '10th sept', '11th sept', '20th Aprill', '5th sept', '8th sept'], uv: 50, pv: 2400, amt: 2400 }, { uv: 150, pv: 2400, amt: 2400 }, { uv: 200, pv: 2400, amt: 2400 }, { uv: 60, pv: 2400, amt: 2400 }, { uv: 100, pv: 2400, amt: 2400 }];
	const easing = [.6, -.05, .01, 0.99]
	const fadInUp = {
		initial: {
			x: 60,
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: .6,
				ease: easing

			}
		}
	}
	return (
		<motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
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

				<VStack justifyContent='center' ml='210px' bg='#97211D' px='10' pt='5' h='auto' w='100vw'>
					<Flex alignItems='center' justifyContent='space-between'>
						<Text mt='10' mr='900px' color='white' fontSize='2xl' fontWeight='bold'>
							DASHBOARD
						</Text>

					</Flex>
					<motion.div variants={fadInUp} >
						<Flex mt='10' justifyContent='space-between'>
							<Box w='100%'>
								<HStack spacing='40' justifyContent='space-around'>
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
								</HStack>

							</Box>

						</Flex>
					</motion.div>
					<motion.div variants={fadInUp} >
						<HStack pt='5' justifyContent='center' spacing='16'>

							<Box
								w='100%'
								bg='white'
								p='3'
								borderRadius='lg'
								borderColor='white'
							>
								<VStack>
									<HStack justifyContent='space-between' w='3xl'>
										<Text fontWeight='bold' color='#3c3c3c'>Avg Clock In</Text>
										<Text fontWeight='bold' color='#3c3c3c'>Avg Clock In</Text>
									</HStack>
									<HStack>

										<LineChart width={400} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

											<Line type="monotone" dataKey="uv" stroke="#97211D" />
											<CartesianGrid stroke="white" strokeDasharray="5 5" />
											<XAxis dataKey="name" />
											<YAxis />
										</LineChart>
										<LineChart width={400} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
											<Line type="monotone" dataKey="uv" stroke="#97211D" />
											<CartesianGrid stroke="white" strokeDasharray="5 5" />
											<XAxis dataKey="name" />
											<YAxis />
										</LineChart>
									</HStack>
								</VStack>
							</Box>

						</HStack>
						<Box bg='#a72823' mt='5' p='5' borderRadius='xl'>
							<Stack justifyContent='space-between' w='3xl'>
								<Text fontWeight='bold' p='5' color='white'>Avg Working hour</Text>
							</Stack>
							<BarChart width={900} height={200} data={data2} >
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="pv" fill="#8884d8" />
								<Bar dataKey="uv" fill="#82ca9d" />
							</BarChart>
						</Box>
					</motion.div>
					<Box pt='5'>
					
					<Flex flexDirection='column' bg='white' pl='16' pt='5' pb='5' pr='16' borderRadius='xl'>
					<Text fontWeight='bold' align='left' color='black'>PRESENT EMPLOYEES</Text>
					<HStack spacing='12' pt='5'>
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
					</HStack>
					<HStack spacing='12' pt='5'>
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
						<Avatar name="Dan Abrahmov" p='2' size='24' src="https://bit.ly/dan-abramov" />
					</HStack>
				</Flex>
				</Box>
				</VStack>
				
			</Flex>
		</motion.div>
	)
}
export default Dashboard;