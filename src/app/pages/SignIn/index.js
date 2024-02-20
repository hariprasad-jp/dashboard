import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function SignInPage() {

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate('/');
    }
    return <div>
        <Container maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

                <Typography variant="h5">Sign In</Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, alignSelf: 'stretch' }}>

                    <TextField
                        margin="normal"
                        fullWidth
                        name="email"
                        type="email"
                        label="Email Address"

                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        type="password"
                        label="Password"

                    />


                    <Button
                        fullWidth
                        type="submit"
                        sx={{ mt: 3 }}
                        variant="contained">SIGN IN</Button>
                </Box>
            </Box>
        </Container>
    </div>
}