import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    bgcolor: "#1A1A19",
                    color: "white",
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        my: 3,
                        "& svg": {
                            fontSize: "25px",
                            cursor: "pointer",
                            mr: 2,
                        },
                        "& svg:hover": {
                            color: " rgb(27 102 201) ",
                            transform: "translateX(5px)",
                            transition: "all 400ms",
                        },
                    }}
                >
                    {/* icons */}
                    <IconButton href="https://www.instagram.com/accredian_edu" >
                        <InstagramIcon  sx={{color : 'white'}}/>
                    </IconButton>
                    <IconButton href="https://twitter.com/accredianedu">
                        <TwitterIcon  sx={{color : 'white'}}/>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/company/accredianedu/">
                        <GitHubIcon sx={{color : 'white'}} />
                    </IconButton>
                    <IconButton href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA">
                        <YouTubeIcon sx={{color : 'white'}} />
                    </IconButton>
                </Box>
                <Typography
                    sx={{
                        "@media (max-width:600px)": {
                            fontSize: "1rem",
                        },
                    }}
                >
                    All Rights Reserved &copy;
                </Typography>
            </Box>
        </>
    );
};

export default footer;
