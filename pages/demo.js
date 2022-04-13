import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/ContractMe_banner.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Home() {
	const ListLink = ({ weblink, data }) => {
		return (
			<li>
				<a
					href={weblink}
					target="_blank"
					className="text-blue-500"
					rel="noreferrer">
					{data}
				</a>
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>ContractMe - Figma Showcase</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Interactive Demo</div>
						<iframe
							className="my-4 border-2 border-blue-300 rounded-lg w-full"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbrRhvhN3In9jbjXjRXK1GO%2FJun-Xiong-Prototype%3Fpage-id%3D0%253A1%26node-id%3D30%253A4415%26viewport%3D337%252C48%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D8%253A170"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Template Showcase</div>
						<iframe
							className="my-4 border-2 border-blue-300 rounded-lg w-full"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbrRhvhN3In9jbjXjRXK1GO%2FJun-Xiong-Prototype%3Fnode-id%3D0%253A1"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Conclusion</div>
						<div className="text-lg mt-2">
							The links to the completed prototype and the template files are
							below.
						</div>
						<div className="text-xl font-medium mt-2">Important Links</div>
						<ol className="text-lg list-decimal list-inside py-4">
							<ListLink
								data="Template file"
								weblink="https://www.figma.com/file/brRhvhN3In9jbjXjRXK1GO/Jun-Xiong-Prototype?node-id=22%3A1116"
							/>
							<ListLink
								data="Prototype file"
								weblink="https://www.figma.com/proto/brRhvhN3In9jbjXjRXK1GO/Jun-Xiong-Prototype?page-id=0%3A1&node-id=8%3A170&viewport=337%2C48%2C0.5&scaling=scale-down&starting-point-node-id=8%3A170"
							/>
						</ol>
						<div className="text-xl font-medium mt-2">Summary & Takeaways</div>
						<div className="text-lg mt-2">
							Overall I learnt a lot of things from this design project and has
							helped me to improve my UI/UX skills. Some of the key takeaways
							are below:
						</div>
						<ol className="text-lg list-disc list-inside py-4">
							<li className="li">
								Figma Skills - How to use overlays to make interactive
								prototypes more robust
							</li>
							<li className="li">
								Figma Skills - How to use components and variants effectively to
								make a wide range of adaptable interfaces
							</li>
							<li className="li">
								Design Skills - How to properly balance color, style and design
							</li>
							<li className="li">
								Design Skills - How to layout a dashboard to reduce cognitive
								load
							</li>
							<li className="li">
								Design Skills - User requirements and Prototype building
							</li>
							<li className="li">
								Design Skills - Application of design principles
							</li>
						</ol>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<Link href="/decisions">
							<Button colorScheme="twitter" leftIcon={<BsFillCaretLeftFill />}>
								To Design Decisions
							</Button>
						</Link>
						<Link href="/gallery">
							<Button
								colorScheme="twitter"
								rightIcon={<BsFillCaretRightFill />}>
								To Gallery
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
