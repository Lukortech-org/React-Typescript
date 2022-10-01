import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./navbar.css";
import Palette from "./palette";

export default function DenseAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='default'
				className='navbar'
				style={{
					marginTop: "36px",
					marginLeft: "95px",
					marginRight: "95px",
					height: "74px",
					width: "auto",
				}}>
				<Typography
					variant='h6'
					noWrap
					component='a'
					href='/'
					sx={{
						mr: 2,
						display: { xs: "none", md: "flex" },
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						edge: "start",
						textDecoration: "none",
						marginLeft: "50px",
						alignItems: "center",
						textAlign: "center",
					}}>
					place for a logo
				</Typography>
				<Toolbar
					variant='dense'
					disableGutters
					style={{
						display: "absolute",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						backgroundColor: "CCE5FF",
					}}>
					{/* <IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton> */}
					<Typography variant='h6' color='inherit' component='div'>
						<img src='../images/{logo}'></img>
					</Typography>
					<Stack direction='row' spacing={2}>
						<Button disabled>HOME</Button>
						<Button disabled>ABOUT</Button>
						<Button disabled>PRICING</Button>
					</Stack>
					<img src='../images/295728976_642844134094959_654711969917376821_n.png'></img>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
