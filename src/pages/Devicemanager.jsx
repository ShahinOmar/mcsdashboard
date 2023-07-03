import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function Devicemanager() {
  return (
    <Box>
        <TextField id="device-name" label="Device Name" variant="outlined" />
        <Button variant="contained">Add</Button>
    </Box>
  )
}

export default Devicemanager;