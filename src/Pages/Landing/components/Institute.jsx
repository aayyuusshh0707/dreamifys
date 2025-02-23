import React from 'react'
import Form from '../../Global/Form/form';
import Header from '../../Global/Header/Header';
import { Box } from '@mui/material';

export default function Institute() {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Header title=" Institute Of Animation, VFX & Film Making" subtitle="We have a track record of maintaining 100% job placement with every batch. Dreamifys has worked hard day in and day out to reach these notable organizations, most of which are our partner companies." imageSection={<Form />} />
      </Box>
    </>
  )
}
