// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from '@chakra-ui/react';
// import { useRouter } from 'next/router';

// export default function Hero() {

//   const router = useRouter();

//   return (
//     <Stack minH={'90vh'} direction={'column'}>
//       <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} align={'center'} paddingTop={'4rem'}>
//         <Text color={'blue.400'} as={'span'}>
//           Supply Chain Management System
//         </Text>{' '}
//       </Heading>
//       <Flex flex={1} align={'center'} justify={'center'}>
//         <Image
//           alt={'Login Image'}
//           objectFit={'contain'}
//           src='svg.svg'
//           boxSize={'60rem'}
//         />
//       </Flex>
//       <Flex p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={6} w={'full'} maxW={'lg'}>
//           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//             <Text as={'span'} position={'relative'}>
//               FlowCraft
//             </Text>
//             <br />{' '}
//           </Heading>
//           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
//             Track your products just by using product id.
//           </Text>
//           <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
//             <Button
//               rounded={'full'}
//               bg={'blue.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'blue.500',
//               }}
//               onClick={() => router.push('/showhistory')}
//             >
//               Track Product
//             </Button>
//             <Text px='4' fontWeight='500' onClick={() => router.push('/addproduct')} cursor='pointer'>Add Product</Text>
//             <Text px='4' fontWeight='500' onClick={() => router.push('/updateproduct')} cursor='pointer'>Update Product</Text>
//             <Text px='4' fontWeight='500' onClick={() => router.push('/showhistory')} cursor='pointer'>Show History</Text>
//           </Stack>
//         </Stack>
//       </Flex>
//     </Stack>
//   );
// }


import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <Stack minH={'90vh'} direction={'row'} bg={'gray.900'} color={'white'} px={'4rem'}>

      <Flex flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src='svg.svg'
          width={'90rem'}
          height={'50rem'}
          margin={'2rem'}
        />
      </Flex>
      <Flex flex={1} align={'justify'} justify={'center'} direction={'column'} marginBottom={'10rem'}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          align={'center'}
        >
          <Text color={'blue.300'} as={'span'}>
            SmartChain - Revolutionizing Supply Chain with Blockchain Technology
          </Text>{' '}
        </Heading>
        <Text color={'gray.400'} as={'span'} align={'justify'} fontSize={'2xl'} margin={'2rem'}>
          Unlock seamless transparency, enhanced security, and real-time tracking across your supply chain. SmartChain leverages the power of blockchain to streamline operations, reduce fraud, and ensure the authenticity of every transaction. Experience a smarter, more efficient way to manage your supply chain from start to finish.
        </Text>{' '}
      </Flex>
    </Stack>
  );
}
