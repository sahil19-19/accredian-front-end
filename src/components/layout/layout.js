//
import Header from "../header/header";

const layout = ({children}) => {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
        </>
    )
}

export default layout;