import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
// import poster from "../public/ContractMe_banner.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Demo() {
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
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Interactive Demo</div>
						<iframe
							className="w-full my-4 border-2 border-blue-300 rounded-lg"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcOeKMKw3s5ijxGPxupQQDn%2FContract-Me!%3Fpage-id%3D14855%253A5765%26node-id%3D14870%253A14239%26viewport%3D337%252C48%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D14869%253A13739%26show-proto-sidebar%3D1"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Template Showcase</div>
						<iframe
							className="w-full my-4 border-2 border-blue-300 rounded-lg"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcOeKMKw3s5ijxGPxupQQDn%2FContract-Me!%3Fnode-id%3D14855%253A5765"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Conclusion</div>
						<div className="mt-2 text-lg">
							The links to the completed prototype and the template files are
							below.
						</div>
						<div className="mt-2 text-xl font-medium">Important Links</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<ListLink
								data="Template file"
								weblink="https://www.figma.com/file/brRhvhN3In9jbjXjRXK1GO/Jun-Xiong-Prototype?node-id=22%3A1116"
							/>
							<ListLink
								data="Prototype file"
								weblink="https://www.figma.com/proto/brRhvhN3In9jbjXjRXK1GO/Jun-Xiong-Prototype?page-id=0%3A1&node-id=8%3A170&viewport=337%2C48%2C0.5&scaling=scale-down&starting-point-node-id=8%3A170"
							/>
						</ol>
						<div className="mt-2 text-xl font-medium">Summary & Takeaways</div>
						<div className="mt-2 text-lg">
							Overall I learnt a lot of things from this design project and has
							helped me to improve my UI/UX skills. Some of the key takeaways
							are below:
						</div>
						<ol className="py-4 text-lg list-disc list-inside">
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
