import { Button } from "@chakra-ui/react";
import Link from "next/dist/client/link";
import Head from "next/head";
import Image from "next/image";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Section from "../components/Sections";
// import persona from "../public/persona.png";
// import wireframe_01 from "../public/wireframe_01.png";
// import wireframe_02 from "../public/wireframe_02.png";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ContractMe - Design Process</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Design Process</div>
						<div className="mt-2 text-lg">
							Before starting the design process, I had to identify who my app
							was going to be for. Below are the steps I took to gather the user
							requirements as well as my prototyping stage.
						</div>
						<div className="mt-2 text-xl font-medium">Primary User Group</div>
						<ol className="py-4 text-lg list-disc list-inside">
							<li className="li">
								Social media users who are focused on video content
							</li>
							<li className="li">
								Looking for a way to manage all their videos in one place
							</li>
							<li className="li">
								Primarily use a laptop/ desktop for video production and editing
							</li>
							<li className="li">Making money from producing videos</li>
						</ol>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="text-xl font-medium">Persona</div>
					<div className="flex justify-center py-4 text-xl">
						{/* <Image
							src={persona}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="mt-6 text-lg">
						<div className="text-xl font-medium">User Tasks</div>
						<div className="mt-2 text-lg">
							Then based on this user group and the persona, I came up with the
							following user tasks.
						</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<li className="li">
								I want to have a daily report with all my statistics across all
								social media platforms.
							</li>
							<li className="li">
								I want to be able to view the videos posted to each platform in
								one place.
							</li>
							<li className="li">
								I want to be able to see analytics data for each platform
								without having to go to each of them separately.
							</li>
						</ol>
						<div className="text-xl font-medium">Lo-Fi Prototyping</div>
						<div className="div">
							From these user tasks, I determined that a web application with a
							dashboard style would suit this product the best and since most
							video creators have to interact with websites, it would be a
							complementary addition to their workflow.
						</div>
						<div className="mt-2">
							I then listed out a few key screens and features that I wanted to
							include in my prototypes.
						</div>
						<ol className="py-4 text-lg list-disc list-inside">
							<li className="li">Dashboard to view all information</li>
							<li className="li">
								Teams panel to manage team members - Since nowadays video
								creators work with a large team of members
							</li>
							<li className="li">Nice looking charts</li>
							<li className="li">
								Beautiful to look at, and navigable reports
							</li>
							<li className="li">List of videos</li>
							<li className="li">Video analytics and management tools</li>
						</ol>
						<div className="mt-2">
							I then hand drew simple wireframes to represent each user task to
							get a clearer image of what it was going to look like. After a few
							iterations, I ended up with the following storyboards:
						</div>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Storyboard 1</div>
						{/* <Image
							src={wireframe_01}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Storyboard 2</div>
						{/* <Image
							src={wireframe_02}
							alt="ContractMe"
							placeholder="blur"
							className="rounded-lg"
						/> */}
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="mt-4 text-lg">
						<div className="mt-2 text-lg">
							After designing the Storyboards I devised a user flow that would
							fit with the design of the app.
						</div>
						<div className="mt-2 text-xl font-medium">
							User Flow 1 - Analytics
						</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<li className="li">
								User logs in with their account and is redirected to the
								dashboard.
							</li>
							<li className="li">
								User can choose to view the videos they have posted or view the
								analytics data.
							</li>
							<li className="li">
								User chooses to view the analytics data and see a page
								containing a few graphs and can choose the video platform they
								wish to see the data for.
							</li>
						</ol>
						<div className="mt-2 text-xl font-medium">User Flow 2 - Report</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<li className="li">
								User logs in with their account and is redirected to the
								dashboard.
							</li>
							<li className="li">
								User goes to the Report page to view the business data for the
								day.
							</li>
							<li className="li">
								User is able to clearly and easily pick out information they
								need.
							</li>
							<li className="li">
								User can toggle between different reports and see the relevant
								data.
							</li>
						</ol>
						<div className="mt-2 text-xl font-medium">User Flow 3 - Videos</div>
						<ol className="py-4 text-lg list-decimal list-inside">
							<li className="li">
								User logs in with their account and is redirected to the
								dashboard.
							</li>
							<li className="li">
								User goes to the Videos page to view the previously uploaded
								videos and scheduled videos
							</li>
							<li className="li">
								User is able to clearly see the view data, the thumbnail, and
								the title of the video from the list.
							</li>
							<li className="li">
								User can then view the analytics of each video in the list.
							</li>
						</ol>
						<div className="mt-2">
							I then moved on to evaluate some of the past designs I created.
						</div>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-4 text-lg">
						<div className="text-xl font-medium">Design Findings</div>
						<div className="mt-2 text-lg">
							Some of the design decisions I weighed while working on the
							wireframe:
						</div>
						<ol className="py-4 text-lg list-disc list-inside">
							<li className="li">
								Using a dashboard style vs using a traditional style webpage.
							</li>
							<li className="li">
								The relevant tabs on the sidebar, should the side bar be
								collapsable
							</li>
							<li className="li">
								Usage of graphs and if they add value to the user especially
								when some data can be represented as values instead of graphs.
							</li>
						</ol>
						<div className="mt-2">
							In the end I choose to keep the dashboard style since it felt more
							functional especially when the user will want to be able to switch
							between different tabs conveniently. This also helps the user to
							be able to see the data in a more organized way.
						</div>
						<div className="mt-2">
							Once these steps where done, I started to design the High-Fi
							version of the web application on Figma.
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<Link href="/">
							<Button colorScheme="twitter" leftIcon={<BsFillCaretLeftFill />}>
								To Home
							</Button>
						</Link>
						<Link href="/decisions">
							<Button
								colorScheme="twitter"
								rightIcon={<BsFillCaretRightFill />}>
								To Design Decisions
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
