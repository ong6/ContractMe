import { Box } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box align="center" opacity={0.4} fontSize="sm" pt={8}>
			&copy; {new Date().getFullYear()} CS3240 Team 15 - ContractMe
		</Box>
	);
};

export default Footer;