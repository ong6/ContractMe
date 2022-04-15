import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/dist/client/link";
import Head from "next/head";
import Image from "next/image";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Section from "../components/Sections";
import improvement_1 from "../public/improvement_1.png";
import improvement_2 from "../public/improvement_2.png";
import improvement_3 from "../public/improvement_3.png";
import improvement_4 from "../public/improvement_4.png";
import styles from "../styles/Home.module.css";

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
						Product Features and Evaluation
					</div>
					<div className="my-2 mb-4 text-lg">
						We are now at the develop and deliver section of the double diamond
						design process model.
					</div>
					<div className="mt-2 text-xl font-medium">Product Features</div>
					<div className="my-2 mb-4 text-lg">
						The following section will expound on product features that we have
						designed to address user pain points and help them accomplish their
						tasks.
					</div>
					<Accordion allowToggle>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Features for User Task 1: Search for Home Services
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									To accomplish this user task, we have developed a contractor
									marketplace for users to find contractors. The marketplace
									offers multiple contracting categories to cater most types of
									contracting services. Features such as Search Bars, &quot;Sort
									by&quot; or &quot;Previously contracted&quot; were all
									purposefully designed and incorporated in ContractMe! to aid
									users in searching for contractors more conveniently.{" "}
								</div>
								<div className="mt-2">
									To ensure reliability of our application, we have made sure to
									include listing details,
									&quot;Verified&quot;/&quot;Preferred&quot; filters, as well as
									reviews for users to look for reliable contractors.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Features for User Task 2: Compare Prices and Quotes
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									The second icon (from the left) on the navigation bar holds a
									comparison feature, allowing users to compare contractors
									easily. Users can pin their favorite listing and add as many
									contractors as they want to compare against. ContractMe! then
									generates an easily-digestible yet comprehensive table of
									comparison for users to compare all contractors at once.
								</div>
								<div className="mt-2">
									There is another feature on the app that allows for
									comparisons. For users who are in the early phases of
									comparing and just want a small quick comparison against the
									current top favourite listing, they can click on the
									&quot;Compare&quot; icon at the top right hand corner of the
									detailed listing. An overlay would popup, comparing only the
									user&quot;s favorite and the current listing being viewed.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Features for User Task 3: Identify and Communicate Problems
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									Finding it difficult to identify the home repair issues
									necessitates an <b>identification feature</b> that lets users
									know the type of contractor they need to find. Our camera
									feature is equipped with advanced technology to help with
									that. Users would only need to take a photo of facilities that
									require home repair and ContractMe! will lead them to a page
									with the contractors they need to find, helping them simplify
									the identification process. Furthermore, if a user does not
									require this additional feature and process, they can simply
									search based on their experience for services they require.
								</div>
								<div className="mt-2">
									To help users communicate with homeowners more easily,
									ContractMe! has a chat feature that allows users to
									communicate directly with homeowners. Quotations are also
									offered and accepted on the chat to help better communicate
									expectations, allowing users to feel secure about prices they
									were quoted.
								</div>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>
			<Section delay={0.2}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Evaluation</div>
					<div className="mt-2 mb-4 text-lg">
						Our team conducted usability evaluation to discover usability
						deficiencies and collect data while observing our participants using
						our application to perform tasks. We used the &quot;Think
						Aloud&quot; technique with our participants to better understand the
						user journey and whether user expectations are met.
					</div>
					<Accordion allowToggle>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Method of Evaluation
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									Our team conducted usability evaluation to discover usability
									deficiencies and collect data while observing our participants
									using our application to perform tasks. We used the
									&quot;Think Aloud&quot; technique with our participants to
									better understand the user journey and whether user
									expectations are met.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Purpose of the test
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									The purpose of the usability testing is to assess the extent
									to which our interactive ContractMe prototype accomplishes our
									intended user tasks. This assessment consequently helps to
									improve our application both functionality and aesthetically.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Participant characteristics
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									As our application aims to be inclusive and allow most to
									obtain home services, we aim to test with a diverse group of
									participants. Some form of segmentation was based on whether
									or not they have obtained home services through other means
									previously.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Task list
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									We have built usability testing tasks around our key user
									tasks to ensure a high level of focus on our initial
									objectives. In so doing, we would be able to ensure a more
									valid/accurate measure of how well our application
									accomplishes the tasks.
								</div>
								<TableContainer className="mt-4">
									<Table variant="striped" size="sm">
										<TableCaption>User testing task list</TableCaption>
										<Thead>
											<Tr>
												<Th>Tasks</Th>
												<Th>Details</Th>
											</Tr>
										</Thead>
										<Tbody>
											<Tr>
												<Td>1.1</Td>
												<Td>
													Register for an account with your name and address.
												</Td>
											</Tr>
											<Tr>
												<Td>1.2</Td>
												<Td>
													Use the application to identify the problem shown on
													the whiteboard (picture given).
												</Td>
											</Tr>
											<Tr>
												<Td>1.3</Td>
												<Td>
													Look for a contractor that you would be interested to
													engage.
												</Td>
											</Tr>
											<Tr>
												<Td>1.4</Td>
												<Td>
													View the listing for more details of what the
													contractor offers.
												</Td>
											</Tr>
											<Tr>
												<Td>1.5</Td>
												<Td>
													Look for another contractor that you might be
													interested in and compare against the previous.
												</Td>
											</Tr>
											<Tr>
												<Td>1.6</Td>
												<Td>
													Communicate/Ask for a quotation from the preferred
													contractor.
												</Td>
											</Tr>
											<Tr>
												<Td>1.7</Td>
												<Td>Accept the quotation.</Td>
											</Tr>
											<Tr>
												<Td>1.8</Td>
												<Td>Make payment.</Td>
											</Tr>
										</Tbody>
									</Table>
								</TableContainer>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Test environment, equipment and logistics
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									The participants are invited to a common room. We prepared a
									board with a photo of a broken switch so that they can use it
									to complete task 1.2. The participants were given a laptop
									with the Figma interaction page. Instructions were to the
									participants by facilitators seated beside them.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Test facilitator role
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									We took on different roles when facilitating. One of us took
									on the role of engaging with the participants. He began by
									introducing Contract Me! and its goals, followed by the
									context/scenario and subsequently, the tasks. A new task is
									only given after the participant successfully completes it or
									wants to give up. The session then ends with the facilitator
									debriefing and collecting final thoughts of the participant
									regarding the use of our application.
								</div>
								<div className="mt-2">
									The other facilitator takes on the task of collecting
									quantitative metrics such as time taken to complete each task,
									as well as error rates.
								</div>
								<div className="mt-2">
									The last 2 facilitators focused on collecting more qualitative
									information. This includes noting down expressions and
									emotions expressed, writing down what each participant shares
									with the &quot;Think Aloud&quot; technique and test/task level
									satisfaction.
								</div>
								<div className="mt-2 font-semibold">Briefing note:</div>
								<div className="mt-2">
									Thank you very much for participating in this study. The goal
									of this project is to evaluate the interface of ContractMe.
									ContractMe is an application designed to simplify the process
									of looking for a contractor. The results of our evaluation
									will be summarized and used to improve our application
									further.
								</div>
								<div className="mt-2">
									You will be asked to use ContractMe (the prototype) to conduct
									a series of tasks. You will be asked to &quot;think
									aloud&quot; as you interact with the prototype. What you say
									as you carry out the activities may be recorded. Your identity
									will remain confidential. As you use ContractMe for each task,
									please keep in mind that it is ContractMe that is the subject
									of this evaluation - not you.
								</div>
								<div className="mt-2">The</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										Data to be collected and evaluation measures
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									We used the following table of metrics to record and note how
									successful the participants were in completing the tasks.
								</div>
								<TableContainer className="mt-4">
									<Table variant="simple" size="sm">
										<TableCaption>User testing task list</TableCaption>
										<Thead>
											<Tr>
												<Th>Metric</Th>
												<Th>Description</Th>
											</Tr>
										</Thead>
										<Tbody>
											<Tr>
												<Td>Successful task completion</Td>
												<Td>
													Percentage of tasks that test participants complete
													correctly
												</Td>
											</Tr>
											<Tr>
												<Td>Time on task</Td>
												<Td>
													The amount of time it takes participants to complete a
													task successfully
												</Td>
											</Tr>
											<Tr>
												<Td>Task level satisfaction</Td>
												<Td>To flag a difficult task</Td>
											</Tr>
											<Tr>
												<Td>Test level satisfaction</Td>
												<Td>
													To evaluate how the participant felt about the overall
													experience
												</Td>
											</Tr>
											<Tr>
												<Td>Error-free rate</Td>
												<Td>
													Percentage of participants who complete a task
													successfully without any errors.
												</Td>
											</Tr>
											<Tr>
												<Td>Critical Errors</Td>
												<Td>
													Errors that block the user from completing a task
													successfully, e.g. due to participant workflow
													deviation.
												</Td>
											</Tr>
											<Tr>
												<Td>Non-critical errors</Td>
												<Td>
													Errors that are recovered by the participant and do
													not affect their ability to complete the task.
												</Td>
											</Tr>
										</Tbody>
									</Table>
								</TableContainer>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>
			<Section delay={0.3}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-2xl font-medium">Findings</div>
					<div className="mt-4 text-xl font-medium">Successful Aspects</div>
					<div className="mt-2 mb-4 text-lg">
						We highlight some of the areas that we have done well based on
						Nielsen’s Usability Heuristics. We determined which of these aspects
						have been achieved based on the feedback given as well as the
						observations we made while conducting our usability testing.
					</div>
					<Accordion allowToggle>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										1. Search and Identify Workflow
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									The search and identify workflow was when users had to use the
									identify feature to diagnose an issue then afterwards search
									for the related contractor. Users were satisfied with the way
									identification works and stated that this feature was
									incredibly useful. Based on our metrics, all users
									successfully completed the task under 60 seconds and no users
									experienced errors. We also notice that this matches with one
									of Nielsen Heuristics H2: Match between system and real world.
									This was due to the fact that taking pictures to diagnose
									issues is very similar to asking a contractor to identify the
									issue for you.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										2. Integrate quotation and offer in chat
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									Our chat feature is integrated with the entire
									contractor-homeowner interaction. It includes communication
									through text messages, as well as offering proposals by a
									contractor. After a user is satisfied with the details (price,
									date time etc), the user can accept the offer with all the
									required payment details. This reduces the number of other
									screens involved when completing the service agreement, which
									participants enjoyed. This is also related to H2: Match
									between system and real world in that users typically
									communicate back and forth with a contractor before a deal is
									set.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										3. Informative dialogs and information text
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									We consider informative dialogs and information text to be the
									popup’s that help with error recovery and error prevention.
									This allowed users to cancel or make changes to their actions.
									In general, we noticed that these dialogs helped to prevent
									the users from making critical and non-critical errors and
									also improved the task level satisfaction. We note that this
									is also related to H5: Error Prevention and H9: Help users
									recognize, diagnose, recover from errors.
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										4. Saved particulars for reuse when contracting
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<div className="mt-2">
									With reference to H5: Error prevention, the participants were
									happy to see that the details of the contact person and
									service address needed when accepting the offer can be saved
									and reused. This reduces the chance of incorrect information
									provided to the contractor.
								</div>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>
			<Section delay={0.4}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Areas for Improvement</div>
					<div className="mt-2 mb-4 text-lg">
						We also noted some areas where we could improve upon that we noticed
						where pain points for users. Based on these findings, our team
						incorporated the feedback into our final prototype to better address
						our user needs. In particular, we focused on addressing any
						violations of the Usability heuristics and enhancements that can
						improve the application further.
					</div>
					<Accordion allowToggle>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										1. Communication with contractor
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Tabs isFitted variant="line">
									<TabList mb="1em">
										<Tab>User Feedback</Tab>
										<Tab>Changes Made</Tab>
									</TabList>
									<TabPanels>
										<TabPanel>
											<div className="">
												The current application only supports messaging via
												chat, which can be quite troublesome when there is a
												need to have a lengthy discussion with a contractor. In
												view of that, suggestions were raised to include a
												video/audio feature so that users can easily hop on a
												call with the contractor.
											</div>
										</TabPanel>
										<TabPanel>
											<Image
												src={improvement_2}
												alt="ContractMe"
												placeholder="blur"
												className="rounded-lg"
												height="350"
												objectFit="contain"
											/>
											<div className="mt-2">
												Based on the feedback and results of the usability
												evaluation, we have included a video chat functionality
												as seen in the figures above within the messaging
												feature to allow for users to call and have a video
												consultation with a contractor directly. This provides
												the flexibility for homeowners and contractors to
												communicate and diagnose problems in a way that suits
												their communication style either through text messages
												or through call/video chat. This feature could also
												replace the on-site consultation session for a
												contractor to provide a quotation.
											</div>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										2. Comparing of Service Listings
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Tabs isFitted variant="line">
									<TabList mb="1em">
										<Tab>User Feedback</Tab>
										<Tab>Changes Made</Tab>
									</TabList>
									<TabPanels>
										<TabPanel>
											<div className="">
												The current application only supports messaging via
												chat, which can be quite troublesome when there is a
												need to have a lengthy discussion with a contractor. In
												view of that, suggestions were raised to include a
												video/audio feature so that users can easily hop on a
												call with the contractor.
											</div>
										</TabPanel>
										<TabPanel>
											<Image
												src={improvement_3}
												alt="ContractMe"
												placeholder="blur"
												className="rounded-lg"
												height="350"
												objectFit="contain"
											/>
											<div className="mt-2">
												Based on the usability results, we started iterating on
												the compare services design and came up with a feature
												that allows for comparison of multiple listings, as well
												as a “quick compare” feature that would allow for a user
												to compare on the fly without going into the compare
												page.
											</div>
											<div className="mt-2">
												This improvement is justified as it allows for
												flexibility for the users to compare as many or as
												little service listings as they require. In addition,
												users are also able to select which criteria they would
												like to compare the services on to improve their
												decision making.
											</div>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left" className="font-semibold">
										3. Workflow of identifying what service is needed
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Tabs isFitted variant="line">
									<TabList mb="1em">
										<Tab>User Feedback</Tab>
										<Tab>Changes Made</Tab>
									</TabList>
									<TabPanels>
										<TabPanel>
											<div className="my-2">
												While users find the identification very useful, they
												felt that there should be more shortcuts or prompts to
												lead them to this feature.
											</div>
											<Image
												src={improvement_1}
												alt="ContractMe"
												placeholder="blur"
												className="rounded-lg"
											/>
											<div className="mt-2">
												As the feature icon was just a regular camera icon, it
												did not occur to them that it is a special feature to
												identify issues. There were also comments to simplify
												and reduce the number of sections and clicks required a
												user needs to go through before identifying the problem.
											</div>
										</TabPanel>
										<TabPanel>
											<Image
												src={improvement_4}
												alt="ContractMe"
												placeholder="blur"
												className="rounded-lg"
												height="350"
												objectFit="contain"
											/>
											<div className="mt-2">
												Based on the feedback, we sought to simplify and reduce
												the number of sections and clicks required a user needs
												to go through before a user identifies the problem.
											</div>
											<div className="mt-2">
												We do this through smart prediction that allows us to
												recommend services and asking the user if the answer
												suits their needs rather than making users go through a
												fixed number of steps. Through the use of additional
												hardware aids like the camera/gallery in addition to
												prompting service category types and potential service
												names we can prevent errors (Nielsen Heuristic H5) and
												reduce short-term memory load (Shneiderman’s Golden
												Rules, Nielsen Heuristic H6). As seen in the figures
												above, we provide both the option for using their
												cameras to identify the issue, or allow them to use an
												existing photo in their gallery to identify what issue
												they are facing.
											</div>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</Section>
			<Section delay={0.5}>
				<div className="mt-6 text-lg">
					<div className="mt-2 text-xl font-medium">Final Prototype</div>
					<div className="mt-2 text-lg">
						Now, with all the user evaluation steps done and changes made, we
						can showcase the final prototype after many iterations!
					</div>
				</div>
			</Section>
			<Section delay={0.6}>
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
