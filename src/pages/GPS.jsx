import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, Modal, Box } from '@mui/material';
import commands from '../schemas/GPScommands';


function TelemetryPage() {
  const [telemetryData, setTelemetryData] = useState(
    commands.map((command) => ({
      label: command.description,
      value: '',
      argument: command.subMenmonics.map((subMnemonic) => subMnemonic.description).join(', ')
    }))
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [commandArgument, setCommandArgument] = useState('');
  const [selectedTelemetryIndex, setSelectedTelemetryIndex] = useState(-1);

  const startTelemetry = () => {
    // Add logic to start telemetry
  };

  const stopTelemetry = () => {
    // Add logic to stop telemetry
  };

  const openModal = (argument, index) => {
    setModalOpen(true);
    setCommandArgument(argument || '');
    setSelectedTelemetryIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCommandArgument('');
    setSelectedTelemetryIndex(-1);
  };

  const sendCommand = () => {
    if (selectedTelemetryIndex !== -1) {
      const updatedTelemetryData = [...telemetryData];
      updatedTelemetryData[selectedTelemetryIndex].value = 'New Value';
      setTelemetryData(updatedTelemetryData);
      closeModal();
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Telemetry Page
        </Typography>
      </Grid>
      {telemetryData.map((telemetry, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} sx={{ padding: 2, width: '100%', height: '100%' }}>
            <Typography variant="body1" gutterBottom>
              {telemetry.label}:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {telemetry.value}
            </Typography>
            <Button
              variant="contained"
              onClick={() => openModal(telemetry.argument, index)}
              sx={{ marginTop: 2 }}
            >
              Send Command
            </Button>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={startTelemetry}>
          Start
        </Button>
        <Button variant="contained" color="secondary" onClick={stopTelemetry}>
          Stop
        </Button>
      </Grid>
      <Modal open={modalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            maxWidth: '80%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Command Argument
          </Typography>
          <Typography variant="body1">{commandArgument}</Typography>
          <Box sx={{ marginTop: 2 }}>
            <Button variant="contained" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginLeft: 2 }}
              onClick={sendCommand}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default TelemetryPage;
