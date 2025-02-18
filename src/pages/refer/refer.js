import React, {useState} from 'react';
import Layout from "../../components/layout/layout";
import { Button, Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import scholar from "../../assests/images/scholar.svg";
import ReferalModal from '../../components/modal/modal'

const Refer = () => {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
      setOpenModal(true);
    };
  
    const closeModalHandler = () => {
      setOpenModal(false);
    };

    return (
        <Layout>
            <Container className="grid-container" sx={{ my: 2, bgcolor:"#d9f3fa", p:2 }} >
                <Grid container spacing={4} alignItems="center" >
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="h3" gutterBottom>
                            Refer & Earn Rewards
                        </Typography>
                        <Typography variant="h5">
                            Share your learning experience with friends and earn
                            exciting rewards for each successful referral!
                        </Typography>
                        <Typography variant="body1">
                            Our courses help thousands of students achieve their
                            goals. Now you can help your friends while earning
                            rewards.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            onClick={openModalHandler}
                            sx={{ mt: 2, px: 4, py: 1.5, fontWeight: "bold" }}
                        >
                            Refer Now
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                            component="img"
                            sx={{
                                height: "90%",
                                maxWidth: "100%",
                            }}
                            src={scholar}
                            alt="logo image"
                        />
                    </Grid>
                </Grid>
                <ReferalModal open={openModal} onClose={closeModalHandler}/>
            </Container>
        </Layout>
    );
};

export default Refer;
