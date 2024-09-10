import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Contact = () => {
    const [contactReason, setContactReason] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContactReasonChange = (event) => {
        setContactReason(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            contactReason,
            name,
            email,
            message,
        });
    };

    return (
        <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel id="contact-reason-label">Reason for Contact</InputLabel>
                    <Select
                        labelId="contact-reason-label"
                        id="contact-reason"
                        value={contactReason}
                        onChange={handleContactReasonChange}
                        label="Reason for Contact"
                    >
                        <MenuItem value="inquiry">Inquiry</MenuItem>
                        <MenuItem value="support">Support</MenuItem>
                        <MenuItem value="feedback">Feedback</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
