import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/favicon.png" />
				<link rel="icon" href="/favicon.ico" />
				<title>Homepage</title>
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="5xl" pt={14}>
				{children}
				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
