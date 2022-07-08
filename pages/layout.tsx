import Head from "next/head";
import Nav from "../components/navigation/Nav";


type Props = {
    children: React.ReactNode
}
  const Layout:React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Compras Cooperativas!</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>

            <Nav />
           <style global jsx>
                {`body{
                    background-color:black;
                }`}
           </style>
            <div>

                {children}
            </div>
        </>
    );
}

export default Layout;