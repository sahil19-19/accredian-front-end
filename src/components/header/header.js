import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Link,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../../src/assests/images/logo.jpg";
import "../header/header.css";

const Header = () => {
    const [isMobile, setMobileState] = useState(false);

    // handle menu click
    const handleDrawerToggle = () => {
        setMobileState(!isMobile);
    };

    // mobile drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", bgcolor: "#1d1d1d", height: "100%" }}
        >
            <Box
                component="img"
                sx={{
                    height: 37,
                    width: 125,
                    marginTop: 5,
                }}
                src={logo}
                alt="logo image"
            />
            <Divider />
            <ul className="mobile-navigation">
                <li>
                    <NavLink activeClassName="active" to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/refer"}>Refer</NavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component="nav" sx={{ bgcolor: "#1d1d1d" }}>
                    <Toolbar>
                        <Box
                            component="img"
                            sx={{
                                height: 37,
                                width: 125,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                marginLeft: 3,
                            }}
                            src={logo}
                            alt="logo image"
                        />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                marginRight: 2,
                                display: { sm: "none" },
                                marginLeft: "auto",
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                                marginLeft: "auto",
                            }}
                        >
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink activeClassName="active" to={"/"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/refer"}>Refer</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={isMobile}
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { xs: "block", sm: "none" }, // to display only in small devices
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
};

export default Header;
