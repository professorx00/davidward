import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main className="flex min-h-screen w-12/12 flex-col items-center justify-between lg:p-24  bg-gradient-to-r from-slate-500 to-slate-800">
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
        Experience
      </h1>
      <Timeline className="w-10/12">
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              December 2022-March 2024
            </TimelineTime>
            <TimelineTitle className="text-light">
              Pinnacle Group @Apple inc
            </TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              Software Developer
            </TimelineTitle>
            <TimelineBody className="text-white">
              <ul>
                <li>
                  • Maintain existing software with updates and security checks
                </li>
                <li>
                  • Developed Nuxt JS 2 and 3 applications for internal use
                  between departments.
                </li>
                <li>
                  • Managed and Maintained Postgres SQL databases for those
                  applications.
                </li>
                <li>• Work closely with a team to reach deadlines.</li>
                <li>
                  • Developed skills on the job to help assist in places that
                  were needed.
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              October 2021 - July 2022
            </TimelineTime>
            <TimelineTitle className="text-light">
              Farmhand Automation
            </TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              MERN Full Stack Developer
            </TimelineTitle>
            <TimelineBody className="text-white">
              <ul>
                <li>
                  • Contributed ideas and suggestions in team meetings and
                  delivered updates on deadlines, designs, and enhancements.
                </li>
                <li>
                  • Reviewed code, debugged problems, and corrected issues.
                </li>
                <li>
                  • Delivered performance-driven and user-centric websites that
                  met all business requirements.
                </li>
                <li>
                  • Developed a client facing React Native application using
                  Expo as a framework
                </li>
                <li>
                  • Develop an administrative React application which used Web
                  Socket and Next JS as a framework structure.
                </li>
                <li>
                  • Handle creation of Web Socket messaging manager, used to
                  create a connection with the robotic rover.
                </li>
                <li>
                  • Use Node JS, Express JS, Firebase, Mongo DB, Mongoose to
                  develop a backend API, which used Swagger UI as documentation,
                  to allow communication to and from the robot as well as
                  retrieve data stored in Influx and Mongo Databases.
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              January 2020 - October 2021
            </TimelineTime>
            <TimelineTitle className="text-light">
              Tyler Technologies
            </TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              DevOps Engineer
            </TimelineTitle>
            <TimelineBody className="text-white">
              <ul>
                <li>
                  • Monitored automated build and continuous software
                  integration process to drive build/release failure resolution.
                </li>
                <li>
                  • Worked with cross-functional design teams to create software
                  solutions that improved overall functionality and performance.
                </li>
                <li>
                  • Researched and identified new technologies to use in agile
                  development environment.
                </li>
                <li>
                  • Wrote code and supported architecture in high-throughput
                  systems.
                </li>
                <li>
                  • Implemented best practices to protect data and assets.
                </li>
                <li>
                  • Worked on React frontend to communicate with SQL database
                </li>
                <li>
                  • Maintained and Supported C# 4.6 Framework Applications
                </li>
                <li>
                  • Maintained, Created, and Supported CI Builds in Team City
                  and Azure
                </li>
                <li>
                  • Wrote Power-Shell scripts to enhance operation processes
                  such as User Identification in LDAP
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              January 2015 - January 2020
            </TimelineTime>
            <TimelineTitle className="text-light">
              Cincinnati Time Recorder of Maine (CTR Maine)
            </TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              Implementation Software Engineer
            </TimelineTitle>
            <TimelineBody className="text-white">
              <ul>
                <li>
                  • Assisted clients with monitoring all software implementation
                  lifecycles.
                </li>
                <li>
                  • Worked with technical staff on system audit to execute
                  implementations on time and within functional parameters.
                </li>
                <li>• Configured and executed system software changes..</li>
                <li>
                  • Wrote and maintained custom scripts with Python and Pandas
                  to create custom entry and reporting for clients
                </li>
                <li>
                  • Managed Affordable Care Act implementation and on-going
                  support.
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
        Education
      </h1>
      <Timeline className="w-10/12">
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              July 2019-January 2020
            </TimelineTime>
            <TimelineTitle className="text-light">
              University of New Hampshire
            </TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              MERN Full Stack Developing Certification
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              June 2004-January 2006
            </TimelineTime>
            <TimelineTitle className="text-light">Brooks College</TimelineTitle>
            <TimelineTitle className="text-2xl text-teal-400">
              Associates in Animation
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </main>
  );
}
