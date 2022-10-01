import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { CardMedia } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./navbar.css";
// import Palette from "./palette";
import logo from "../images/logo.svg";
import wave from "../images/wave.png";

export default function DenseAppBar() {
	return (
		<Box sx={{ flexGrow: 1, display: "inline" }}>
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
					borderRadius: "7px",
				}}>
				<Toolbar
					variant='dense'
					disableGutters
					style={{
						backgroundColor: "CCE5FF",
						paddingTop: "13px",
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
					}}>
					<img
						src={logo}
						alt='logo'
						style={{
							height: "50px",
							paddingBottom: "12px",
							paddingRight: "350px",
						}}
					/>
					<Stack direction='row' spacing={2} style={{}}>
						<Button disabled>HOME</Button>
						<Button disabled>ABOUT</Button>
						<Button disabled>PRICING</Button>
					</Stack>
					<img
						src={wave}
						style={{
							display: "block",
							height: "74px",
							position: "sticky",
							paddingBottom: "12px",
							width: "300px",
							left: "71.6%",
							right: "-89.9%",
						}}
					/>
					<button style={{}}>Sign in </button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
