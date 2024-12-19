// import { Button, Center, FormControl, HStack, Input, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
// import React, { useState } from 'react';
// import { useToast } from '@chakra-ui/react'
// import QRCode from 'qrcode.react'

// export default function ShowHistory() {

//     const toast = useToast();
//     const [id, setId] = useState("");
//     const [product, setProduct] = useState("");
//     const [qrCode, setQrCode] = useState("");

//     const handleQRCodeChange = (e) => {
//         setQrCode(e.target.value);
//     };

//     const getData = () => {
//         if (!id) {
//             toast({
//                 title: 'Please enter an id',
//                 status: 'error',
//                 duration: 9000,
//                 isClosable: true,
//             })
//         } else {
//             fetch('https://api.ghostnet.tzkt.io/v1/contracts/KT1KAUbe1gsdw5BeVQfgjh9xZFrHrKVs8ApD/storage')
//                 .then(res => res.json())
//                 .then(data => setProduct(data.productStatus(id)));
//         }
//     }

//     return (
//         <Center>
//             <Stack mt='20'>
//                 <HStack>
//                     <FormControl id="product-id">
//                         <Input type="number" name='id' placeholder='Enter product id' onChange={(e) => setId(e.target.value)} />
//                     </FormControl>
//                     <Button
//                         bg={'blue.400'}
//                         color={'white'}
//                         _hover={{
//                             bg: 'blue.500',
//                         }}
//                         onClick={getData}
//                     >
//                         Submit
//                     </Button>
//                 </HStack>
//                 <Stack pt='20'>
//                     <TableContainer>
//                         <Table variant='simple'>
//                             <Thead>
//                                 <Tr>
//                                     <Th>Time</Th>
//                                     <Th>Status description</Th>
//                                     <Th isNumeric>Latitude</Th>
//                                     <Th isNumeric>Longitude</Th>
//                                 </Tr>
//                             </Thead>
//                             <Tbody>
//                                 {product && product.map((el) => {
//                                     return (
//                                         <Tr key={el.time}> {/* Added key for React */}
//                                             <Td>{el.time}</Td>
//                                             <Td>{el.statusDescription}</Td>
//                                             <Td>{el.latitude}</Td>
//                                             <Td>{el.longitude}</Td>
//                                         </Tr>
//                                     )
//                                 })}
//                             </Tbody>
//                         </Table>
//                     </TableContainer>
//                 </Stack>
//             </Stack>

//             <div className="App">
//                 <input
//                     type="text" 
//                     placeholder="QR Code Data"
//                     onChange={handleQRCodeChange}
//                     value={qrCode}
//                 />
//                 {qrCode && (
//                     <div style={{ margin:'20px', padding:'10px'}}>
//                         <QRCode value={qrCode} />
//                     </div>
//                 )}
//             </div>
//         </Center>
//     )
// }



import {
    Button,
    Center,
    FormControl,
    HStack,
    Input,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
import { pdtData } from './data';

export default function ShowHistory() {
    const toast = useToast();
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [qrCode, setQrCode] = useState("");

    const handleQRCodeChange = (e) => {
        setQrCode(e.target.value);
    };

    const getData = () => {
        if (!id) {
            toast({
                title: 'Please enter an ID',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } else {
            fetch('https://api.ghostnet.tzkt.io/v1/contracts/KT1KAUbe1gsdw5BeVQfgjh9xZFrHrKVs8ApD/storage')
                .then((res) => res.json())
                .then((data) => setProduct(data.productStatus(id)));
        }
    };

    return (
        <Stack bg={'gray.900'} minH={'100vh'} px={'10rem'}>
            {/* <Stack mt={20} spacing={10} w={['xs', 'sm', 'lg']} textAlign={'center'}>
          <HStack>
            <FormControl id="product-id">
              <Input
                type="number"
                name="id"
                placeholder="Enter product ID"
                onChange={(e) => setId(e.target.value)}
                bg={'gray.800'}
                color={'white'}
                _placeholder={{ color: 'gray.400' }}
                borderColor={'gray.700'}
                _hover={{ borderColor: 'blue.400' }}
                _focus={{
                  borderColor: 'blue.500',
                  boxShadow: '0 0 0 1px blue.500',
                }}
              />
            </FormControl>
            <Button
              bg={'blue.500'}
              color={'white'}
              _hover={{
                bg: 'blue.600',
              }}
              onClick={getData}
            >
              Submit
            </Button>
          </HStack> */}

            <Stack pt={10}>
                <TableContainer>
                    <Table variant="simple" colorScheme="gray">
                        <Thead bg={'gray.800'}>
                            <Tr>
                                <Th color={'white'}>Goods ID</Th>
                                <Th color={'white'}>Name</Th>
                                <Th color={'white'}>Description</Th>
                                <Th color={'white'}>Operation</Th>
                            </Tr>
                        </Thead>
                        <Tbody color={'white'}>
                            {pdtData.map((product, index) => (
                                <Tr key={index}>
                                    <Td>{product.id}</Td>
                                    <Td>{product.name}</Td>
                                    <Td>{product.description}</Td>
                                    <Td>{product.operation}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>


            {/* </Stack> */}
        </Stack >
    );
}

