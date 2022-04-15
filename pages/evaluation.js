import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
// import analytics_example from "../public/analytics_example.png";
// import dashboard_example from "../public/dashboard_example.png";
// import report_example from "../public/report_example.png";
import affinity_diagram from "../public/affinity_diagram.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Evaluation() {
	const ListLink = ({ weblink, label }) => {
		return (
			<li>
				<a
					href={weblink}
					target="_blank"
					className="text-blue-500"
					rel="noreferrer">
					{label}
				</a>
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Evaluation | ContractMe</title>
				<meta name="description" content="User Research | ContractMe" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Section delay={0.1}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-2xl font-medium">
						User Study and Analysis
					</div>
					<div className="mt-2 text-lg">
						In this section we will be looking at a high-level summary of the
						user research process. To view a more in-depth version of our user
						research steps, please view the main document{" "}
						<a
							href={
								"https://docs.google.com/document/d/1E_OUWJjxPEL88tFPlLIUq07XI0RHtSvggV27suP68UQ/edit#"
							}
							target="_blank"
							className="text-blue-500"
							rel="noreferrer">
							here
						</a>
						.
					</div>
					<div className="mt-2 text-xl font-medium">Primary Users</div>
					<div className="mt-2 text-lg">
						We aim to help homeowners / household members who may lack
						experience handling household problems before or find it
						inconvenient to source for contractors when they need one. We have
						identified them as they are a group that might have the most pain
						points going through the home-repair process. As aforementioned,
						most problems arise from ignorance. With them not having much
						experience in such issues and in the interest of saving time, they
						are likely to benefit most from our project. Some of the sub user
						groups include:
					</div>
					<ol className="pt-4 text-lg list-disc list-inside">
						<li className="li">
							<b>Inexperienced</b>: First-time homeowners/household members
							(never had experience with contractors before)
						</li>
						<li className="li">
							<b>Experienced</b>: Seasoned homeowners/household members (have
							used contractors before)
						</li>
					</ol>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Recruitment methods</div>
					<div className="mt-2 text-lg">
						We recruited our primary users by using the following methods:
					</div>
					<ol className=" pt-4 text-lg list-disc list-inside">
						<li className="li">
							Contact homeowners through family and friends.
						</li>
						<li className="li">
							Making use of social media such as Telegram channels with a large
							user base.
						</li>
						<li className="li">
							Using Instagram to reach out to find people in our user group to
							help do surveys.
						</li>
					</ol>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Sampling Methods</div>
					<div className="mt-2 text-lg">
						The following sampling methods were utilized to assist us in
						preliminary market research by helping us to get insights on whether
						there are sufficient pain points that drive a need for an
						application with contractors.
					</div>
					<ol className=" pt-4 text-lg list-disc list-inside">
						<li className="font-semibold">Convenience sampling</li>
						<li className="font-semibold">Snowball sampling</li>
					</ol>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">
						Hypothesis and Assumptions
					</div>
					<div className="mt-2 text-lg">
						We listed out some initial hypotheses around the problem space that
						we intend to tackle. We can test these hypotheses in our user study
						to get a idea of what the homeowners might be looking for.
					</div>
					<ol className=" pt-4 text-lg list-decimal list-inside">
						<li className="font-base">
							Getting contractor help is the typical solution when homeowners
							face home repair issues
						</li>
						<li className="font-base">It is hard to find a contractor</li>
						<li className="font-base">
							It is difficult to identify the problem
						</li>
						<li className="font-base">
							It is tedious to identify who is the right contractor for a given
							problem
						</li>
						<li className="font-base">
							Pricing transparency/Prices can greatly influence a
							homeowners&apos; decision to hire a particular contractor
						</li>
					</ol>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">
						Study Methods & Rationale
					</div>
					<div className="mt-2 text-lg">
						We performed 3 main types of study methods:
					</div>
					<ol className=" py-4 text-lg list-disc list-inside">
						<li className="font-semibold">Survey</li>
						<li className="font-semibold">Interviews</li>
						<li className="font-semibold">Contextual Inquiry</li>
					</ol>
					<div className="mt-2 text-lg">
						These study methods helped us to gather useful information about the
						users and helped us gauge the interest in our proposed solutions by
						getting a clear understanding of their pain points.
					</div>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">User Study Results</div>
					<div className="mt-2 text-lg">
						The results gathered from the user study are represented below:
					</div>
					<ol className=" py-4 text-lg list-disc list-inside">
						<ListLink
							label="Homeowner survey"
							weblink="https://docs.google.com/spreadsheets/u/2/d/12_A-0hpFUHZepr7lI46T84s7HnUyOxDqCJZ1AoRsVxM/edit"></ListLink>
						<ListLink
							label="Contractor survey"
							weblink="https://docs.google.com/spreadsheets/u/2/d/1Y0CWQFrAGzc6inu0usH1jckH298dfyf1JAAqrdFcv68/edit"></ListLink>
						<ListLink
							label="Homeowner Interview"
							weblink="https://docs.google.com/spreadsheets/d/1ziPHYSsJbBBcknGOqiurFRh9x2xFd6ZsdGWGOTS82PY/edit?usp=sharing"></ListLink>
					</ol>
					<div className="mt-2 text-lg">
						In general, most homeowners live in either HDBs or Condominiums. In
						general, these types of housing have less issues/ lesser need for
						contractors or maintenance as compared to landed properties.
						However, this is still a good estimate of homeowners since the
						majority of Singaporeans do not stay in landed properties.
					</div>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">
						Overall Findings and Analysis
					</div>
					<div className="mt-2 text-lg">
						Having collated all the results from the various forms of study
						methods, we took note of the trends and patterns we have noticed and
						created an affinity diagram from the data in order to get a better
						understanding of our users. Based on our user research methods,
						utilizing user interviews, contextual inquiries and surveys, we will
						present and analyses our findings below.
					</div>
					<Image
						src={affinity_diagram}
						alt="ContractMe"
						placeholder="blur"
						className="rounded-lg"
					/>
					<div className="text-center">
						<a
							href={
								"https://www.figma.com/file/4TMANO71v4ZeBwhPQfGwo6/G1-Affinity-Diagram?node-id=0%3A1"
							}
							target="_blank"
							className="text-blue-500"
							rel="noreferrer">
							Full Affinity Diagram
						</a>
					</div>
					<div className="mt-2 text-lg">
						We have taken the findings from our user research, namely user
						statements, key observations, design ideas and grouped them based on
						their similarities and trends.
					</div>
					<div className="mt-2 text-lg">
						From there, we came up with 6 main groups (blue note) where each
						yellow note belonged to.
					</div>
					<ol className=" py-4 text-lg list-decimal list-inside">
						<li className="font-semibold">
							Pricing and pricing transparency is important to me
						</li>
						<li className="font-semibold">
							Trustworthiness and reliability of contractors are important to me
						</li>
						<li className="font-semibold">
							Having a good selection of contractors is important to me
						</li>
						<li className="font-semibold">
							Referral and returned customers are channels for me to get
							contracts
						</li>
						<li className="font-semibold">
							I try to self diagnose the issues first
						</li>
						<li className="font-semibold">I want the service to be fast</li>
					</ol>
					<div className="mt-2 text-lg">
						From this process, we managed to identify certain pain points and
						key considerations of our target users and will be able to make
						actionable decisions based on these results. Moving on to the next
						level in the hierarchy, we further distilled these 6 main groups
						(blue note) into 2 higher-level groups (pink note).{" "}
					</div>
					<ol className=" py-4 text-lg list-decimal list-inside">
						<li className="font-semibold">Pricing matters to me</li>
						<li className="font-semibold">
							Quality of contractor service is important to me
						</li>
					</ol>
					<div className="mt-2 text-lg">
						In conclusion, after the affinity diagram process we have managed to
						distill 2 high-level concepts that our primary user group,
						homeowners value. From these 2 high-level concepts, we have 6 main
						concepts that further define and shape what kind of features or
						tasks a user expects to accomplish with our application. Based on
						our user study and analysis of the results, we will be able to craft
						scenarios and storyboards that a potential user will most likely go
						through while using our application to solve their needs. Further
						down the design process, these results will then shape the designs
						and features that will be in our wireframes and prototypes.
					</div>
				</div>
			</Section>
			<Section delay={0.7}>
				<div className="flex items-center justify-between">
					<Link href="/">
						<Button colorScheme="teal" leftIcon={<BsFillCaretLeftFill />}>
							To Introduction
						</Button>
					</Link>
					<Link href="/demo">
						<Button colorScheme="teal" rightIcon={<BsFillCaretRightFill />}>
							To Figma Showcase
						</Button>
					</Link>
				</div>
			</Section>
		</div>
	);
}
