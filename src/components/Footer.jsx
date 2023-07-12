import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={"16"} color={"white"}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>Subscribe to get updates </Heading>
                <HStack>
                <Input placeholder='Enter Email here....'  border={'none'} borderRadius={'none'} focusBorderColor='none'/>
                    <Button padding={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textAlign={'center'}>VideoTube</Heading>
                <Text>All rights reserved</Text>
            </VStack>
            <VStack w={'full'} >
                <Heading textAlign={'center'} size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='purple'>
                    <a target={'_blank'} href='https://www.youtube.com'>YouTube</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a target={'_blank'} href='https://www.facebook.com'>Facebook</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a target={'_blank'} href='https://www.linkedin.com'>LinkedIn</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer