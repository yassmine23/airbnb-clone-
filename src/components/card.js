import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";



import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import { FaRegHeart } from 'react-icons/fa';




export default function MainCard() {
  return (
    <>
      <Link href="details">
    
      <Card sx={{ maxWidth: 280, borderRadius:2,  }}  >
        
     
        <CardMedia
          component="img"
          height="270"
          image="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt="green iguana"
        />
        <Box sx={{position:'relative', bottom:'250px', left:'230px'}}>
        <FaRegHeart size={24} color="#fff" />
      </Box>
      
        <CardContent>
          {/* <Stack direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}> */}
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Nordland, Norway
            <IconButton style={{ position: "static", right: 10, bottom: 0, zIndex: 10  }}
         
        >
          <StarIcon color="warning"/>
        </IconButton> 
          </Typography>
          
           {/* </Stack>  */}
          <Typography variant="body2" color="text.secondary">
            Individual Host
          </Typography>
          <Typography variant="body2" color="text.secondary">
            6-11 may{" "}
          </Typography>
          <Link
            
            underline="always"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {"$ 1,350 total"}
          </Link>

          
        </CardContent>
      </Card>
      </Link>
    </>
  );
}
