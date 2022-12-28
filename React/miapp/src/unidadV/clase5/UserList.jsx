import React from 'react';
import {Grid,Typography, CardContent, CardMedia, Card, CardActions,Button } from '@mui/material';
export default function UserList({ users, handleDelete }) {
  return (
    <React.Fragment>
      {users.map(user => (
        <Grid item key={user.id} xs={12} sm={6} md={4}>
        <Card
          sx={{ width:'90%', height:"100%",  display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={user.src}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 2 }}>
            <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          
            </Typography>
            <Typography>
            {user.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(user.id)}>Borrar</Button>
           
          </CardActions>
        </Card>
      </Grid>
      ))}
    </React.Fragment>
  );
}