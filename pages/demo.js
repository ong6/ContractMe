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
				<title>Figma Showcase | ContractMe</title>
				<meta name="description" content="Figma Showcase | ContractMe" />
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
					<div className="mt-6">
						<div className="mt-2 text-xl font-medium">Design Resources Credits</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<li>
								Some components from Nucleus UI Kit
							</li>
							<li>
								Icons from Feather icons
							</li>
							<ListLink
								data="Stock images from Unsplash"
								weblink="https://unsplash.com/"
							/>
						</ol>
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
								weblink="https://www.figma.com/file/cOeKMKw3s5ijxGPxupQQDn/Contract-Me!?node-id=14855%3A5765"
							/>
							<ListLink
								data="Prototype file"
								weblink="https://www.figma.com/proto/cOeKMKw3s5ijxGPxupQQDn/Contract-Me!?page-id=14855%3A5765&node-id=14944%3A16012&viewport=337%2C48%2C0.1&scaling=min-zoom&starting-point-node-id=14944%3A16012&show-proto-sidebar=1"
							/>
						</ol>
						<div className="mt-2 text-xl font-medium">Summary & Takeaways</div>
						<div className="mt-2 text-lg">
							Overall we learnt a lot from this team project. Some of the key
							takeaways are below:
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
						<Link href="/evaluation">
							<Button colorScheme="teal" leftIcon={<BsFillCaretLeftFill />}>
								To Evaluation
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
