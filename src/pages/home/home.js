//
import { Typography } from "@mui/material";
// import Header from "../../components/header/header";
import Layout from "../../components/layout/layout";

const home = () => {
    return (
        <Layout>
            <Typography sx={{
            }}>
                Hello, this is home page
                <br/>
                Click on 'Refer' to refer your friend and earn exciting rewards
            </Typography>
        </Layout>
    );
};

export default home;
