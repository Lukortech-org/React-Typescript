import "./animation.css";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MyComponents from "./animation";
import Palette from "../palette";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";
import logo from "../../images/logo.svg";
import { motion } from "framer-motion";
import { useScrollPosition } from "react-use-scroll-position";
import { useState } from "react";
import wave from "../../images/wave.png";

interface NavLinkPropsI {
	to: string;
	label: string;
	children?: NavLinkPropsI[];
}

const pages: NavLinkPropsI[] = [
	{ label: "Home", to: "/home" },
	{ label: "About", to: "/about" },
	{ label: "Pricing", to: "/pricing" },
];
const settings = ["Profile", "Settings", "Logout"];
const drawerWidth = 240;

export const ResponsiveAppBarFullWidth: React.FC<{ window?: () => Window }> = ({
	window,
}) => {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);
	const { y } = useScrollPosition();

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const DrawerInnards: React.FC = () => (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				Lukortech-org
			</Typography>
			<Divider />
			<List>
				{pages.map(page => (
					<ListItem key={page.label} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText
								primary={
									<Link
										style={{ textDecoration: "inherit", color: "inherit" }}
										to={page.to}>
										{page.label}
									</Link>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex", overflow: "hidden" }}>
			{/* TODO: Animation should be here instead of TRANSITION - for @Sebucha to figure it out. */}
			<MyComponents>
				<Palette>
				<AppBar  style={{color: "primary.main"}} position={y < 50 ? "sticky" : "fixed"}>
					<Container maxWidth='xl'>
						<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: "none" } }}>
								<MenuIcon />
							</IconButton>
							<Box>
								<img
									src={logo}
									alt='logo'
									style={{
										height: "auto",
										width: "100%",
									}}
								/>
							</Box>
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: "none", md: "flex" },
									justifyContent: "space-around",
								}}>
								{pages.map(page => (
									<Button
										key={page.label}
										sx={{ my: 2, color: "white", display: "block" }}>
										<Link
											style={{
												color: "inherit",
												textDecoration: "inherit",
												fontFamily: "inherit",
											}}
											to={page.to}>
											{page.label}
										</Link>
									</Button>
								))}
							</Box>
							<Box sx={{ flexGrow: 0 }}>
								<Box>
									<img
										src={wave}
										alt='gradient purple wave'
										style={{
											...{
												height: "auto",
												width: "auto",
												zIndex: -1,
												position: "absolute",
											},
											...(y < 50
												? {
														transform: "translate(-62%, -46%) scale(.4)",
												  }
												: {
														transform: "translate(-56%, -56%) scale(.475)",
														height: "auto",
														width: "auto",
														zIndex: -1,
														position: "absolute",														
												  }),
										}}
									/>
									<Tooltip title='Open settings'>
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Avatar
												alt='Remy Sharp'
												src='/static/images/avatar/2.jpg'
											/>
										</IconButton>
									</Tooltip>
								</Box>

								<Menu
									sx={{ mt: "45px" }}
									id='menu-appbar'
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}>
									{settings.map((setting, index) =>
										index !== setting.length - 1 ? (
											<MenuItem key={setting} onClick={handleCloseUserMenu}>
												<Typography textAlign='center'>{setting}</Typography>
											</MenuItem>
										) : (
											<>
												<Divider variant='middle' />
												<MenuItem key={setting} onClick={handleCloseUserMenu}>
													<Typography textAlign='center'>{setting}</Typography>
												</MenuItem>
											</>
										)
									)}
								</Menu>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
				</Palette>
			</MyComponents>

			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					<DrawerInnards />
				</Drawer>
			</Box>
		</Box>
	);
};

export default ResponsiveAppBarFullWidth;
