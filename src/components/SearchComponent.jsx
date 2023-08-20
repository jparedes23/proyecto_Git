import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'

export const SearchComponent = () => {

const [search, setSearch] = useState(null)
const [user, setUser] = useState({})

const fetchUser = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${search}`)
        const data = await response.json();
        setUser(data)
    } catch (error) {
        console.log("error", error.message)
    }
}



  return (
    <div>
      <Container>
        <TextField
        label="search"
        variant='outlined'
        onChange={(e)=>setSearch(e.target.value)}
        >

        </TextField>

        <Button variant='contained' onClick={fetchUser}>Buscar</Button>
      </Container>
      <Container>
        {user && (
           <Card
           sx={{
               transition:"0.2s",
               "&:hover":{
                   transform:"scale(1.05)",
               }
           }}
           >
           <CardActionArea>
           <CardMedia
               component="img"
               image={user.avatar_url}
               height="200"
               alt="descripcion"
               />
           <CardContent>
               <Typography variant="h5">Card Tittle</Typography>
               <Typography component='p' variant="body2">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum, fuga quibusdam porro architecto nesciunt, sed distinctio dolorum, voluptas nobis perspiciatis veniam illum ex necessitatibus. Sapiente laudantium officia cupiditate quas.
               </Typography>
           </CardContent>
           
           </CardActionArea>
       </Card>
        )}

      </Container>

    </div>
  )
}
