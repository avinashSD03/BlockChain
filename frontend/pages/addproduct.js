// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Textarea,
//   useToast
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { addProduct } from "../utils/operations";

// export default function AddProduct() {
//   const [data, setData] = useState("");
//   const toast = useToast();


//   const handleData = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const sendData = () => {
//     addProduct(data.id, data.name, data.description);
//     toast({
//       title: "Data Added Successfully",
//       description: "Your product data has been added.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Flex
//       // minH={'80vh'}
//       align={"center"}
//       justify={"center"}
//       // bg={useColorModeValue('gray.50', 'gray.800')}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} w={["xs", "sm"]}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"}>Add product</Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             You can add products over here.
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <FormControl id="product-id">
//               <FormLabel>Product Id</FormLabel>
//               <Input type="number" name="id" onChange={handleData} />
//             </FormControl>
//             <FormControl id="name">
//               <FormLabel>Product Name</FormLabel>
//               <Input type="text" name="name" onChange={handleData} />
//             </FormControl>
//             <FormControl id="description">
//               <FormLabel>Description Of Product</FormLabel>
//               <Textarea name="description" onChange={handleData}></Textarea>
//             </FormControl>
//             <Button
//               bg={"blue.400"}
//               color={"white"}
//               _hover={{
//                 bg: "blue.500",
//               }}
//               onClick={sendData}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }



// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   Textarea,
//   useToast
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { addProduct } from "../utils/operations";

// export default function AddProduct() {
//   const [data, setData] = useState("");
//   const toast = useToast();

//   const handleData = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const sendData = () => {
//     addProduct(data.id, data.name, data.description);
//     toast({
//       title: "Data Added Successfully",
//       description: "Your product data has been added.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Flex
//       align={"center"}
//       justify={"center"}
//       bg={"gray.900"}
//       minH={"100vh"}
//       px={4}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} w={["xs", "sm"]}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} color={"white"}>
//             Add Product
//           </Heading>
//           <Text fontSize={"lg"} color={"gray.400"}>
//             You can add products over here.
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={"gray.800"}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <FormControl id="product-id">
//               <FormLabel color={"gray.300"}>Product Id</FormLabel>
//               <Input
//                 type="number"
//                 name="id"
//                 onChange={handleData}
//                 bg={"gray.700"}
//                 color={"white"}
//                 _placeholder={{ color: "gray.400" }}
//                 borderColor={"gray.600"}
//                 _hover={{ borderColor: "blue.400" }}
//                 _focus={{
//                   borderColor: "blue.500",
//                   boxShadow: "0 0 0 1px blue.500",
//                 }}
//               />
//             </FormControl>
//             <FormControl id="name">
//               <FormLabel color={"gray.300"}>Product Name</FormLabel>
//               <Input
//                 type="text"
//                 name="name"
//                 onChange={handleData}
//                 bg={"gray.700"}
//                 color={"white"}
//                 _placeholder={{ color: "gray.400" }}
//                 borderColor={"gray.600"}
//                 _hover={{ borderColor: "blue.400" }}
//                 _focus={{
//                   borderColor: "blue.500",
//                   boxShadow: "0 0 0 1px blue.500",
//                 }}
//               />
//             </FormControl>
//             <FormControl id="description">
//               <FormLabel color={"gray.300"}>Description Of Product</FormLabel>
//               <Textarea
//                 name="description"
//                 onChange={handleData}
//                 bg={"gray.700"}
//                 color={"white"}
//                 _placeholder={{ color: "gray.400" }}
//                 borderColor={"gray.600"}
//                 _hover={{ borderColor: "blue.400" }}
//                 _focus={{
//                   borderColor: "blue.500",
//                   boxShadow: "0 0 0 1px blue.500",
//                 }}
//               ></Textarea>
//             </FormControl>
//             <Button
//               bg={"blue.500"}
//               color={"white"}
//               _hover={{
//                 bg: "blue.600",
//               }}
//               onClick={sendData}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
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
} from "@chakra-ui/react";
import { useState } from "react";
import { pdtData } from "./data";
import { Operation } from "@taquito/taquito";

export default function AddProduct() {
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
  });
  const [productList, setProductList] = useState([]); // State to store products
  const toast = useToast();

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addProductToList = () => {
    // Push the new product data into the productList array
    setProductList([
      ...productList,
      { id: data.id, name: data.name, description: data.description },
    ]);
    pdtData.push({
      id: data.id,
      name: data.name,
      description: data.description,
      operation: 'addition' 
    });
    setData({ id: "", name: "", description: "" }); // Clear the form fields
    toast({
      title: "Data Added Successfully",
      description: "Your product has been added.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex align={"center"} justify={"center"} bg={"gray.900"} minH={"100vh"} px={4}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} w={["xs", "sm"]}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"white"}>
            Add Goods
          </Heading>
          <Text fontSize={"lg"} color={"gray.400"}>
            You can add goods over here.
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"gray.800"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="product-id">
              <FormLabel color={"gray.300"}>Goods Id</FormLabel>
              <Input
                type="number"
                name="id"
                value={data.id}
                onChange={handleData}
                bg={"gray.700"}
                color={"white"}
                _placeholder={{ color: "gray.400" }}
                borderColor={"gray.600"}
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
              />
            </FormControl>
            <FormControl id="name">
              <FormLabel color={"gray.300"}>Goods Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleData}
                bg={"gray.700"}
                color={"white"}
                _placeholder={{ color: "gray.400" }}
                borderColor={"gray.600"}
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel color={"gray.300"}>Description Of Goods</FormLabel>
              <Textarea
                name="description"
                value={data.description}
                onChange={handleData}
                bg={"gray.700"}
                color={"white"}
                _placeholder={{ color: "gray.400" }}
                borderColor={"gray.600"}
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
              ></Textarea>
            </FormControl>
            <Button
              bg={"blue.500"}
              color={"white"}
              _hover={{
                bg: "blue.600",
              }}
              onClick={addProductToList}
            >
              Submit
            </Button>
          </Stack>
        </Box>
        {/* Table to display product list */}
        {pdtData.length > 0 && (
          <Box bg={"gray.800"} p={4} borderRadius="lg" boxShadow="lg">
            <Heading fontSize={"lg"} color={"white"} mb={4}>
              Goods List
            </Heading>
            <Table variant="simple" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th color={"gray.300"}>Goods Id</Th>
                  <Th color={"gray.300"}>Name</Th>
                  <Th color={"gray.300"}>Description</Th>
                </Tr>
              </Thead>
              <Tbody color={'white'}>
                {pdtData.map((product, index) => (
                  product.operation === 'addition' ? ( // Check if the operation is 'add'
                    <Tr key={index}>
                    <Td>{product.id}</Td>
                    <Td>{product.name}</Td>
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
