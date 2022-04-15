import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/cover.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import Link from "next/dist/client/link";
import Team from "../components/Team";

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
							The first pain point is due to the community’s general lack of
							expertise in the field of home repair. This is sometimes due to
							the nature of home repair issues that can be infrequent but still
							require urgent attention. As such, when the need arises, a lot of
							time is wasted on figuring out what went wrong and the right kind
							of contractor to seek to help with their issue.
						</div>
						<div className="mt-2 text-lg">
							Thereafter, the second pain point was identified due to the hidden
							prices of such services. Contractors have no easy means of listing
							a price due to the nature of the service. Thus, customers have to
							personally contact the contractors to figure out the prices. This
							can be a tedious process for both parties. Customers will have to
							reach out to multiple contractors on various platforms to attain
							the best deal whereas the contractors will have to create multiple
							quotations with no guarantee of securing the deal. This could lead
							to a lot of frustration for both parties.
							<div className="mt-2 text-lg">
								The final pain point arises from the lack of ability to clearly
								communicate the problem to contractors. Customers who are unable
								to identify the root cause of the issue cannot do better at
								describing it. Worse, in most situations customers rely on
								verbal or textual communication that may not be able to share
								important information about the issue. As a result, contractors
								are unable to give an accurate quotation without being able to
								accurately determine the amount of work to be done. This easily
								leads to miscommunication or unnecessarily long back-and-forth
								between the parties. Consequently, this incurs opportunity costs
								for both parties where customers are incurring lost time from
								getting the problem fixed in place of discussions and
								contractors wasting time on customers who are still trying to
								figure out the problem in place of communicating with other
								customers who are able to confirm the need for their services.
							</div>
							<div className="mt-2 text-lg">
								These underlying issues around acquiring home repair services
								are currently not well-tackled and we feel that our project
								could breathe new life into this large but neglected market. As
								such, we will be looking into ways in which we could streamline
								the process of looking for a contractor to help with home
								maintenance.
							</div>
						</div>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-4 text-lg">
						<div className="mt-2 text-xl font-medium">Proposed Solution</div>
						<div className="mt-2 text-lg">
							We will be creating an intuitive and fuss-free application
							platform called <b>ContractMe!</b> for our primary target groups
							to connect with each other and streamline the transaction
							processes including payments as well as communication between the
							two parties.
						</div>
						<div className="mt-2">
							With the younger homeowners, we aim to design a platform that
							would allow them to accurately and intuitively identify and direct
							them to the right contractor at their target price points to match
							their needs efficiently. With a simplified and guided process for
							our users to identify and accurately communicate their needs to
							their intended contractor, these users will be more likely to want
							to use our platform. We will focus on this target audience for the
							design of our app. This is as we expect our user study to acquire
							more responses from homeowners as compared to contractors,
							allowing us to better tailor the app for homeowners.
						</div>
						<div className="mt-2">
							For the contractors, our platform would be aimed at streamlining
							and simplifying the communication process and aimed at allowing
							them to understand what problem each customer needs to solve
							accurately and efficiently. The aim is to design a platform that
							allows for minimal time spent on communication and more time on
							performing their niche services.
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
