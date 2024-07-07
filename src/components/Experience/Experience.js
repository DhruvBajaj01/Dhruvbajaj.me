import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./experienceCards";
import Particle from "../Particle";


function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few compaines I've worked for recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Founding Engineer - Backend Developer"
              subtitle='Aristan AI'
              time = 'Oct 2023 – May 2024 | California, US Remote'
              description="• Designed and developed frameworks for the product, including the core backend architecture, APIs, and data models, ensuring robustness, scalability, and performance.
              "
              description_r="• Successfully integrated third-party solutions such as Appolo, Gmail, Outlook, Warmy, Mailgenius, and Sendgrid, enriching the product's capabilities and providing users with expanded options for communication and campaign management.
              "
              description_p="• Optimised (LLM) calls by batching and parallelising processes, significantly reducing response times from several hours to just a few minutes."
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Software Developer"
              subtitle='Natwest Group'
              time = 'May 2023 – Present | Gurugram, Haryana'
              description="•Developed and maintained Python-based adaptors/middleware for the Treasury Intraday Liquidity Management system, creating seamless integration with upstream data sources like ledger messages and payment settlement messages, ensuring accurate and efficient data processing.
              "
              description_r="•Designed and implemented automation scripts in Python, optimizing workflow processes and improving operational efficiency for the Treasury Intraday Liquidity Management system.
              "
              description_p="•Deployed and managed the software on servers, actively monitoring performance and implementing measures for high availability and reliability of the system."
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Backend Engineer"
              subtitle='Studio Lama'
              time = 'Jan 2023 – May 2023 | India Remote'
              description="•Designed and developed a robust backend application for Apply Course using Django framework and PostgreSQL, enabling efficient management and processing of course applications.
              "
              description_r="•Implemented user profiles with different roles and permissions, ensuring secure access to the database based on assigned roles, effectively managing user privileges and data confidentiality.
              "
              description_p="•Collaborated closely with the frontend team to ensure seamless integration between the frontend and backend systems, providing a smooth user experience and efficient data retrieval and manipulation."
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Backend Engineer"
              subtitle='Global Technocrats'
              time = 'Jan 2023 – Mar 2023 | India Remote'
              description="•Developed backend systems using Django framework for machine learning models and scraping scripts, enabling efficient data processing and analysis
              "
              description_r="•Created microservices using AWS Lambda to optimize backend models, resulting in modular and easily maintainable codebases.
              "
              description_p="•Deployed Django-based backend on AWS, utilizing services like AWS Elastic Beanstalk and AWS RDS for optimal performance, high availability, and scalability."
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Software Engineering Intern"
              subtitle='Arista Networks'
              time = 'Aug 2022 – Dec 2022 | Bangalore, Karnataka'
              description="•Proficient in layer 2 and layer 3 networking protocols, 
              with a strong grasp of packet switching and routing principles.
              "
              description_r="•Demonstrated expertise in network design and testing, 
              contributing to the development of robust and efficient networks.
              "
              description_p="•Hands-on experience with Arista's cutting-edge Cloud Vision
               Platform, with a focus on testing advanced features such as layer 2 and layer 3 subinterfaces."
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="Full Stack Developer Intern"
            subtitle='HighRadius'
            time = 'Jan 2022 - Apr 2022 | India Remote'
            description="•Developed and deployed a Fintech B2B cloud application using React.js, Java, and machine learning components, enabling Account Receivable users to view, process, and predict invoice payments.
            "
            description_p="•Built a full-stack invoice management application with React, JDBC, Postgres, Python and Java, featuring data managment, searching, editing, and deleting capabilities, as well as a responsive dashboard."
            description_r="•Demonstrated expertise in front-end and back-end development, as well as data visualization, processing, and predictive modeling using machine learning components."
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
              title="Python Development Intern"
            subtitle='Docplus Online'
            time = 'Jul 2021 – Jan 2022 | Remote'
              description="•Achieved proficiency in utilizing Python's Selenium and Beautiful Soup libraries to scrape healthcare websites, gather data on doctors, hospitals, and medicines, and automate data fetching processes.
              "
              description_p="•Developed and implemented Python scripts
               for real-time data retrieval and translation of website content into
                over 65 languages."
              description_r='•Performed automation scripting and testing using Selenium, 
              ensuring accuracy and reliability of data extraction and automation processes.'            
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="Data Mining Intern"
            subtitle='Make Me Builder'
            time = 'Apr 2021 – Jul 2021 | Virtual'
            description=" •Designed and implemented algorithms for 
            data cleaning and data profiling using Python and Pandas, ensuring high data quality
             and consistency.
              "
            description_p=" •Performed thorough Exploratory Data Analysis (EDA) 
            on datasets, utilizing a variety of statistical and visualization 
            techniques to gain insights into data patterns and relationships."
            description_r='•Achieved proficiency in maintaining organized data in a specific order 
            through efficient data manipulation and management techniques, 
            ensuring accessibility and usability for downstream analysis and reporting.'
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="Machine Learing Intern"
            subtitle='Madras Scientific Research Foundation'
            time = 'Feb 2021 – Apr 2021 | Remote'
              description=" Wrote academic blogs on Machine Learning and 
              worked on research projects. One project involved developing an 
              autocompletion feature using NLP and Python libraries such as 
              Spacy and FastAutocomplete. 
              "
              description_p="Another project was implementing image recognition
               and feature detection using Caffe library and explaining its
                working."

              description_r=" Lastly, I implemented the SURF research paper and its 
              application in OpenCV for real-time object detection."
              
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="IoT Intern"
            subtitle='VEI Technolgy'
            time = 'Jan 2021 – Feb 2021 | Remote'
              description="•Acquired in-depth knowledge of IoT architecture, protocols, and 
              applications, with a focus on Home Automation technology.
              "
              description_p="•Demonstrated proficiency in working with hardware components, including Arduino UNO,
               Raspberry Pi, and IoT sensors, to design and develop advanced IoT systems.
              "
              description_r='•Successfully completed a hands-on project, 
              from conception to completion, utilizing API integration and showcasing the ability to 
              deliver a fully functional IoT solution within a predetermined timeline.'
            />
          </Col>

        </Row>
        <br></br>
        <br></br>
        <h1 className="experience-heading">
          My <strong className="purple"> Positions of Responsibility </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few extra-curriculars.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCards
              title="GirlScript Summer of Code- Mentor and Contributor"
              time = 'March 2022-May 2022'
            //   description="• Proficient in layer 2 and layer 3 networking protocols, with hands-on experience in designing, testing, and optimizing networks."
            //   description_p="• Demonstrated expertise with Arista's Cloud Vision Platform, including in-depth testing of advanced features like layer 2 and layer 3 subinterfaces."
              
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="GirlScript Winter Of Contributing- Mentor for 'Data Science with Python'"
            time = 'Sep 2021-Dec 2021'
            
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="Technical Head and Joint PRO- Ramanujan Mathematics Club SRM"
            time = 'Aug 2021-Dec 2022'
            
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
            title="Technical Associate- NWC Association SRM"
            time = 'Aug 2021-May 2022'
            
            />
          </Col>
           
        </Row>

      </Container>
    </Container>
  );
}

export default Experience;