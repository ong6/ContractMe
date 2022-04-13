import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/ContractMe_banner.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ContractMe</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Introduction</div>
						<div className="text-lg mt-2">
							With the growth of social media, more and more creators have
							picked up video creation as either a hobby or a full-time job. To
							keep up with this, more and more platforms for posting videos have
							come up in the recent years and having to manage all of them can
							be a hassle. We want to remedy this by introducing our social
							media manager:
						</div>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex justify-center py-4 text-xl">
						<Image
							src={poster}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="text-lg mt-4">
						<div className="text-lg mt-2">
							ContractMe is a social media manager targeted primarily at users
							whose main form of content is in videos. ContractMe helps to keep
							track of the analytics across all video platforms such as YouTube,
							twitch, Instagram, TikTok and more!
						</div>
						<div className="mt-2">
							Furthermore, ContractMe allows the management of videos as well as
							the tracking of growth across the different platforms and presents
							all data in visually appealing bar charts, graphs, and pie charts.
							This allows the user to worry less about their analytics and focus
							more on video production.
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<div className="div"></div>
						<Link href="/process">
							<Button
								colorScheme="twitter"
								rightIcon={<BsFillCaretRightFill />}>
								To Design Process
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
