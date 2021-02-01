import React from 'react';
import portfoliomain from '../images/portfolio-main.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className='portfolio-main'>
      <article className='about-section'>
        <h3>Hello! My name is Jason.</h3>
        <h4>I'm from Columbus, Ohio and I'm a full stack web developer.</h4>
        <div className='profile-image'>
          <img src={portfoliomain} alt='Jason Howe' />
        </div>
        <p>
          I specialize in full-stack development with Node.js, using technologies such as React, Express, and PostgreSQL
          to create well-rounded, fully-functional web-apps. I'm an extremely self-motivated person and I love to rise
          to a challenge! Furthermore, I have developed an interest in Agile and DevOps methodologies. My coding ability
          combined with a lifetime of technical skills and experience with Linux server administration as a tech
          hobbiest, I'd be a well-rounded and very capable member of any team. I'm also pretty handy with a light saber.
        </p>
      </article>
      <div className='skills-list'>
        <h3>Skills Offered</h3>
        <ul>
          <li>Javascript</li>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
          </ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>Linux</li>
          <li>Python</li>
        </ul>
      </div>
      <div className='story-container'>
        <article className='story-section'>
          <h3>My Story</h3>
          <p>
            For almost ten years, I drove a semi truck for various companies. My work ethic and ambition brought me to
            the top of my field, and at 36 years old, I found myself driving for one of the top fleets in the country. I
            was proud of my accomplishments, but when I asked myself if this was the job I wanted to have for the rest
            of my life, I found that I had a lot of trouble saying yes. As far as I'd come, I knew that I was destined
            for more, and so I decided to pursue my life-long dream of getting in to software development.
          </p>
          <p>
            I took a risk, quit my job, and dedicated myself to learning to code through Thinkful, an online boot camp,
            and now I find myself at the very beginning of a new life, full of exciting potential. For almost a decade,
            I spent my time working alone, independently, relying only on myself and my own skills to keep myself out of
            trouble and finish the job on time. But as I learned to code, I found that I had to rely more on more on the
            assistance and cooperation of friends, fellow coders, and team-members on big projects.
          </p>
          <p>
            It's been a long and sometimes difficult journey to go from one career to another, but I'm proud of how far
            I've come and what I've accomplished. Thank you for taking the time to read a little bit about me!
          </p>
        </article>

        <article className='story-section'>
          <h3>Life Away From the Keyboard</h3>
          <p>
            For almost ten years, I drove a truck. I got to see many places in this country as I passed through them,
            but never stayed in one place for long. Though the hours were grueling and the work often tedious and
            sometimes dangerous, the lifestyle suited me because I'm always ready and eager to face the next challenge.
            From the careful precision and control of maneuvering an 80,000 pound big-rig down a steep hill, to the
            timing and coordination necessary to navigate tight docks and unyielding parking lots, I always felt
            challenged.
          </p>
          <p>
            Today, I'm facing new challenges, but applying the same skills and attributes I picked up behind the wheel
            to them every day. Precision, adaptability, perseverance, level-headedness, patience, and problem-solving. I
            spent almost ten years helping to ensure that the products you know and love made it to your store shelves.
            And now, I want to spend my time making sure the software you use every day makes it in to your hands, ready
            to use or implement.
          </p>
        </article>
      </div>
      <article className='about-section'>
        <h3>My Hobbies</h3>
        <p>Aside from coding and learning, I have a lot of passions that I pursue in my free time!</p>
        <p>
          I'm a certified Advanced Open Water scuba diver, and even though it's been a while since I've been in the
          water, I enjoy it whenever I get to dive. When I can, I like to ride horses and camp, and I've even been
          whitewater rafting! I enjoy the outdoors and I'm most relaxed when I'm surrounded by trees, mountains, or
          water.
        </p>
        <p>
          I am also an avid gamer. From PC and console video games, to tabletop board games, and Dungeons and Dragons, I
          enjoy the camaraderie that comes with joining your friends in cooperative or competitive battle. Not to
          mention, the skills I've picked up as a Dungeons and Dragons Dungeonmaster make me an asset in any situation
          that requires quick thinking and creativity!
        </p>
        <p>
          Lastly, I am passionate about craft beer. Especially local beers brewed here in Ohio! I enjoy all varieties of
          beer, and I can often be found visiting local breweries and biergartens, or looking through the local shops
          for my favorite brews. I am especially fond of stouts!
        </p>
      </article>
    </div>
  );
}
