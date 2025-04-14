import Header from "../components/Header"
import Footer from "../components/Footer";

const BasicLayout = ({children}) => {
    return(
        <>
            <Header/>
            <div className="container">
                <main className="main">{children}</main>
            </div>
            <Footer/>
        </>
    )
}

export default BasicLayout;