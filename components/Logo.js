import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import codeImg from "../public/Logo.svg";

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 22px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	img {
		transition: 200ms ease;
	}

	&:hover img {
		transform: rotate(-5deg);
	}
`;

const Logo = () => {
	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={codeImg} width={230} alt="logo" />
					{/* <Text
						color={useColorModeValue("gray.800", "whiteAlpha.900")}
						fontFamily="Graphik, sans-serif"
						fontWeight="bold"
						ml={3}></Text> */}
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
