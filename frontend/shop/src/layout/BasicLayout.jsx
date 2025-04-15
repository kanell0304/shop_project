import Header from "../Components/Header";
import Footer from "../Components/Footer";
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