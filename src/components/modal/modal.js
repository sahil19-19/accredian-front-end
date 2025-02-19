import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import axios from "axios";

import {
    Button,
    TextField,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
} from "@mui/material";

const ReferralModal = ({ open, onClose }) => {
    const apiURL = process.env.REACT_APP_BACKEND_URL;
    const userEmail = process.env.REACT_APP_EMAIL_USER;

    const [value, setPhone] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const handleChange = (newValue) => {
        setPhone(newValue);
    };

    const helper = () => {
        onClose();
        setPhone("");
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={helper}
                slotProps={{
                    paper: {
                        component: "form",
                        onSubmit: async (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(
                                formData.entries()
                            );

                            console.log(formJson);
                            setPhone("");

                            try {
                                await axios.post(
                                    `${apiURL}/api/referrals`,
                                    formJson, {
                                        headers: { "Content-Type": "application/json" }
                                    }
                                );
                                setSuccess(true);
                            } catch (err) {
                                console.log(err);
                                setSuccess(false);
                            }

                            setSnackbarOpen(true);
                            onClose();
                        },
                    },
                }}
            >
                <DialogTitle>Refer a Friend</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the details below to refer a friend
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="referrerEmail"
                        name="referrerEmail"
                        type="email"
                        fullWidth
                        variant="outlined"
                        label="Your email"
                        value={userEmail}
                        readOnly
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="refereeEmail"
                        name="refereeEmail"
                        label="Email address of your friend"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="refereeName"
                        name="refereeName"
                        label="Name of your friend"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <MuiTelInput
                        autoFocus
                        required
                        margin="dense"
                        id="refereeNumber"
                        name="refereeNumber"
                        label="Number of your friend"
                        fullWidth
                        value={value}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="dense" required>
                        <InputLabel id="menu">Courses</InputLabel>
                        <Select label="courses" name="refCourse">
                            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
                            <MenuItem value={"express"}>Express</MenuItem>
                            <MenuItem value={"node"}>Node</MenuItem>
                            <MenuItem value={"react"}>React</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={helper}>Cancel</Button>
                    <Button type="submit">Refer</Button>
                </DialogActions>
            </Dialog>
            {isSuccess ? ( 
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000} // Hide after 4 seconds
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success"
                >
                    Referral Successful, An email has been sent to your friend!
                </Alert>
            </Snackbar> 
            ):(
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000} // Hide after 4 seconds
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="error">
                    There was an error while submitted the referral!
                </Alert>
            </Snackbar>
            )}
        </>
    );
};

export default ReferralModal;
