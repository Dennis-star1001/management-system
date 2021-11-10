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
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { RiDashboardLine, RiSearchLine, RiArrowDownSFill } from 'react-icons/ri'
import { TiShoppingCart } from 'react-icons/ti'
import { FiShoppingBag, FiSettings } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import { BiCalendar, BiTimeFive, BiLogIn } from 'react-icons/bi'
import { VscBellDot } from 'react-icons/vsc'
import { IoIosPeople } from 'react-icons/io'
import { GrAppsRounded } from 'react-icons/gr'
import {
	Divider,
	SimpleGrid,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/layout'
import { CartesianGrid, LineChart, XAxis } from 'recharts';
import { Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
function Dashboard() {
	const data = [
		{
			name: 'food',
			uv: -2000,
			pv: -2013,
			amt: -4500,
			bmk: -4301,
			time: 1,
			uvError: [100, 50],
			pvError: [110, 20],
		},
		{
			name: 'cosmetic',
			uv: 3300,
			pv: 2000,
			amt: 6500,
			bmk: 2000,
			time: 2,
			uvError: 120,
			pvError: 50,
		},
		{
			name: 'storage',
			uv: 3200,
			pv: 1398,
			amt: 5000,
			bmk: 3000,
			time: 3,
			uvError: [120, 80],
			pvError: [200, 100],
		},
		{
			name: 'digital',
			uv: 2800,
			pv: 2800,
			amt: 4000,
			bmk: 1500,
			time: 4,
			uvError: 100,
			pvError: 30,
		},
	]

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
										<IoIosPeople size='25' />
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold'>TOTAL STAFF</Text>
											<Text fontWeight='bold'>106</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>

							<Flex p='4' borderRadius='lg' bg='gray.50' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25' />
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold'>STAFFS PRESENT</Text>
											<Text fontWeight='bold'>65</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
							<Flex p='4' borderRadius='lg' bg='gray.50' h='100%' w='52'>
								<Stack spacing='4' w='100%'>
									<Flex justifyContent='space-between'>
										<IoIosPeople size='25' />
										<VStack justifyContent='right'>
											<Text fontSize='xs' fontWeight='bold'>STAFFS ABSENT</Text>
											<Text fontWeight='bold'>44</Text>
										</VStack>
									</Flex>
								</Stack>
							</Flex>
						</Flex>
						<Box
							w='100%'
							border='1px'
							borderRadius='lg'
							borderColor='gray.300'
							bg='White'
						>

							<LineChart
								width={500}
								height={400}
								data={data}
								margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
								<XAxis dataKey='name' />
								<Tooltip />
								<CartesianGrid stroke='#f5f5f5' />
								<Line
									type='monotone'
									dataKey='uv'
									stroke='#ff7300'
									yAxisId={0}
								/>
								<Line
									type='monotone'
									dataKey='pv'
									stroke='#387908'
									yAxisId={1}
								/>
							</LineChart>
						</Box>
					</Box>

				</Flex>
			</Box>

		</Flex>

	)
}
export default Dashboard;