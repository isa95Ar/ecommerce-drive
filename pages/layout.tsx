import Head from "next/head";
import NavBar from "../components/navigation/NavBar";


type Props = {
    children: React.ReactNode,
    user:Object
}
  const Layout:React.FC<Props> = ({ children,user }) => {
    return (
        <>
            <Head>
                <title>AlMargen | Del otro lado de tu mesa</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <div>
                <NavBar user={user}></NavBar>

                {children}
            </div>
        </>
    );
}

export default Layout;