import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/logo3.png";
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
							When home maintenance is required, homeowners tend to experience various pain points throughout the entire home-repair process. This includes:
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
							The first pain point is due to the community’s general lack of expertise in the field of home repair. This is sometimes due to the nature of home repair issues that can be infrequent but still require urgent attention. As such, when the need arises, a lot of time is wasted on figuring out what went wrong and the right kind of contractor to seek to help with their issue.
						</div>
						<div className="mt-2 text-lg">
							Thereafter, the second pain point was identified due to the hidden prices of such services. Contractors have no easy means of listing a price due to the nature of the service. Thus, customers have to personally contact the contractors to figure out the prices. This can be a tedious process for both parties. Customers will have to reach out to multiple contractors on various platforms to attain the best deal whereas the contractors will have to create multiple quotations with no guarantee of securing the deal. This could lead to a lot of frustration for both parties.
							<div className="mt-2 text-lg">
								The final pain point arises from the lack of ability to clearly communicate the problem to contractors. Customers who are unable to identify the root cause of the issue cannot do better at describing it. Worse, in most situations customers rely on verbal or textual communication that may not be able to share important information about the issue. As a result, contractors are unable to give an accurate quotation without being able to accurately determine the amount of work to be done. This easily leads to miscommunication or unnecessarily long back-and-forth between the parties. Consequently, this incurs opportunity costs for both parties where customers are incurring lost time from getting the problem fixed in place of discussions and contractors wasting time on customers who are still trying to figure out the problem in place of communicating with other customers who are able to confirm the need for their services.
							</div>
							<div className="mt-2 text-lg">
								These underlying issues around acquiring home repair services are currently not well-tackled and we feel that our project could breathe new life into this large but neglected market. As such, we will be looking into ways in which we could streamline the process of looking for a contractor to help with home maintenance.
							</div>
						</div>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="mt-4 text-lg">
						<div className="mt-2 text-xl font-medium">Target Users
						</div>
						<div className="mt-2 text-lg">
							<b>Primary User Group</b><br />
							We aim to target younger married couples/homeowners who have not experienced handling household problems before or are relatively new to them. We have identified them as they are a group that might have the most trouble going through the home-repair process. As aforementioned, most problems arise from ignorance. With them not having much experience in such issues and in the interest of saving time, they are likely to be our main target group.

							Another primary user group is the contractors. Apart from customers, contractors also often face many issues and frustration servicing the customers daily. As such, we aim to help contractors streamline and ease the process of liaising and securing deals with customers.
						</div>
						<div className="mt-2">
							<b>Secondary User Group</b><br />
							Our secondary users are older couples/homeowners who already have experience in home maintenance. Such a user group may already have connections to certain contractors and may not need a lot of help. However, if they are open to looking for new contractors or are looking to ease the process of looking for one, they may be interested in trying out our service.

							Other secondary user groups are schools/businesses, they might need some contract help for a niche issue such as floor matt replacement, repainting walls, broken doors, etc. They might want to hire contractors for issues such as those but don’t necessarily need it on a large scale. This allows them to save costs and settle problems quickly.
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="mt-6 text-lg">
						<div className="mt-2 text-xl font-medium">Team
						</div>
						<ol className="py-4 text-lg list-disc list-inside">
							<li className="li">
								Liu Yongliang
							</li>
							<li className="li">
								Lou Yun Xin
							</li>
							<li className="li">
								Ng Ting You (Chris)
							</li>
							<li className="li">
								Ong Jun Xiong
							</li>
						</ol>
					</div>
				</Section>
				<Section delay={1}>
					<div className="flex items-center justify-between">
						<div className="div"></div>
						<Link href="/process">
							<Button
								colorScheme="teal"
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
