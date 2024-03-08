/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24 bg-gradient-to-r from-slate-500 to-slate-800 w-full">
      <div className="w-full ">
        <h1 className="text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
          About Me
        </h1>

        <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue hidden md:flex justify-center items-center">
          Innovative Full-Stack Developer with a Flair for Creativity
        </h1>

        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-14 ">
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-orange-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6 border-b border-orange-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                The Beginning
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                I started my journey in California, where I pursued a degree in
                animation. I quickly fell in love with the creativity and
                problem-solving aspects of animating, particularly the physics
                of animation. As I advanced my education into the 3D realm, I
                discovered Python as a scripting language and took to it as a
                bug to a flame. After graduation, I worked as an Implementor for
                a local time and attendance reseller, where I frequently used
                Python to write calls to the Time and Attendance software. As I
                delved deeper into the software's API, I realized that our
                clients needed a more accessible front-end to access data
                outside of the software. This realization motivated me to seek
                more education and I enrolled in UNH Coding Bootcamp for Full
                Stack Development. There, I learned how to develop robust and
                user-friendly web applications.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-blue-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6 border-b border-blue-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                Currently
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                After completing the bootcamp, I joined Farmhand Automation,
                where I created a React application to manage fleets and
                remotely connect to robotic farm bots. I also developed a React
                Native app to help clients manage their farms and robots more
                efficiently. Currently, I am working as a contract worker at
                Apple, focusing on backend development and Vue frontends for
                internal applications. My experience in developing full-stack
                applications and my expertise in Python and React have helped me
                excel in my current role.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-rose-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6 border-b border-rose-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                The Future
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                Throughout my journey as a developer, I have found that constant
                growth and learning are essential to achieving success. As I
                reflect on my experiences so far, I am excited to continue
                pushing myself to learn more and take on new challenges. In
                particular, I am eager to advance my knowledge and experience in
                the modern frameworks such as Vue and React. As I have recently
                worked on Vue applications, I have come to appreciate the
                framework's flexibility and efficiency. I am excited to learn
                more best practices to create even more robust and user-friendly
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-14">
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-emerald-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6  border-b border-emerald-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                Outside of My Career
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                Outside of work, my creativity finds its outlet in the realm of
                fantasy and role-playing. A dedicated Dungeons and Dragons
                enthusiast, I have merged my programming prowess with my hobby
                to create engaging modules for virtual tabletop gaming. I am
                currently channeling my imaginative energies into writing my own
                role-playing system and setting.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-violet-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6 border-b border-violet-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                Family
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                I am dedicated husband and father. Family is important to me. My
                family is understanding and helpful in my pursuits inside and
                outside of my career. My Family has been encouraging in allowing
                me to learn new technologies and other endeavors such as writing
                a game setting and system.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-600 rounded-b-xl border border-cyan-300 shadow-2xl shadow-slate-800">
            <div className="w-full bg-dark p-6 border-b border-cyan-300">
              <h1 className="text-2xl font-extrabold tracking-tight text-center text-resumeBlue">
                Dedication
              </h1>
            </div>
            <div className="p-6 text-light">
              <p>
                I really appreciate new technologies and the struggles that they
                bring to the problems of programming. I have a knack to learn
                new technologies quickly and effectively. I had no idea about
                Vue when I started working for Pinnacle Group @ Apple Inc. I
                took two weeks before I started and create several apps using
                the technology so that I was prepared when the new job started.
                At first, I found Vue to be backwards from my React training but
                I quickly that I was writing fluently in the framework as I did
                with React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
