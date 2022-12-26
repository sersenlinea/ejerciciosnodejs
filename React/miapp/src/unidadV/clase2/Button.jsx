import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({cambiarPagina}) {
  return (
      <Button onClick={cambiarPagina} sx={{ mt: 6, mb: 3, mx:9 }} variant="contained" >Cambiar página</Button>
  );
}

