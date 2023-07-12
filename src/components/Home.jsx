import React from 'react'
import { Box, Container, Heading , Image, Stack, position,Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const Home = () => {
  return (
    <Box>
        <Mycarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>SERVICES</Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
                <Text letterSpacing={'widest'} textAlign={'center'} lineHeight={'190%'} p={['4','16']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
                tempora deleniti quod, est eos veniam autem asperiores rem, nam
                laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
                at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
                sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
                Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
                modi soluta ullam voluptatum unde repellat in molestias quod?
                Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
                velit culpa maiores. Inventore esse illum excepturi dolores est
                natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
                adipisci minima hic, nam provident quo aperiam quasi vel?
                Dignissimos accusantium aliquid aut vel explicabo voluptatum
                molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
                omnis officiis autem dolorum!
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const Mycarousel=()=>{
    return(
        <Carousel infiniteLoop autoPlay showStatus = {false} showArrows ={false} interval={2500} showThumbs = {false}>
            <Box w="full" h={'100vh'}>
                <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bg={'blackAlpha.600'} color={'White'} {...headingOptions}>Watch The Future</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bg={'whiteAlpha.600'} color={'Black'} {...headingOptions}>Future is Gaming</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bg={'whiteAlpha.600'} color={'Black'} {...headingOptions}>Gaming on console</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bg={'whiteAlpha.600'} color={'Black'} {...headingOptions}>Neon light is cool</Heading>
            </Box>
        </Carousel>
    )
}

const headingOptions={
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTranform: 'Uppercase',
    p: '4',
    size: '4xl',
}

export default Home