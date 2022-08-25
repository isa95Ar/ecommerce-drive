
import Header from "../Header";

export default function NavBar({user,title}) {


    return (
        <div>
         <Header {...user} {...title} />
        </div>
    );
}