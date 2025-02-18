//
import Layout from "../../components/layout/layout";
import { Button, Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import scholar from "../../assests/images/scholar.svg";
const refer = () => {
    return (
        <Layout>
            <Container sx={{marginTop:2}}>
                <Grid container spacing={4} alignItems="center">
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
                            sx={{ mt: 2, px: 4, py: 1.5, fontWeight: "bold" }}
                        >
                            Refer Now
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        {/* <HeroImage
                            src="/images/refer-and-earn.svg"
                            alt="Refer and Earn Illustration"
                        /> */}
                            <Box
                                component="img"
                                sx={{
                                    height: "90%",
                                    maxWidth: '100%'
                                }}
                                src={scholar}
                                alt="logo image"
                            />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default refer;
