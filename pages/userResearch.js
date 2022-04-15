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

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>User Research | ContractMe</title>
                <meta name="description" content="User Research | ContractMe" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="">
                <Section delay={0.1}>
                    <div className="mt-6 text-lg">
                        <div className="text-3xl font-medium">User Study Recruitment Plan</div>
                        <div className="mt-2 text-2xl font-medium">User Identification - (Primary Users)</div>
                        <div className="mt-2 text-lg">
                            We aim to help homeowners/household members who may lack experience handling household problems before or find it inconvenient to source for contractors when they need one. We have identified them as they are a group that might have the most pain points going through the home-repair process. As aforementioned, most problems arise from ignorance. With them not having much experience in such issues and in the interest of saving time, they are likely to benefit most from our project. Some of the sub user groups include:
                        </div>
                        <ol className="px-2 py-4 text-lg list-disc list-inside">
                            <li className="li"><b>Inexperienced</b>: e.g. First-time homeowners/household members (never had experience with contractors before)</li>
                            <li className="li"><b>Experienced</b>: e.g. Seasoned homeowners/household members (have used contractors before)
                            </li>
                            <li className="li"><b>Urgent</b>: e.g. Homeowners/household members experiencing urgent issues like power outages (need a contractor quickly)
                            </li>
                            <li className="li"><b>Non-urgent</b>: e.g. Homeowners/household members experiencing non-urgent issues like paint related issues (not in a rush to find a contractor)
                            </li>
                        </ol>
                        <div className="div">
                            We will be referring to the first two sub-groups as Inexperienced users and Experienced users when addressing them in the future. The last two sub-groups will be noted as Urgent users and Non-urgent users.
                            <br /><br />
                            Another primary user group is the contractors. Apart from customers, contractors also often face many issues and frustration servicing the customers daily. As such, we aim to help contractors streamline and ease the process of liaising and securing deals with customers.
                        </div>
                        <div className="mt-2">
                            Some of the common home repair contractors that we could potentially engage are:
                        </div>
                        <ol className="px-2 py-4 text-lg list-disc list-inside">
                            <li className="li">Electricians</li>
                            <li className="li">AC Specialists</li>
                            <li className="li">Plumbers</li>
                            <li className="li">Carpenters</li>
                            <li className="li">Other professionals</li>
                        </ol>
                    </div>
                </Section>
                <Section delay={0.5}>
                    <div className="mt-6 text-lg">
                        <div className="text-2xl font-medium">Recruitment of users</div>
                        <div className="mt-2 text-lg font-medium">
                            Homeowners/household members
                        </div>
                        <ol className="px-2 py-4 text-lg list-disc list-inside">
                            <li className="li">We can contact homeowners through family and friends.
                            </li>
                            <li className="li">Making use of social media such as Telegram channels with a large user base to reach out to a wide variety of potential target users.</li>
                            <li className="li">Use Instagram to reach out and find connected friends in the user group to help do surveys.</li>
                        </ol>
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
                        <div className="mt-2 text-lg font-medium">
                            Contractors
                        </div>
                        <ol className="px-2 py-4 text-lg list-disc list-inside">
                            <li className="li">Recruit contractors through platforms like Carousell and Classified, where they are most frequently found/contacted by homeowners.
                            </li>
                            <li className="li">We will be sending them a message with the purpose of our project and kindly ask them to participate in our survey and a follow up study to share their pain points and how they would like them to be solved. </li>
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
                            <Button
                                colorScheme="teal"
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
