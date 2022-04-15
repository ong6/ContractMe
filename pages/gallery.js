import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
// import persona from "../public/persona.png";
import styles from "../styles/Home.module.css";
// import poster from "../public/ContractMe_banner.png";
// import report_example from "../public/report_example.png";
// import dashboard_example from "../public/dashboard_example.png";
// import analytics_example from "../public/analytics_example.png";
// import video_example from "../public/video_example.png";
// import teams_example from "../public/teams_example.png";
// import message_example from "../public/message_example.png";
// import template_example from "../public/template_example.png";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";
export default function Home() {
	const ListLink = ({ weblink }) => {
		return (
			<li>
				<a
					href={weblink}
					target="_blank"
					className="text-blue-500"
					rel="noreferrer">
					{weblink}
				</a>
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>ContractMe - Design Process</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Gallery</div>
						<div className="mt-2 text-lg">
							A showcase of some screens and references used to design my app.
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Poster Design</div>
						{/* <Image
							src={poster}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Persona Design</div>
						{/* <Image
							src={persona}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Dashboard Design</div>
						{/* <Image
							src={dashboard_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Analytics Design</div>
						{/* <Image
							src={analytics_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Report Design</div>
						{/* <Image
							src={report_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Video Design</div>
						{/* <Image
							src={video_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Message Design</div>
						{/* <Image
							src={message_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Template Design</div>
						{/* <Image
							src={template_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Team Design</div>
						{/* <Image
							src={teams_example}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-6 text-lg">
						<div className="text-xl font-medium">References</div>
						<ol className="py-4 mx-2 text-lg list-disc list-inside">
							<ListLink weblink="https://wandr.studio/blog/dashboard-design-principles/" />
							<ListLink weblink="https://www.datapine.com/blog/dashboard-design-principles-and-best-practices/" />
							<ListLink weblink="https://www.sisense.com/blog/4-design-principles-creating-better-dashboards/" />
							<ListLink weblink="https://www.figma.com/community/file/809559910249051285" />
							<ListLink weblink="https://www.figma.com/community/file/981909581633093086" />
							<ListLink weblink="https://www.figma.com/community/file/952435706130034963" />
							<ListLink weblink="https://www.figma.com/community/file/1088418504991825797" />
						</ol>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<Link href="/demo">
							<Button colorScheme="twitter" leftIcon={<BsFillCaretLeftFill />}>
								To Figma Showcase
							</Button>
						</Link>
						<div className=""></div>
					</div>
				</Section>
			</div>
		</div>
	);
}
