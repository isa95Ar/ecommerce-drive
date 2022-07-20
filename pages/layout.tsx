import Head from "next/head";


type Props = {
    children: React.ReactNode
}
  const Layout:React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>AlMargen | Otras voces, otros sentidos</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <div>

                {children}
            </div>
        </>
    );
}

export default Layout;