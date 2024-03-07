/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Portfolio() {
  const [slides, setSlides] = useState([
    {
      src: "/Burger.gif",
      github: "https://github.com/professorx00/BurgerApp",
      title: "Burger Town",
      description:
        "A  Jquery / Handlebars game that allows you to create a burger name and then eat it",
      tech: "NodeJS, ExpressJS, Materialize, Handlebars Layout, MySQL, Sequelize",
    },
    {
      src: "/FriendFinder.gif",
      github: "https://github.com/professorx00/FriendFinder2",
      title: "Friend Finder",
      description:
        "A Jquery Survey that allows you to find a particular character based on the questions answered",
      tech: "Jquery, Node JS, MySQL",
    },
    {
      src: "/GifRetriever.gif",
      github: "https://github.com/professorx00/Gif-Retreiver",
      title: "Gif Retriever",
      description:
        "An API connection app that allows you to find gif from Giphy's API",
      tech: "Jquery, Javascript, Giphy API",
    },
    {
      src: "/MovieGuess.gif",
      github: "https://github.com/professorx00/What-Movie",
      title: "Movie Guess",
      description:
        "Movie Guessing Game that allows you to play hangman with movie titles",
      tech: "Jquery, Javascript, Bootstrap",
    },
    {
      src: "/Newt.gif",
      github: "https://github.com/professorx00/NEWT-Application",
      title: "NEWT",
      description:
        "An App that allows you to see what calories and nutrients are in the food you eat.",
      tech: "Jquery, Ajax, Firebase Authentication, Firebase Database",
    },
    {
      src: "/QuizGame.gif",
      github: "https://github.com/professorx00/QuizGame",
      title: "Trivia Quiz Game",
      description:
        "A Trivia Quiz game that utilizes an API to get questions and answers",
      tech: "Jquery, Ajax, Open Trivia API",
    },
    {
      src: "/rockPaper.gif",
      github: "https://github.com/professorx00/RockPaperScissorsLizardSpock",
      title: "Rock Paper Scissors Lizard Spock",
      description:
        "The normal rock paper and Scissors game but adding Spock and Lizard from the big bang ",
      tech: "Jquery, Javascript",
    },
    {
      src: "/smash.gif",
      github: "https://github.com/professorx00/Smash_Brother_Fighter_Clicker",
      title: "Smash Brothers Fighter",
      description:
        "A Smash Brother theme game that bits fighters and reduces hit points based on random rolls. ",
      tech: "Jquery, Javascript",
    },
    {
      src: "/Train.gif",
      github: "https://github.com/professorx00/Train-Tracker-Logger",
      title: "Train Tracker",
      description:
        "An App that allowed you to add trains and set an interval for them to continue through out the day.",
      tech: "Jquery, Javascript, MySQL",
    },
    {
      src: "/Vahalla.gif",
      github: "https://github.com/professorx00/CriticalCode",
      title: "Vahalla",
      description:
        "a character generator for dungeons and dragons. It allowed you to store, edit, and retrieve them.",
      tech: "EJS, Node, Express, Express layouts, passport, AWS S3, Bootstrap, MySQL, Sequelize",
    },
  ]);
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-500 to-slate-800">
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
        Portfolio
      </h1>
      <div className="p-24 w-[50%] m-auto pt-11 bg-slate-700 rounded-xl shadow-2xl shadow-slate-950">
        <div className="overflow-hidden relative">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((el, i) => {
              return (
                <img
                  src={el.src}
                  alt="..."
                  key={`image${i}`}
                  className="w-screen h-full"
                />
              );
            })}
          </div>

          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={previousSlide} className="bg-black rounded-full">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide} className="bg-black rounded-full">
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-light">
          <h1 className="text-4xl">{slides[current].title}</h1>
          <p>{slides[current].description}</p>
          <p>Technology Used</p>
          <p>{slides[current].tech}</p>
          <p>
            <a href={slides[current].github} target="_blank">
              See Code
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
