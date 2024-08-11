import { UserProps } from '../../types/user';
import {Flex, Text} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import { User } from '../../components/User';
import { useState } from "react";
import Search from '../../components/Search';
import axios from 'axios';
import Error from '../../components/Error';

export default function Home(){
 const [user, setuser] = useState<UserProps | null>(null);
 const [error, setError] = useState(false);

 const loadUser = (userName: string): Promise<void> => {
    setuser(null);
    setError(false)
    return axios.get(`https://api.github.com/users/${userName}`)
        .then((res) => {
            const { avatar_url, login, followers, location, following,html_url } = res.data;
            const userData: UserProps ={
                avatar_url,
                login,
                location,
                followers,
                following,
                html_url
            }
            setuser(userData);
        })
        .catch(() => {
            setError(true);
        });


}
    return(
        <Flex w='100%'  minH='100vh' bgGradient='linear(to-b,#1f2020,#7b61f7)' >
            <Flex className='Container'  gap='1rem' w='100%' h='100%'  alignItems='center' pt='3rem' direction='column'>
                <Flex color='white' alignItems='center' gap='rem' fontSize='3rem'>
                    <FaGithub />
                    <Text fontWeight='bold' >Git Hub Search</Text>
                </Flex>
                <Flex direction='column' w='100%' gap='1rem' maxW='30rem' p='3%' height='100%' justifyContent='space-around' alignItems='center' className='card' borderRadius='2rem' bg='#0d1117'>
                    <Flex direction='column' alignItems='center' gap='1rem' color='white'>
                        <Text fontSize='1.5rem'>Busque Alguem No GitHub</Text>
                        <Text opacity='.4'>Conheça seu Perfil</Text>
                    </Flex>
                    
                    <Flex>
                        <Search loadUser={loadUser}  />
                    </Flex>

                </Flex>
                <Flex w='100%' maxW='30rem' className='Aqui vai as infos' >
                    {user && <User {...user}/>}
                    {error && <Error />}
                </Flex>
            </Flex>
        </Flex>
    )
}




