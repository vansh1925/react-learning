import Footer from "./components/footer/Footer";
import Header from "./components/header/header/header";
import { Outlet } from "react-router-dom";
//now hame aisa banana hai ki header footer fix rhe baaki change ho to for that we have  fixed header footer and  outlet which will
//be change accodingly and react will take  it as a layour for the ui
function Layout() {
    return (  
        <>
        <Header />
        <Outlet/>
        <Footer/> 
        </>   
    );
}

export default Layout;