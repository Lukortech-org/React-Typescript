import * as React from "react"

import Box from "@mui/material/Box"
import photo1 from "../../images/photo1.jpg"

export default function Section(props: any) {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "white",
      }}
    >
      {props.children}
    </Box>
  )
}
