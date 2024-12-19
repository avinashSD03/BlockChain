// import {
//   Box,
//   Flex,
//   Button,
//   useColorModeValue,
//   HStack,
//   Text,
//   Heading,
//   Image
// } from '@chakra-ui/react';
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react';
// import { connectWallet, getAccount } from "../utils/wallet";

// export default function Navbar() {

//   const router = useRouter();

//   const [account, setAccount] = useState("");

//   useEffect(() => {
//     (async () => {
//       // TODO 5.b - Get the active account
//       const account = await getAccount();
//       setAccount(account);
//     })();
//   }, []);

//   // TODO 4.a - Create onConnectWallet function
//   const onConnectWallet = async () => {
//     await connectWallet();
//     const account = await getAccount();
//     setAccount(account);
//   };

//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.900')} padding={'2rem'}>
//       <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//         <Heading fontWeight='600' fontSize='xl' cursor={'pointer'}>
//           <Image
//             alt={'Login Image'}
//             objectFit={'contain'}
//             src='Logo111.png'
//             backgroundColor={'black'}
//             borderRadius={'2.5rem'}
//             boxSize={'5rem'}
//             display={'inline'}
//             onClick={() => router.push('/')}
//           />
//         </Heading>
//         <HStack alignItems='center'>
//           {/* <Text px='4' fontWeight='500' onClick={() => router.push('/')} cursor='pointer'>Home</Text> */}
//           {/* <Text px='4' fontWeight='500' onClick={() => router.push('/addproduct')} cursor='pointer'>Add Product</Text>
//           <Text px='4' fontWeight='500' onClick={() => router.push('/updateproduct')} cursor='pointer'>Update Product</Text>
//           <Text px='4' fontWeight='500' onClick={() => router.push('/showhistory')} cursor='pointer'>Show History</Text> */}
//         </HStack>
//         <Button onClick={onConnectWallet} variant='outline' colorScheme='linkedin' size={'lg'} fontSize={'lg'}>
//           {account
//             ? account.slice(0, 4) +
//             "..." +
//             account.slice(account.length - 4, account.length)
//             : "Connect"}

//         </Button>
//       </Flex>
//     </Box>
//   );
// }


import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  HStack,
  Text,
  Heading,
  Image
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connectWallet, getAccount } from "../utils/wallet";

export default function Navbar() {
  const router = useRouter();

  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // Function to connect wallet
  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <Box bg={'gray.900'} padding={'2rem'} color={'white'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontWeight='600' fontSize='xl' cursor={'pointer'}>
          <Image
            alt={'Logo'}
            objectFit={'contain'}
            src='Logo111.png'
            borderRadius={'2.5rem'}
            boxSize={'5rem'}
            display={'inline'}
            onClick={() => router.push('/')}
          />
        </Heading>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Button
            color={'white'}
            onClick={() => router.push('/addproduct')}
            variant='outline'
            colorScheme='blue'
            borderColor={'blue.400'}
            _hover={{
              bg: 'blue.600',
              borderColor: 'blue.600',
            }}
            size={'lg'}
            fontSize={'lg'}
          >
            Add Goods
          </Button>
          <Button
            color={'white'}
            onClick={() => router.push('/updateproduct')}
            variant='outline'
            colorScheme='blue'
            borderColor={'blue.400'}
            _hover={{
              bg: 'blue.600',
              borderColor: 'blue.600',
            }}
            size={'lg'}
            fontSize={'lg'}
          >
            Update Goods
          </Button>
          <Button
            color={'white'}
            onClick={() => router.push('/showhistory')}
            variant='outline'
            colorScheme='blue'
            borderColor={'blue.400'}
            _hover={{
              bg: 'blue.600',
              borderColor: 'blue.600',
            }}
            size={'lg'}
            fontSize={'lg'}
          >
            Track Goods
          </Button>
        </HStack>
        <Button
          onClick={onConnectWallet}
          variant='outline'
          colorScheme='blue'
          borderColor={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.600',
            borderColor: 'blue.600',
          }}
          size={'lg'}
          fontSize={'lg'}
        >
          {account
            ? account.slice(0, 4) +
            "..." +
            account.slice(account.length - 4, account.length)
            : "Connect"}
        </Button>
      </Flex>
    </Box>
  );
}
