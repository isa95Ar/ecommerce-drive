import {useAppSelector, AppDispatch} from "../../store/store";
import {userLogged, logout} from "../../store/reducers/user";
import {Button} from "@nextui-org/react";
import {useDispatch} from "react-redux";
import { useRouter } from 'next/router'

export default function NavBar() {

    const user = useAppSelector(userLogged);
    const dispatch:AppDispatch = useDispatch();
    const router = useRouter();

    var style = {
        navStyle: {
            primary: "#F29400",
            accent: "#F3AF43"
        }
    }

    const closeSession = async () => {
        dispatch(logout());
        router.push('/api/logout');
    }

    return (
        <div style={{
            backgroundColor: style.navStyle.primary,
            height: "55px",
            display: "flex",
            position: "fixed",
            zIndex: "1",
            alignItems: "center",
            justifyItems:"center",
            justifyContent: "space-between",
            padding: "2px 8px 2px 8px",
            width: "100%"
        }}>
            casi

            {user.logged && <div style={{display:'flex',flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Button css={{alignSelf: "right", backgroundColor: style.navStyle.accent}} size={"sm"} onClick={() => closeSession()}>
                    Cerrar Sesión ({user.name})
                </Button>
            </div>}


        </div>
    );
}