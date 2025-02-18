import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

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
    const [value, setPhone] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);


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
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(
                                formData.entries()
                            );
                            // const email = formJson;
                            console.log(formJson);
                            setPhone("");
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
                        id="referrer_email"
                        name="referrer_email"
                        label="Your email address"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="referee_email"
                        name="referee_email"
                        label="Email address of your friend"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="referee_name"
                        name="referee_name"
                        label="Name of your friend"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <MuiTelInput
                        autoFocus
                        required
                        margin="dense"
                        id="referee_number"
                        name="referee_number"
                        label="Number of your friend"
                        fullWidth
                        value={value}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="dense" required>
                        <InputLabel id="menu">Courses</InputLabel>
                        <Select label="courses" name="courses">
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
                    Referral Successful, we will send you an email.
                </Alert>
            </Snackbar>
        </>
    );
};

export default ReferralModal;
