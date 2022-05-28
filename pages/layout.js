import Head from "next/head";
import Nav from "../components/navigation/Nav";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Compras Cooperativas!</title>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
                <link href="./css/material-kit.css?v=3.0.0" rel="stylesheet" />

                <script src="./js/material-kit.js"></script>
                <script src="./js/core/bootstrap.min.js" type="text/javascript"></script>
            </Head>

            <Nav />
            <div>

                {children}
            </div>

        </>
    );
}