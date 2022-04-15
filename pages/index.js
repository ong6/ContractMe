import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/cover.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import Link from "next/dist/client/link";
import Team from "../components/Team";
import doublediamonddesignprocess from "../public/doublediamonddesignprocess.png";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | ContractMe</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="">
				<Section delay={0.1}>
					<div className="flex justify-center py-4 mt-6 text-xl">
						<Image
							src={poster}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Introduction</div>
						<div className="mt-2 text-xl font-medium">Design Problem</div>
						<div className="mt-2 text-lg">
							When home maintenance is required, homeowners tend to experience
							various pain points throughout the entire home-repair process.
							This includes:
						</div>
						<ol className="py-4 text-lg list-inside">
							<li className="li">
								1. Identifying the problem that requires fixing
							</li>
							<li className="li">
								2. Looking for a suitable contractor to help them and
							</li>
							<li className="li">
								3. Communicating effectively with them to resolve the problem.
							</li>
						</ol>
						<div className="mt-2 text-lg">
							These underlying issues around acquiring home repair services are
							currently not well-tackled and we feel that our project could
							breathe new life into this large but neglected market. As such, we
							will be looking into ways in which we could streamline the process
							of looking for a contractor to help with home maintenance.
						</div>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-4 text-lg">
						<div className="mt-2 text-xl font-medium">Our Solution</div>
						<div className="mt-2 text-lg">
							ContractMe! is a mobile application that aims to connect
							homeowners to quality contractors and services through our
							powerful and intuitive features. Contractors can list their
							services and home owners can look though the listings and pick out
							the ones most suited for them! &quot;But, what if I don&apos;t
							know what my problem is?&quot; you may ask. Worry not! ContractMe
							has a built in identification service for users to easily identify
							and look up their problem!
						</div>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-4 text-lg">
						<div className="mt-2 text-xl font-medium">
							Overview of this website
						</div>
						<div className="mt-2">
							We'll be walking you through our design process from all stages.
							We will follow the double diamond design process showcase the
							decisions we made before finally showing you our final product.
						</div>
						<div className="text-center">
							<Image
								src={doublediamonddesignprocess}
								alt="ContractMe"
								placeholder="blur"
								className="rounded-lg"
							/>
						</div>
						<div className="mt-2">
							A disclaimer that this project portfolio is meant to show a high
							level overview of what we've achieved, to view a more in-depth
							version of our user research steps, please take a look at our main
							document{" "}
							<a
								href={
									"https://docs.google.com/document/d/1E_OUWJjxPEL88tFPlLIUq07XI0RHtSvggV27suP68UQ/edit#"
								}
								target="_blank"
								className="text-blue-500"
								rel="noreferrer">
								here
							</a>
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<Team />
				</Section>
				<Section delay={1}>
					<div className="flex items-center justify-between">
						<div className="div"></div>
						<Link href="/user">
							<Button colorScheme="teal" rightIcon={<BsFillCaretRightFill />}>
								To User Research
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
