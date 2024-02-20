import * as React from 'react';
import Typography from '@mui/material/Typography';
import { DashboardWrapper } from '../../components/DashboardWrapper';
import { Divider, Paper, Stack, Switch, Checkbox, FormControlLabel, Button } from '@mui/material';


export function SettingsPage() {
    return <DashboardWrapper title="Settings">
        <Paper sx={{ p: 3 }}>
            <Stack gap={2}>
                <Stack direction="row" alignItems="center">
                    <Typography sx={{ flexGrow: 1 }}>
                        Allow Notifications
                    </Typography>
                    <Switch defaultChecked />
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Typography sx={{ flexGrow: 1 }}>
                        Allow Returns
                    </Typography>
                    <Switch defaultChecked />
                </Stack>

                <Divider />

                <Stack direction="row" alignItems="center">
                    <Typography sx={{ flexGrow: 1 }}>
                        Accepted Payments
                    </Typography>
                    <Stack direction="row-reverse">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cards" />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cash on Delivary" />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="Pay Later" />

                    
                    </Stack>
                </Stack>

                <Button variant="contained" sx={{mt: 5}}>Save</Button>
            </Stack>
        </Paper>
    </DashboardWrapper>
}