import * as React from 'react';
import { Paper, Grid, Typography, Stack, Avatar } from '@mui/material';
import { DashboardWrapper } from '../../components/DashboardWrapper';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UndoIcon from '@mui/icons-material/Undo';





export function DashboardPage() {
    return <DashboardWrapper title="Dashboard">

        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Paper sx={{ p: 3 }}>
                    <PaperItem title="Orders" number="235" color="#1976d2" icon={<InventoryIcon />} />
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ p: 3 }}>
                    <PaperItem title="Users" number="56" color="#1976d2" icon={<GroupIcon />} />
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ p: 3 }}>
                    <PaperItem title="Revenue" number="4252" color="#1976d2" icon={<AttachMoneyIcon />} />
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ p: 3 }}>
                    <PaperItem title="Refunds" number="$226" color="#1976d2" icon={<UndoIcon />} />
                </Paper>
            </Grid>
        </Grid>
    </DashboardWrapper>
}

const PaperItem = ({ title, number, color, icon }) => {
    return <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ backgroundColor: color, width: 54, height: 54 }}>
            {icon}
        </Avatar>
        <div>
            <Typography color="primary">{title}</Typography>
            <Typography variant='h4'>{number}</Typography>

        </div>
    </Stack>
}