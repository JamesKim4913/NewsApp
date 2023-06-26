import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box mt={4} p={2} bgcolor="primary.dark" color="white">
      <Typography variant="body2" align="center">
        James © 2023 News App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
