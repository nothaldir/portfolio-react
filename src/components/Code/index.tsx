import React, { FC } from "react";
import styled from "styled-components";

import "./prism";
import "./prism.cobalt2.css";

const StyledCode = styled.section`
  display: flex;
  margin: 40px 0;
`;

const Code: FC = () => {
  const getAge = (d1: Date, d2?: Date): number => {
    d2 = d2 || new Date();
    const diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };

  return (
    <StyledCode>
      <pre>
        <code className="language-json">
          {`{
  "name": "Alex Berneau",
  "age": "${getAge(new Date(1994, 3, 24))}",
  "nationalities": ["French", "Italian"],
  "languages": ["French", "English", "Spanish"],
  "expertise": "Front-end JavaScript",
  "skills": [
    "ReactJS",
    "VueJS",
    "Apollo GraphQL",
    "GraphQL",
    "NodeJS",
    "TypeScript",
    "Flow"
  ],
  "workExperiences": [
    {
      "company": "AKQA",
      "contract": "Full time & permanent, preceded by an internship",
      "location": "Paris, France",
      "period": "May 2019 - Today",
      "link": "https://www.akqa.com"
    },
    {
      "company": "Mo Works",
      "contract": "Internship",
      "location": "Melbourne, Australia",
      "period": "July 2018 - November 2018",
      "link": "https://moworks.com.au"
    },
    {
      "company": "Wait & See Agency",
      "contract": "Internship",
      "location": "Paris, France",
      "period": "July 2017 - September 2017",
      "link": "https://www.waitandsee.fr/agency"
    },
    {
      "company": "Ohwee",
      "contract": "Internship",
      "location": "Paris, France",
      "period": "July 2016 - September 2017"
    }
  ],
  "formation": {
    "school": "HETIC",
    "courses": [
      "web development",
      "project management",
      "business management",
      "digital creation",
      "entrepreneurship"
    ],
    "period": "September 2014 - December 2019",
    "link": "https://www.hetic.net"
  }
}
`}
        </code>
      </pre>
    </StyledCode>
  );
};

export default Code;
