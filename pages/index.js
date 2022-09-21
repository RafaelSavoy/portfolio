import React from "react";
import Header from "../components/Header/Header";
import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Projects from "../components/Sections/Projects/Projects";
import Technologies from "../components/Sections/Technologies/Technologies";
import { request } from "../lib/datocms";

const PROJECT_QUERY = `query Project{
	allProjects{
	id
	title
	repo
    banner {
      url
    }
  }
}
`;
const TECHNOLOGY_QUERY = `query TECHNOLOGIES {
	allTechnologies {
	  id
	  description
	  techicon {
		url
	  }
	}
  }
  `;

export const getStaticProps = async () => {
    const projectsData = await request({ query: PROJECT_QUERY });
    const techData = await request({ query: TECHNOLOGY_QUERY });

    return {
        props: {
            techData,
            projectsData,
        },
        revalidate: 60,
    };
};

export default function Home({ techData, projectsData }) {
    return (
        <>
            <Header />
            <About />
            <Technologies data={techData} />
            <Projects data={projectsData} />
            <Contact />
        </>
    );
}
