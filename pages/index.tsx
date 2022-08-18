import Cookies from 'cookies';
import {container} from "tsyringe";
import GoogleAuthService from "../src/services/GoogleAuthService";
import {oauth2_v2} from "googleapis";
import Schema$Userinfo = oauth2_v2.Schema$Userinfo;
import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import LandingCerrado from '../components/landing/LandingCerrado';
import {userLogged, login, UserState} from "../store/reducers/user";
import {useEffect} from "react";
import { useAppSelector,AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";

export default function Home(props) {
    const user = useAppSelector(userLogged);
    const dispatch:AppDispatch = useDispatch();

    const authenticate = () => {
        if(props.googleUser && !user.logged){
            const newUser:UserState = {
                id_google_sheet: props.googleUser.id,
                name: props.googleUser.name,
                email: props.googleUser.email,
                profile_picture: props.googleUser.picture,
                logged : true
            };
            dispatch(login(newUser));
        }
    }

    useEffect(() => {
        authenticate();
    });


  return (
    <Layout>
        <LoginCard/>
        <LandingCerrado/>
    </Layout>
  )
}

export async function getServerSideProps({req,res}) {
    const cookies = new Cookies(req, res);

    let GoogleCredentials = cookies.get("google_credentials");
    if(GoogleCredentials){
        GoogleCredentials = JSON.parse(GoogleCredentials);
        const googleAuth = container.resolve(GoogleAuthService);
        const profile:Schema$Userinfo = await googleAuth.getProfileInfo(GoogleCredentials);

        return {
            props: {
                googleUser : profile
            },
        }
    }

    return {props:{}}

}


