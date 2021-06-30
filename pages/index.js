import Head from "next/head";
import Banner from "../components/Banner";
import React, { useEffect, useState } from "react";
import LogoAnimation from "../components/LogoAnimation";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Pproject from "../components/Pproject";

const projects = [
  {
    name: "ODA - One Direction Australia",
    headline: "Site Management & Inspections IOS/Android",
    description:
      "This hybrid mobile application for iOS/Android mainly focuses on ODA staff management,safety,job audits for ODA Clients. ODA can assign jobs,audits,safety,incident management from there system and allocate tasks. Each authorized user have access to their own tasks and location based check in/out feature. This application is on private distribution on Playstore and volume purchasing on AppStore.",
    tech: ["Ionic 5", "Angular 11", "Capacitor", "AWS", ".Net"],
    asset: "/DashboardFinal.png",
  },

  {
    name: "AMS - Active Medical/Marketing Eye",
    headline: "e-scripts management for occupational therapists",
    description:
      "This Hybrid mobile application provides AMS registered occupational therpists to request/manage e-quotes, manage their patients profiles & choose products suits for their patients based on patient's funding type/body and their elective insurance.",
    tech: ["Ionic 5", "Angular", "Capacitor", "Firestore", "GC Functions"],
    asset: "/hulu1.png",
  },
  {
    name: "AMS - Dashboard",
    headline: "AMS e-script management dashboard",
    description:
      "Management of all e-scripts/quotes from e-script mobile application dedicated to AMS. Assign user accounts, set up occupational therapists profiles, authorization and delegation. Add products to their inventory set up patient questionnaires and funding and insurance partners and bodies.",
    tech: ["Angular", "Firestore", "Google Cloud", "Algolia", "GC Functions"],
    asset: "/DashboardFinal.png",
  },

  {
    name: "TsurugakJ",
    headline: "Private author/translator",
    description:
      "Personalised blog/Progressive Web App for a author and translator which is scalable for more than 50K user visits per month according to analytics with serverless backend and API's with a low cost of ownership.",
    tech: ["Next Js", "Sanity CMS", "Firebase", "Tailwind css"],
    asset: "/hulu1.png",
  },
];

const projectsp = [
  {
    name: "Hulu Clone",
    description:
      "Hulu application clone mobile and 4K responsive, Horizontal scroll menu",
    tech: ["Next Js", "TMDB API", "Tailwind CSS"],
    asset: "/DashboardFinal.png",
    link: "",
  },
  {
    name: "Personal Website",
    description: "Personal portfolio",
    tech: ["Next Js", "Tailwind CSS"],
    asset: "/DashboardFinal.png",
    link: "",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shawin Mendis</title>
        <meta
          name="description"
          content="I'm Melbourne based Software Engineer who build things for the web open for next javascript Full stack position"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="md:mx-48 md:mt-8">
          <Banner />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="latest">
          <Project projects={projects} />
        </div>
        <div id="projects">
          <Pproject projectsp={projectsp} />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
