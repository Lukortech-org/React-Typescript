import * as React from "react"

import { Box, Container } from "@mui/system"

import Grid from "@mui/material/Grid"
import { useScrollPosition } from "react-use-scroll-position"
import whiteBlock from "../../images/whiteBlock.png"
import whiteWave from "../../images/whiteWave.png"

export default function CustomContainer() {
  const { y } = useScrollPosition()

  const imageStyle: React.CSSProperties = {
    ...{
      height: "auto",
      width: "auto",
      position: "absolute",
    },
    ...(y < 50
      ? {
          transform: "translate(-62%, -46%) scale(1)",
        }
      : {
          transform: "translate(-56%, -56%) scale(.85)",
          height: "auto",
          width: "auto",
          position: "absolute",
        }),
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        maxWidth="xl"
        justifyContent="center"
        alignItems="center"
        //   sx={{minWidth:{
        // 	padding:"0"
        //   },
        //   				height: '80vh',
        // 				width:"100%",
        // 				display:"flex",
        // 				textAlign:"center",
        // 				justifyContent:"center",
        // 				alignItems:"center",
        // 				flexDirection:"column"}}
      >
        {/* <Box sx={{ 	bgcolor: 'white',
					height: '80vh',
					width:"100%",
					display:"flex", 
					textAlign:"center", 
					justifyContent:"center", 
					alignItems:"center", 
					padding:"0"}} > */}
        <Box sx={{}}>
          <img
            src={whiteWave}
            alt="white Wave"
            // style={imageStyle}
          />
        </Box>

        <Box sx={{}}>
          <img
            src={whiteBlock}
            alt="white Block"
            // style={imageStyle}
          />
        </Box>

        {/* </Box> */}
      </Grid>
    </React.Fragment>
  )
}
