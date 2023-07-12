import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Forget = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>
                    Password Set-up
                </Heading>
                <Input placeholder='Email' type='email' required focusBorderColor='purple.500'/>
                <Input placeholder='New Password' type='password' required focusBorderColor='purple.500'/>
                <Input placeholder='Re-enter the new Password' type='password' required focusBorderColor='purple.500'/>

                <Button colorScheme='purple' type='submit'>Update Password</Button>
                <Text textAlign={'right'}>
                        New User? {" "}
                        <Button variant={'link'} colorScheme={'purple'}>
                        <Link to={'/signup'}>SignUp </Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Forget