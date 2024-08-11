type SearchProps ={
    loadUser:(userName: string) => Promise<void>;
}

import { Input,Button,InputGroup,InputRightAddon } from "@chakra-ui/react"
import {CiSearch} from "react-icons/ci";
import { useState, KeyboardEvent } from "react";


const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName);
        }

    }

    return(
        <InputGroup  borderRadius='.8rem' bg='#ffff' alignItems='center' width='100%' height='3.3rem'>
            <Input type='text' placeholder='Digite o Nome de Usuário' opacity='.5' border='none' _focus={{boxShadow : 'none'}} onChange={(e)=> setUserName(e.target.value)} onKeyDown={handleKeyDown} />
            <Button onClick={() => loadUser(userName)} bg='none' _hover={{scale:'1.05'}} ><InputRightAddon transition='.2s' opacity='.3' _hover={{opacity:'1'}} bg='none' border='none'><CiSearch color="#7b61f7" size='30px' /></InputRightAddon></Button>
        </InputGroup>  
    )
}

export default Search




