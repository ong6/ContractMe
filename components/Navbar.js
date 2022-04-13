import Logo from "./Logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				px={4}
				fontFamily="Graphik"
				fontWeight="medium"
				fontSize="lg"
				bg={active ? "#123C69" : undefined}
				color={active ? "#EEE2DC" : inactiveColor}
				_hover={{ color: "#0560fd" }}
				_target={_target}
				{...props}>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("rgba(213, 229, 255, 0.30)", "#202023")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}>
			<Container
				display="flex"
				p={2}
				maxW="container.lg"
				wrap="wrap"
				align="center"
				justify="space-between">
				<Flex align="center" mr={5} mt={1}>
					<Logo />
				</Flex>

				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}>
					<LinkItem href="/process" path={path}>
						Design Process
					</LinkItem>
					<LinkItem href="/decisions" path={path}>
						Design Decisions
					</LinkItem>
					<LinkItem href="/demo" path={path}>
						Figma Showcase
					</LinkItem>
					<LinkItem href="/gallery" path={path}>
						Gallery
					</LinkItem>
				</Stack>

				{/* tofix */}
				<Box flex={1} align="right">
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/process" passHref>
									<MenuItem as={Link}>Design Process</MenuItem>
								</NextLink>
								<NextLink href="/decisions" passHref>
									<MenuItem as={Link}>Design Decisions</MenuItem>
								</NextLink>
								<NextLink href="/demo" passHref>
									<MenuItem as={Link}>Figma Showcase</MenuItem>
								</NextLink>
								<NextLink href="/gallery" passHref>
									<MenuItem as={Link}>Gallery</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
