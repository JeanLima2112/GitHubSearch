import {Text, Flex, Image, Button} from '@chakra-ui/react'
import { UserProps } from '../types/user'
import { IoLocationSharp } from "react-icons/io5";
import{Link as ReactRouterLink} from "react-router-dom"
import {Link as ChakraLink} from "@chakra-ui/react"




export function User ({login,avatar_url,followers,following,location,html_url}: UserProps) {
    return(
        <Flex color='white' gap='1rem' direction='column' p='5%' w='100%' height='100%' justifyContent='space-around' alignItems='center'  borderRadius='2rem' bg='#0d1117'>
            <Image border='5px solid #7b61f7' borderRadius='50%' maxW='9rem'  src={avatar_url} />
            <Text fontSize='2rem'  >{login}</Text>

            {location && (
                <Flex alignItems='center' gap='.5rem'>
                    <IoLocationSharp color='green' />
                    <Text>{location}</Text>
                </Flex>)}

            <Flex gap='1rem'>
                <Flex direction='column' alignItems='center' gap='.5rem'>
                    <Text>Seguidores:</Text>
                    <Flex justifyContent='center' width='fit-content' p='4%' bgGradient='linear(to-t,#1f2020,#7b61f7)' ><Text>{followers}</Text></Flex>
                </Flex>
                <Flex border='1px solid #ffff'></Flex>
                <Flex direction='column' alignItems='center' gap='.5rem'>
                    <Text>Seguindo:</Text>
                    <Flex justifyContent='center' width='fit-content' p='4%' bgGradient='linear(to-t,#1f2020,#7b61f7)' ><Text>{following}</Text></Flex>
                </Flex>
            </Flex>
            <Button bgGradient='linear(to-b,#1f2020,#7b61f7)' _hover={{scale:'1.05'}}>
                <ChakraLink as={ReactRouterLink} to={html_url} _hover={{ textDecoration: "none" }} isExternal>Visite o Perfil de {login}</ChakraLink>
            </Button>
                
        </Flex>
    )
}