import React from 'react';
import PropTypes from 'prop-types';
import { RegistrationForm } from "../components/RegistrationForm";
import { Box } from '@mui/material'

export function RegistrationPage() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '100%',
    }}>
      <Box sx={{ m: 'auto' }}>
        <RegistrationForm onSubmit={console.log} />
      </Box>
    </Box>
  );
}

RegistrationPage.propTypes = {};
