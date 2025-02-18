//
import Header from "../header/header";
import Footer from '../footer/footer';

const layout = ({children}) => {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default layout;