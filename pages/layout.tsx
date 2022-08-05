import Head from "next/head";
import Nav from "../components/navigation/Nav";
import colores from "../constans/colores";

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
           <style>
                {`body{
                    background-color: ${colores.colorMain};
                }`}
           </style>
            <div>

                {children}
            </div>
        </>
    );
}

export default Layout;