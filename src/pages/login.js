import Layout from "@/layout/Layout"
import Auth from "@/layout/auth"
import Login from "@/components/home/login"
import Signin from "@/components/home/signin"


const login = () => {
	return (
	 <Auth>
		<Login />
		<Signin />
	  </Auth>
 );
};

export default login;