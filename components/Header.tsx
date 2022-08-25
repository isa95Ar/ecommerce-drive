import React from "react";
import { Text,Button, Grid } from '@nextui-org/react';
import { UserLogged } from "../src/global/types";
import { useRouter } from "next/router";

type HeaderProps = {
    title:string,
    user:UserLogged
}

const Header:React.FC<HeaderProps> = ({title,user}) => {

    const router = useRouter();

    const closeSession = async () => {
       
        router.push('/api/logout');
    }

    return (
        <div className="header">
            {user.logged && 
            <div className="logout-button">
                <Button className="logout-button" onClick={closeSession}>Cerrar Session ({user.name})</Button>
            </div>}
            <Text className="header-text" >{title}</Text>
        </div>
    );
}

export default Header;