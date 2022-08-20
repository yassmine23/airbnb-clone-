import React  from 'react';
import { useSelector } from 'react-redux';
import Box, { BoxProps } from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { positions } from '@mui/system';
import { spacing } from '@mui/system';
import { useTranslation } from "react-i18next";


function Item(props:BoxProps ) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Home() {
  const { t } = useTranslation();

  var dataDetails = useSelector((state)=>state.requestDetail.details);
  console.log(dataDetails)

  return (
<>   
<div className='container' style={{position: 'relative',}}>
{/* <h1>Nature Observatory om Secluded Island</h1> */}
<h1>{dataDetails.description}</h1>
  {/* <Box style={{ textDecoration:'underLine'}} sx={{ mb: 2 }}> <StarIcon/>4.71.43{t("reviews")} . Badachor,Scotland,UnitedKingdom</Box> */}
  <Box style={{ textDecoration:'underLine'}} sx={{ mb: 2 }}> <StarIcon/>4.71.43{t("reviews")} . {dataDetails.address}</Box>
 <span style={{position: 'absolute',top: 65, right: '7%',textDecoration:'underLine'}}> <IosShareIcon/>{t("share")} </span>
<span style={{position: 'absolute',top: 65, right: '0%',textDecoration:'underLine'}}> <FavoriteBorderIcon/> {t("save")} </span>
</div>

        <div style={{ width: '100%' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gridTemplateRows: 'repeat(2, 200px)',
                  // gap: 1,
                }}
              >
                {/* <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}><img width='500px' height='380px' src='https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720'/></Item> */}
                <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}><img width='500px' height='380px' src={dataDetails.Url}/></Item>
                {/* <Item><img width='300px' height='180px' src='https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720'/></Item> */}
                <Item><img width='300px' height='180px' src={dataDetails.Url2}/></Item>
                {/* <Item><img width='300px' height='180px' src='https://a0.muscache.com/im/pictures/ca4e39b3-ab0f-4a0e-b10f-7297bd4db5da.jpg?im_w=720'/></Item> */}
                <Item><img width='300px' height='180px' src={dataDetails.Url3}/></Item>
                {/* <Item><img  width='300px' height='180px' src='https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720'/></Item> */}
                <Item><img  width='300px' height='180px' src={dataDetails.Url4}/></Item>
                {/* <Item><img width='300px' height='180px' src='https://a0.muscache.com/im/pictures/75607a14-a5ce-474a-a316-15ecaed1fbe9.jpg?im_w=720'/></Item> */}
                <Item><img width='300px' height='180px' src={dataDetails.Url5}/></Item>
              </Box>
            </div>
      
    </>
  )
}



