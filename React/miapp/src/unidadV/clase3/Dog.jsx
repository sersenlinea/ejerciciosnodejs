import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
function Dog() {
  const [dog, setdog] = useState('');
  const [view,setView]=useState(false)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setdog(data.message);
      setView(true)
    }
    fetchData();
  }, []);

  return (
  <Container sx={{ py: 8 }} maxWidth="md">
    {view?<img  src={dog} width="300px"/>:<p>Buscando Datos...</p>}
    </Container>

  );
}

export default Dog;