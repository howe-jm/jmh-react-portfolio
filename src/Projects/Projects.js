import React from 'react';
import ProjectFrame from './ProjectFrame/ProjectFrame';
import gsn from '../images/projects/gsn.jpg';
import nostalgiabot from '../images/projects/nostalgia-bot.jpg';
import spacedrep from '../images/projects/spaced-rep.jpg';
import workwork from '../images/projects/workwork.jpg';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      name: 'WorkWork',
      shortDesc: 'A PERN-stack app for job and study tracking',
      thumbnail: workwork,
      liveUrl: 'https://workwork-client.vercel.app/',
      apiUrl: 'https://github.com/howe-jm/workwork-api',
      clientUrl: 'https://github.com/howe-jm/workwork-client',
      techUsed: 'PostgreSQL, Express, React, Node',
      desc: `My first full-stack app, I created WorkWork to help me keep track of potential job leads, contact info, and study tasks after finishing my coding boot camp. It uses a very familiar card-based format, iterating template components on data retrieved from the back-end. Users can add and remove cards, add relevant info to those cards, and update them in real time with a responsive React-based interface. I designed it specifically to send state data in an intuitive and useful way similar to how most modern APIs function.`,
    },
    {
      name: 'Gaming Social Network',
      thumbnail: gsn,
      shortDesc: 'A functional mock-up of a gaming social network',
      apiUrl: 'https://github.com/howe-jm/gaming-social-network-server',
      clientUrl: 'https://github.com/howe-jm/gaming-social-network-client',
      techUsed: 'PostgreSQL, Express, React, Node',
      desc: `'Gaming Social Network,' or GSN for short, is a mock-up of a basic social network. I was a part of a team for this project and was responsible primarily for back-end functionality, including database design, endpoints, and endpoint testing. This mock-up supports adding friends, joining groups, uploading profile portraits and banner images, and more. This project provided me with invaluable experience working on a team to accomplish a singular goal!`,
    },
    {
      name: 'Nostalgia Bot',
      thumbnail: nostalgiabot,
      shortDesc: 'A Python-based Discord bot with custom responses',
      repoUrl: 'https://github.com/howe-jm/nostalgia-bot',
      techUsed: 'Python, Linux',
      desc: `Just to try my hand at python and programming responsive Discord bots, I decided to recreate the SlackBot functionality found in Thinkful's Slack server! While mostly for fun, I think this project is an ample demonstration of my ability to quickly learn and adapt to different languages and development settings. In addition to creating the bot, I also deployed it to a live Linux VPS for 24/7 up-time, using tools like supervisord to daemonize the bot for auto-restarting.`,
    },
    {
      name: 'Spaced Repetition',
      thumbnail: spacedrep,
      shortDesc: 'A spaced-repetition language learning app',
      liveUrl: 'https://spaced-repetition-howe-jm.vercel.app/register',
      apiUrl: 'https://github.com/howe-jm/spaced-repetition-server',
      clientUrl: 'https://github.com/howe-jm/spaced-repetition-client',
      techUsed: 'PostgreSQL, Express, React, Node',
      desc: `This is a very simple spaced repetition app that represents my ability to take a pre-existing base of code, and interate upon it to create a finished project. In this case, the framework for the app was already in place, including user accounts and authentication, as well as several endpoints. I was tasked with following through to complete the app by adding logic and endpoint functionality on the front end, and components to flesh out the functionality on the front end. I chose to use Klingon as the language for my app!`,
    },
  ];

  return (
    <div className='projects-container'>
      <h3>My Projects</h3>
      <p>I'm passionate about what I create, and here are a few examples of projects I've worked on in the past.</p>
      <ul className='projects-list'>
        {projects.map((project, index) => (
          <li className='project-frame' key={index}>
            <ProjectFrame project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
