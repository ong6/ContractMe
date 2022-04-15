import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import affinity_diagram from "../public/affinity_diagram.png";
import persona_1 from "../public/persona_1.png";
import persona_2 from "../public/persona_2.png";
import storyboard_1 from "../public/storyboard_1.png";
import storyboard_2 from "../public/storyboard_2.png";
import storyboard_3 from "../public/storyboard_3.png";
import storyboard_4 from "../public/storyboard_4.png";
import styles from "../styles/Home.module.css";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Process() {
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
				<title>Design Process | ContractMe</title>
				<meta name="description" content="User Research | ContractMe" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Section delay={0.1}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-2xl font-medium">Design Process</div>
					<div className="mt-2 text-lg">
						Next we will start the design process in which we will show the
						steps taken to reach our full prototype. As with the user research
						section, this is a high level overview of what we did, view the
						document
						<a
							href={
								"https://docs.google.com/document/d/1E_OUWJjxPEL88tFPlLIUq07XI0RHtSvggV27suP68UQ/edit#"
							}
							target="_blank"
							className="text-blue-500"
							rel="noreferrer">
							{" "}
							here{" "}
						</a>
						for more details.
					</div>
					<div className="mt-2 text-xl font-medium">Persona</div>
					<div className="my-2 text-lg">
						The personas were designed in figma and can be viewed in high
						quality{" "}
						<a
							href={
								"https://www.figma.com/file/LS5Dc4r5ij7MYH8mlzFk9z/Persona?node-id=0%3A1"
							}
							target="_blank"
							className="text-blue-500"
							rel="noreferrer">
							linked here
						</a>
						. Joe is meant to signify our inexperienced user and Katrina our
						experienced user. The both appear in our scenarios multiple times
						and are reused as characters to demonstrate an aspect of our
						application.
					</div>
					<Image
						src={persona_1}
						alt="ContractMe"
						placeholder="blur"
						className="rounded-lg"
					/>
					<Image
						src={persona_2}
						alt="ContractMe"
						placeholder="blur"
						className="rounded-lg"
					/>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">User Tasks</div>
					<div className="mt-2 text-lg">
						We then formed the following 3 user tasks that we wanted to focus
						on:
					</div>
					<ol className=" pt-4 text-lg list-decimal list-inside">
						<li className="li">
							I want to search for reputable and reliable home services
							conveniently.
						</li>
						<li className="li">
							I want an intuitive UI/UX to compare prices and quotes from
							multiple contractors
						</li>
						<li className="li">
							I want to be able to identify and communicate my problems
							effectively and efficiently.
						</li>
					</ol>
					<div className="mt-2 text-lg">
						For each user task we created a storyboard as well as a scenario to
						help us get a better idea of how the user should interact with the
						app. To view the process, click into any of the accordions below to
						view the storyboard and scenarios!
					</div>
					<Accordion allowMultiple className="mt-4">
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										User Task 1: Search for Home Services
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2 text-xl font-medium">Scenario 1</div>
								<div className="mt-2 text-lg">
									On a Saturday afternoon, Joe was watching his new favorite
									show, Singles Inferno, at home. Suddenly, there was a loud
									‘zap’ and his television switched off. He realised most of the
									lights switched off as well. As such, he believed there was a
									power outage. <br />
									<br />
									As a handyman himself, Joe tries to fix the issue himself by
									switching the power box off and back on. However, it wasn’t
									working. Thereafter, he went online to see what else he can
									try to fix the issue. As such, he typed ‘How to fix the
									electrical box’ on Google. A list of results popped up and he
									read through some. However, there was too much information and
									Joe did not know which to use. Afraid that he might end up
									doing the wrong thing, he decided to look for contractors.
									<br />
									<br />
									Before Googling for electricians, Joe recalled his best friend
									(Amy) recommending an application called ContractMe!. As such,
									he took out his phone and downloaded it, hoping it would be
									like what Amy said; A platform that suggests multiple
									contractors and with transparent pricing and credibility.
									<br />
									<br />
									He opens the application, ContractMe!. He filtered for
									‘Electrician’, prompted by the application. The application
									then shows the first page of listings with the most reputable
									and cheapest contracting services around his area. He was very
									impressed and felt that the application was extremely useful
									and convenient.
								</div>
								<div className="my-2 text-xl font-medium">Storyboard 1</div>
								<Image
									src={storyboard_1}
									alt="ContractMe"
									placeholder="blur"
									className="rounded-lg"
								/>
								<div className="mt-2 text-xl font-medium">Scenario 2</div>
								<div className="mt-2 text-lg">
									Katrina was enjoying music in her air-conditioned room when
									she heard the sound of dripping water. Katrina instantly knew
									that it was time to service her aircon as this has happened to
									her many times before. <br />
									<br />
									As usual, she grabs her phone and drops her usual contractor a
									message. It normally takes him about 30 minutes to reply, but
									this time she got an automated message saying that he was
									unavailable due to the lockdown measures imposed by COVID.
									Since her contractor was based in Malaysia, she was going to
									have to find another contractor. <br />
									<br />
									Because this was a relatively urgent issue, Katrina wanted to
									find a contractor who could come service her aircon within a
									short notice. Katrina remembers seeing an application called
									ContractMe! that would help her find a contractor. <br />
									<br />
									Katrina takes out her mobile phone and checks out the
									application. Katrina then sees a categories section in which
									one of the categories was aircon servicing. She clicks into
									the section and sees a list of contractors which she can
									choose to hire. <br />
									<br />
									Katrina sorts the list by price and sees that the cheapest
									contractor was available and had good reviews. She selects his
									name and drops him a text message detailing her problem as
									well as asking if he is free to come service the aircon. The
									contractor replies promptly and the application confirms the
									booking with the contractor. <br />
									<br />
									The contractor then comes over the next day, services her
									aircon. Once the aircon is fixed, Katrina approves a charge
									through her credit card and the money is sent to the
									contractor through the application. Katrina really likes the
									ease of use and convenience of the application and was pleased
									with her contractor!
								</div>
								<div className="my-2 text-xl font-medium">Storyboard 2</div>
								<Image
									src={storyboard_2}
									alt="ContractMe"
									placeholder="blur"
									className="rounded-lg"
								/>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										User Task 2: Compare Prices and Quotes
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2 text-xl font-medium">Scenario 1</div>
								<div className="mt-2 text-lg">
									Katrina has been staring at the same coloured walls for the
									past 5 years, and today she just realised that parts of the
									wall have been peeling! This led her to think about giving her
									room a makeover as well as a fresh coat of paint. This leads
									her to think about who she can contact to look for one that is
									reasonably priced and well-reviewed. <br />
									<br />
									Katrina remembered that her friend, Jack, told her about a
									platform called ContractMe that allows one to search for home
									services, compare contractors and pick the best one for
									yourself. Intrigued, she decided to download the application
									and set up her profile. On the application, she searches for
									painters and is greeted by a list of well-reviewed painters
									with their price guides available at a glance. <br />
									<br />
									Through an intuitive application user interface, she was able
									to easily compare various contractors based on her set
									criterias such as budget and reviews. She eventually chose
									painter James, and she proceeded to chat him up through the
									platform. After a few back and forth conversations regarding
									her expected work to be done, room size and paint choice, Jack
									gives her a quote that is not far from what is listed in his
									price guide. Satisfied, Katrina decided to go ahead with James
									and set up an appointment for the painting to be done. <br />
									<br />
									On the day itself, Katrina welcomed James into her room and
									clarified the price and colour one more time. James assured
									Katrina that all was good, and stated that the work would be
									done by the end of the day. Satisfied with his reply, Katrina
									went about her day and left James to do his work and paint her
									room. <br />
									<br />
									After the paint job was done, Katrina inspected the room and
									was very satisfied with the paint quality and how well James
									has taken care of the furniture within her room as well! Truly
									top quality work, she thought to herself. Before James left,
									he told Katrina that the billing would be through the
									ContractMe platform, and reminded her to give him a review for
									his work. <br />
									<br />
									Satisfied by the quality of work and the price paid, Katrina
									decided to go onto the platform and give James a 5-star
									review, documenting her amazing experience and how she found
									James and his work to be.
								</div>
								<div className="my-2 text-xl font-medium">Storyboard 1</div>
								<Image
									src={storyboard_3}
									alt="ContractMe"
									placeholder="blur"
									className="rounded-lg"
								/>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										User Task 3: Identify and Communicate Problems
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2 text-xl font-medium">Scenario 1</div>
								<div className="mt-2 text-lg">
									As a new home owner, Joe is very careful with the state of his
									home. Because he is a very hands-on person, Joe tries his best
									to not get contractors involved when dealing with any home
									repair issues. Just before Joe leaves for work this morning,
									he sees a puddle of water on the floor tiles outside of the
									toilet. He thinks that it might be a spillage from the basin
									nearby but is not sure why. Later when Joe reaches home in the
									evening, he realises that the water is not an accidental
									spillage and does not seem to dry out over time. He tries to
									clean the area with a mop and in a few minutes the area is wet
									again. He examines the area more carefully to find out the
									root cause of this issue, but fails miserably. <br />
									<br />
									Because of the mysterious nature of the problem, Joe decides
									to open up ContractMe and use the identifier toolkit to guide
									him with fault finding. Joe decides to let the system guide
									him on a step by step basis. He first follows the instructions
									to narrow down the scope of the potential issue and then take
									down records of the surroundings via his camera. The system
									proceeds to suggest a few possible scenarios. Joe deletes away
									some of the obvious irrelevant diagnosis and keys in his final
									thoughts. The system processes the inputs and provides a few
									follow-up actions for Joe. Given that Joe would like the
									issues to be fixed soon, he proceeds to submit a request for
									immediate assessment of the problem by a handyman. <br />
									<br />
									He is relieved that the handyman can use the information from
									the system and only need to be in touch if there are any
									clarifications. With the system’s detailed description, a
									professional will be engaged and the diagnosis will be updated
									to Joe once it’s done.
								</div>
								<div className="my-2 text-xl font-medium">Storyboard 1</div>
								<Image
									src={storyboard_4}
									alt="ContractMe"
									placeholder="blur"
									className="rounded-lg"
								/>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					<div className="mt-2 text-lg">
						View the high quality version of our storyboards{" "}
						<a
							href={
								"https://www.figma.com/file/hGyOcUVvP2YMJs3ZieWdEC/G2-StoryBoard?node-id=0%3A1"
							}
							target="_blank"
							className="text-blue-500"
							rel="noreferrer">
							at this link!
						</a>
					</div>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">
						Wireframing and Prototyping
					</div>
					<div className="mt-2 text-lg">
						We then procceded to start our prototyping process. In which we
						choose to make vertical prototypes while doing the work in a
						parallel manner. Click on each tab below to view the final version
						of each of our prototypes!
					</div>
					<Tabs isFitted variant="line" className="mt-4">
						<TabList mb="1em">
							<Tab>{"Jun Xiong (Tasks 1 and 2)"}</Tab>
							<Tab>{"Yong Liang (Tasks 2 and 3)"}</Tab>
							<Tab>{"Chris (Tasks 1 and 2)"}</Tab>
							<Tab>{"Yun Xin (Tasks 2 and 3)"}</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<p>
									<iframe
										className="my-4 border-2 border-blue-300 rounded-lg w-full"
										height="600"
										src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc26MPsqrpichyAyFI6TPzE%2FG2-Wireframes-JX%3Fnode-id%3D0%253A1"
										allowFullScreen></iframe>
								</p>
							</TabPanel>
							<TabPanel>
								<p>
									<iframe
										className="my-4 border-2 border-blue-300 rounded-lg w-full"
										height="600"
										src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F43zUY6xhoUeGE2362BNgJm%2FA0214023B_Wireframes%3Fnode-id%3D0%253A1"
										allowFullScreen></iframe>
								</p>
							</TabPanel>
							<TabPanel>
								<p>
									<iframe
										className="my-4 border-2 border-blue-300 rounded-lg w-full"
										height="600"
										src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FC8Hh1uS59l3JFisyx8gmz0%2FG2-Prototypes---Chris%3Fnode-id%3D0%253A1"
										allowFullScreen></iframe>
								</p>
							</TabPanel>
							<TabPanel>
								<p>
									<iframe
										className="my-4 border-2 border-blue-300 rounded-lg w-full"
										height="600"
										src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBfLu9036XqaZfXwch0n6jA%2FG2-Wireframes-YX%3Fnode-id%3D0%253A1"
										allowFullScreen></iframe>
								</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Internal team review</div>
					<div className="mt-2 text-lg">
						Based on the previous steps, our team conducted an internal review
						before we proceed to our final iteration of our prototype.
					</div>
					<Tabs isFitted variant="line" className="mt-4">
						<TabList mb="1em">
							<Tab>Jun Xiong</Tab>
							<Tab>Yong Liang</Tab>
							<Tab>Chris</Tab>
							<Tab>Yun Xin</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Accordion defaultIndex={[0]} allowToggle>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 1
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Good inclusion of the identify issues functionality,
													which may come in handy when someone is finding a
													contractor
												</li>
												<li className="font-base text-base">
													The star rating displayed at the top provides clear
													understanding of the service quality
												</li>
												<li className="font-base text-base">
													The details of ‘happy customers’ and ‘number of
													favourites’ give good indication of the service
													quality as well
												</li>
												<li className="font-base text-base">
													Categorising makes it easier to locate the services
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The filters in the search page are limited in terms of
													functionality
												</li>
												<li className="font-base text-base">
													The ‘up-down’ arrow used on the right of the search
													box is a little confusing
												</li>
												<li className="font-base text-base">
													The ‘star’ button at the bottom of the contractor page
													seems a little out of place when compared with the two
													other buttons beside it
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 2
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The compare function as a whole seems easy to use
												</li>
												<li className="font-base text-base">
													Good use of the highlighting portion to identify
													products with issues
												</li>
												<li className="font-base text-base">
													The comparison between two services are clear and
													concise, able to check across different factors
												</li>
												<li className="font-base text-base">
													Categorising makes it easier to locate the services
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Not too clear if there are more than 2 contractors to
													compare
												</li>
												<li className="font-base text-base">
													The meaning of the ‘select’ buttons is a little
													unclear
												</li>
												<li className="font-base text-base">
													It may not be obvious how to enter the comparison page
													if the user does not click into one of the services
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</TabPanel>
							<TabPanel>
								<Accordion defaultIndex={[0]} allowToggle>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 2
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Tried and test search layout that would be intuitive
													for most people
												</li>
												<li className="font-base text-base">
													Good use of a bottom layout to compare services
												</li>
												<li className="font-base text-base">
													Easy to understand and use
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Might be a bit simplistic in terms of flow to allow a
													better and more detailed comparison of what factors a
													homeowner might consider
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 3
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Clear, logical layout in terms of what options are
													available and what can be done
												</li>
												<li className="font-base text-base">
													Inclusion of backward navigation (reducing error) and
													loading screens
												</li>
												<li className="font-base text-base">
													Detailed and show great knowledge of what customers go
													through in the process.
												</li>
												<li className="font-base text-base">
													Good use of device hardware to allow better
													communication between homeowner and contractor
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Might have too many segments, cause customers to lose
													focus
												</li>
												<li className="font-base text-base">
													Might have too many words, can change some to photos/
													more engagement
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</TabPanel>
							<TabPanel>
								<Accordion defaultIndex={[0]} allowToggle>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 1
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Feature rich, has a good search feature
												</li>
												<li className="font-base text-base">
													Showed depth of understanding of contracting issues,
													as well as the personas (e.g. how contractors have
													multiple services instead of just one)
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Design is abit too complex might be hard for users to
													find what they want
												</li>
												<li className="font-base text-base">
													The breadcrumb seems a little too small/hard to
													interact with
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 2
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													Good use of symbols to represent certain information
												</li>
												<li className="font-base text-base">
													The table format allows for clear comparison to be
													done, the comparison criteria filter helps with
													adjusting the parameters
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													textual information can be more compact
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</TabPanel>
							<TabPanel>
								<Accordion defaultIndex={[0]} allowToggle>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 2
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The individual service page is well thought out
												</li>
												<li className="font-base text-base">
													The inclusion of the ‘verification’ is useful for
													users to identify contractors that are more reputable
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The design may not generalise to some of the other
													home repair issues
												</li>
												<li className="font-base text-base">
													The ‘quick look’ section seems a little cluttered to
													keep two comments side by side. It may not be easy to
													read the text within.
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													flex="1"
													textAlign="left"
													className="font-semibold">
													User Task 3
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
											<div className="mt-2 text-xl font-medium">Strengths</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The form inputs are placed in appropriate locations
												</li>
												<li className="font-base text-base">
													Good use of the calendar for users to mark out their
													available dates
												</li>
											</ol>
											<div className="mt-2 text-xl font-medium">Weaknesses</div>
											<ol className=" py-4 text-lg list-disc list-inside">
												<li className="font-base text-base">
													The chat screen seems a little out of place
												</li>
											</ol>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<div className="mt-2 text-lg">
						Once we were done with this review, we went back and modified out
						prototypes to make the clearer for the user testing and evaluation
						phase.
					</div>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Insights</div>
					<div className="mt-2 text-lg">
						Through the internal team review of wireframes and prototypes, we
						were inspired by the various implementations and design decisions
						made by one another. We were able to identify the strength and
						weaknesses and improved our original wireframes and prototypes based
						on the feedback given so as to improve both the intuitiveness and
						meeting user requirements.
					</div>
					<div className="mt-2 text-lg">
						Here is a list of learning points that we gathered from this round
						of design interaction:
					</div>
					<ol className=" py-4 text-lg list-decimal list-inside">
						<li className="font-base">
							When trying to make the functionality complete with all the
							necessary components, we should not clutter the screen with every
							single bit of information. This may lead to information overload
							and reduce the user experience with the screen.
						</li>
						<li className="font-base">
							Components such as the back button or the breadcrumb can provide
							an important recovery mechanism for users.{" "}
						</li>
						<li className="font-base">
							When it comes to colours, less is more, having too many colours
							can distract the user from what you want them to see and can
							affect the overall look and UX of the application.{" "}
						</li>
						<li className="font-base">
							Colour hierarchy is also an important tool that allows for the
							user to focus on what are the next steps or what is the important
							aspect in a screen.
						</li>
						<li className="font-base">
							Filters/Data Input have to be broader to allow for different
							situations. Otherwise, we might have to excessively craft multiple
							designs for various situations.
						</li>
						<li className="font-base">
							Certain parts of the application can be opened from multiple
							sections. As such, there is a need to be mindful of the flow
							especially during backward navigation. If not, users may end up
							going to parts of the application that they have never been
							before.
						</li>
					</ol>
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
