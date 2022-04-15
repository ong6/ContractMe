import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
// import analytics_example from "../public/analytics_example.png";
// import dashboard_example from "../public/dashboard_example.png";
// import report_example from "../public/report_example.png";
// import video_example from "../public/video_example.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function decisions() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ContractMe - Design Decisions</title>
				<meta name="description" content="ContractMe" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="">
				<Section delay={0.1}>
					<div className="mt-6 text-lg">
						<div className="text-2xl font-medium">Design Decisions</div>
						<div className="mt-2 text-lg">
							While working on the High-Fi prototype, I choose to split my
							sidebar mockup into the following sections:
						</div>
						<ol className="px-2 py-4 text-lg list-decimal list-inside">
							<li className="li">Dashboard - Landing page for the user</li>
							<li className="li">
								Messages - Allows user to chat with team members
							</li>
							<li className="li">
								Templates - Easy way for users to post videos across multiple
								platforms
							</li>
							<li className="li">
								Analytics - Allows user to track platform specific analytics
							</li>
							<li className="li">
								Reports - Allows users to track overall growth, performance and
								other non-video aspects
							</li>
							<li className="li">
								Team - User can manage team members, allow team members to post
								on their behalf etc, without having to give them account
								permissions
							</li>
							<li className="li">
								Videos - View all recently created videos and manage their
								individual analytics
							</li>
						</ol>
						<div className="div">
							The idea behind these 7 sections was that aside from just the
							analytics portions, the users should also be able to manage their
							team, post videos to all platforms at once and be able to
							customize their postings to suit each platform. I then decided to
							focus on the Analytics, Reports and Videos user flows to be made
							into an interactive prototype. While the rest of the sections
							where left as a static mockup
						</div>
						<div className="mt-2">
							Although I am not going to fully explore some of these sections as
							they are out of scope, I wanted fully build the framework of the
							app to show users how the different sections work together to
							create a cohesive user experience.
						</div>
						<div className="mt-2 text-xl font-medium">External Libraries</div>
						<div className="mt-2">
							I choose to make use of
							<a href="https://mui.com/" className="text-blue-500">
								{" Material UI"}
							</a>
							<a
								href="https://www.figma.com/community/file/1088418504991825797"
								className="text-blue-500">
								{", Flex UI"}
							</a>
							<a
								href="https://chartplugin.com/index.html"
								className="text-blue-500">
								{", Charts Library in Figma "}
							</a>
							to help aid in the design of the interface. That said, I want to
							dive deeper into some of the design decisions made while designing
							some of the pages.
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="mt-6 text-lg">
						<div className="text-xl font-medium">Design Theories</div>
						<div className="mt-2 text-lg">
							I decided to go with the main colors being white and blue with
							other colors being used to make other details pop. I followed
							design guidelines such as the{" "}
							<a
								href="https://www.saralynnbrennan.com/blog/the-60-30-10-design-rule#:~:text=What%20is%20the%2060%2D30,10%25%20should%20be%20an%20accent."
								className="text-blue-500">
								60, 30, 10 rule
							</a>{" "}
							for coloring and kept my design as clean and minimal as possible.
						</div>
						<div className="mt-2 text-lg">
							Before creating each interaction I kept Norman&apos;s Action model
							in mind and asked if the user intentions would match the expected
							outcome. I also took note of Shneiderman&apos;s 8 Golden Rules in
							which rules, 1 (Strive for consistency), 7 (Keep users in control)
							and 8 (Reduce short-term memory load) where especially important
							in this app.
						</div>
						<div className="mt-2 text-lg">
							Since each page is very information dense, I try to reduce the
							short term-memory load by restricting the amount of information
							the user can see at any give time. By compiling the data into one
							chunk, the user will be able to view everything at one go.
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
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
				<Section delay={0.3}>
					<div className="mt-6 text-lg">
						<div className="mt-2 text-lg">
							The dashboard was the first page created and helped me to form the
							style that I would stick with for the rest of the pages. Initially
							I experimented with more of a flat looks where all the information
							was presented linearly instead of splitting it into containers.
							However, I felt that that design would be too cluttered and may
							lead to cognitive overload.
						</div>
						<div className="mt-2 text-lg">
							Hence, I decided to keep all my items in each page as containers.
							I felt that this would make the charts and graphs less cluttered
							and give the user a feeling for spaciousness. I also split the
							layout of the page vertically giving 70% space to the graphs and
							30% space to the other information. That way, the user will easily
							be able to focus on the important information.
						</div>
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
				<Section delay={0.5}>
					<div className="mt-6 text-lg">
						<div className="mt-2 text-lg">
							The Analytics page is used to measure performance across
							platforms, this allows the user to have a high level overview of
							how their videos are performing. Most of the charts in this page
							are drawn with the charts library in Figma, with some cosmetics
							improvements by myself. The page was designed with an offset of
							graphs to reduce cognitive load. The graphs are also sized based
							on the importance and helps to present the data in a more formal
							manner.
						</div>
						<div className="mt-2 text-lg">
							All the chart data such as views, view growth and watch time are
							fields that the youtube, facebook and twitch analytics pages
							provided. So all these data fields are realistic and accurate in
							terms of what the user should be expected to see when viewing
							analytics. Due to this fact, I also decided that there would be no need to put helping ? buttons on the charts.
						</div>
					</div>
				</Section>
				<Section delay={0.6}>
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
				<Section delay={0.7}>
					<div className="mt-6 text-lg">
						<div className="mt-2 text-lg">
							The key difference between the report page and the analytics page
							is that they represent the different types of data. While the
							analytics page is for representing the video data, the report page
							is more for business data. This enables users to see how their
							videos are doing from a business perspective.
						</div>
						<div className="mt-2 text-lg">
							As with the analytics page, the charts are drawn with the charts
							library and represent real data that can be gotten from each
							platform. I also decided to split out some of the data such as
							growth, profits, time viewed and subscriber rates where users can
							switch between the tabs to view different data. I did this to help
							categorize the data so users won&apos;t feel too overwhelmed by
							the amount of data.
						</div>
					</div>
				</Section>
				<Section delay={0.8}>
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
				<Section delay={0.9}>
					<div className="mt-6 text-lg">
						<div className="mt-2 text-lg">
							Finally, we have the video page. This page can be used by creators
							to help manage their past videos, post new videos and view their
							current videos. The page shows which platforms users have posted
							to, the number of views each video got, the name and description
							of the videos in a list format. The list format was choose to
							allow of displaying of more details than a card format while being
							easier to sort through the date, views and other field.
						</div>
						<div className="mt-2 text-lg">
							Users can also view individual videos analytics from this page by
							clicking the three dots at the action area to open a small pop up
							menu.
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<Link href="/process">
							<Button colorScheme="twitter" leftIcon={<BsFillCaretLeftFill />}>
								To Design Process
							</Button>
						</Link>
						<Link href="/demo">
							<Button
								colorScheme="twitter"
								rightIcon={<BsFillCaretRightFill />}>
								To Figma Showcase
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
