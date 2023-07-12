import React from 'react'
import {Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,} from "@chakra-ui/react"
  import { Link } from "react-router-dom";
  import {BiMenuAltLeft} from "react-icons/bi"

  const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button zIndex={'overlay'} pos={'fixed'} top={4} left={4} colorScheme={'purple'} p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} >
            <BiMenuAltLeft size={20}/>
        </Button>
        
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>VideoTube</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button colorScheme='purple' variant={'ghost'}>
                            <Link to={'/'} onClick={onClose}>Home</Link>
                        </Button>
                        <Button colorScheme='purple' variant={'ghost'}>
                            <Link to={'/videos'} onClick={onClose}>Videos</Link>
                        </Button>
                        <Button colorScheme='purple' variant={'ghost'}>
                            <Link to={'/videos?category=free'} onClick={onClose}>Free Videos</Link>
                        </Button>
                        <Button colorScheme='purple' variant={'ghost'}>
                            <Link to={'/upload'} onClick={onClose}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                        <Button colorScheme='purple'>
                            <Link to={"/login"} onClick={onClose}>LogIn</Link>
                        </Button>
                        <Button colorScheme='purple' variant={'outline'}>
                            <Link to={"/signup"} onClick={onClose}>SignUp</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header