// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Stack,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     Textarea,
//     useToast
// } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
// import { updateProduct } from '../utils/operations';

// export default function UpdateProduct() {

//     const [lat, setLat] = useState(null);
//     const [lng, setLng] = useState(null);
//     const [status, setStatus] = useState(null);
//     const [data, setData] = useState("");
//     const toast = useToast();

//     useEffect(() => {
//         getLocation()
//     }, [!lat])

//     const handleData = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     };

//     const getLocation = () => {
//         if (!navigator.geolocation) {
//             setStatus('Geolocation is not supported by your browser');
//         } else {
//             setStatus('Locating...');
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setStatus(null);
//                 setLat(position.coords.latitude.toString());
//                 setLng(position.coords.longitude.toString());
//             }, () => {
//                 setStatus('Unable to retrieve your location');
//             });
//         }
//     }

//     // var currentTime = new Date();

//     // var currentOffset = currentTime.getTimezoneOffset();

//     // var ISTOffset = 330;   // IST offset UTC +5:30 

//     // var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

//     // // ISTTime now represents the time in IST coordinates

//     // var hoursIST = ISTTime.getHours()
//     // var minutesIST = ISTTime.getMinutes()

//     var date = Math.floor((Date.now())/1000);

//     const updateData = () => {
//         updateProduct(lat, lng, parseInt(data.id), data.description, date);
//      toast({
//        title: "Data Updated Successfully",
//        description: "Your product data has been Updated.",
//        status: "success",
//        duration: 3000,
//        isClosable: true,
//      });
//     }

//     return (
//         <Flex
//             // minH={'90vh'}
//             align={'center'}
//             justify={'center'}
//         // bg={useColorModeValue('gray.50', 'gray.800')}
//         >
//             <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12}>
//                 <Stack align={'center'}>
//                     <Heading fontSize={'4xl'}>Update product</Heading>
//                     <Text fontSize={'lg'} color={'gray.600'}>
//                         You can update the product over here.
//                     </Text>
//                 </Stack>
//                 <Box
//                     rounded={'lg'}
//                     bg={useColorModeValue('white', 'gray.700')}
//                     boxShadow={'lg'}
//                     p={8}
//                     w={['xs', 'sm']}
//                 >
//                     <Stack spacing={4}>
//                         <FormControl id="product-id">
//                             <FormLabel>Product Id</FormLabel>
//                             <Input type="number" name='id' onChange={handleData} />
//                         </FormControl>
//                         <FormControl id="discription">
//                             <FormLabel>Description Of Product</FormLabel>
//                             <Textarea name='description' onChange={handleData}></Textarea>
//                         </FormControl>
//                         <Button
//                             bg={'blue.400'}
//                             color={'white'}
//                             _hover={{
//                                 bg: 'blue.500',
//                             }}
//                             onClick={updateData}
//                         >
//                             Submit
//                         </Button>
//                     </Stack>
//                 </Box>
//             </Stack>
//         </Flex>
//     );
// }


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    Textarea,
    useToast,
    Table,
    Thead,
  Tbody,
  Tr,
  Th,
  Td,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { updateProduct } from '../utils/operations';
import { pdtData } from './data';
import { Operation } from '@taquito/taquito';
  
  export default function UpdateProduct() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        id: '',
        description: '',  // Only description will be updated
      });
    const toast = useToast();
  
    useEffect(() => {
      getLocation();
    }, [!lat]);
  
    const handleData = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus(null);
            setLat(position.coords.latitude.toString());
            setLng(position.coords.longitude.toString());
          },
          () => {
            setStatus('Unable to retrieve your location');
          }
        );
      }
    };
  
    const date = Math.floor(Date.now() / 1000);
  
    const updateData = () => {
    //   updateProduct(lat, lng, parseInt(data.id), data.description, date);
    const productIndex = pdtData.findIndex((product) => product.id == (data.id));

    if (productIndex !== -1) {
      // Update the product data in the array
    //   pdtData[productIndex] = {
    //     ...pdtData[productIndex],  // Keep the existing data intact
    //     description: data.description,
    //     operation:"updation"
    //   }
      pdtData.push({
        id: data.id,
        name: data.name,
        description: data.description,
        operation: 'updation' 
      });
      toast({
        title: "Data Updated Successfully",
        description: "Your product data has been updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    else{
        toast({
            title: "Enter Correct Product ID",
            description: "Your product data not found.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    }
      
    //   onProductChange({ id: data.id, description: data.description }, 'updation');
    };
  
    return (
      <Flex align={'center'} justify={'center'} bg={'gray.900'} minH={'100vh'} p={4}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>
              Update Goods
            </Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              You can update the goods over here.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'gray.800'}
            boxShadow={'lg'}
            p={8}
            w={['xs', 'sm']}
          >
            <Stack spacing={4}>
              <FormControl id="product-id">
                <FormLabel color={'gray.300'}>Goods Id</FormLabel>
                <Input
                  type="number"
                  name="id"
                  value={data.id}
                  onChange={handleData}
                  bg={'gray.700'}
                  color={'white'}
                  _placeholder={{ color: 'gray.400' }}
                  borderColor={'gray.600'}
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                />
              </FormControl>
              <FormControl id="description">
                <FormLabel color={'gray.300'}>Description Of Goods</FormLabel>
                <Textarea
                  name="description"
                  value={data.description}
                  onChange={handleData}
                  bg={'gray.700'}
                  color={'white'}
                  _placeholder={{ color: 'gray.400' }}
                  borderColor={'gray.600'}
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                ></Textarea>
              </FormControl>
              <Button
                bg={'blue.500'}
                color={'white'}
                _hover={{
                  bg: 'blue.600',
                }}
                onClick={updateData}
              >
                Submit
              </Button>
            </Stack>
          </Box>

          {pdtData.length > 0 && (
          <Box bg={"gray.800"} p={4} borderRadius="lg" boxShadow="lg">
            <Heading fontSize={"lg"} color={"white"} mb={4}>
              Goods List
            </Heading>
            <Table variant="simple" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th color={"gray.300"}>Goods Id</Th>
                  <Th color={"gray.300"}>Description</Th>
                </Tr>
              </Thead>
              <Tbody color={'white'}>
                {pdtData.map((product, index) => (
                  product.operation === 'updation' ? ( // Check if the operation is 'add'
                    <Tr key={index}>
                    <Td>{product.id}</Td>
                    <Td>{product.description}</Td>
                  </Tr>
                  ) : (
                    <Tr></Tr>
                  )
                  
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
        </Stack>
      </Flex>
    );
  }
  