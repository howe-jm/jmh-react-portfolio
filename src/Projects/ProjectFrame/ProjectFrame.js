import React from 'react';

export default function ProjectFrame(props) {
  const { project } = props;
  return (
    <div className='single-project'>
      <h4>{project.name}</h4>
      <div className='thumbnail'>
        <img src={project.thumbnail} alt={project.shortDesc} />
      </div>
      <p>{project.shortDesc}</p>
      <h5>Tech Used: {project.techUsed}</h5>
      <ul className='project-url-list'>
        <span className='links-text'>Links:</span>
        {project.liveUrl && (
          <li>
            <a href={project.liveUrl} target='_blank' rel='noreferrer'>
              Live App
            </a>
          </li>
        )}
        {project.apiUrl && (
          <li>
            <a href={project.apiUrl} target='_blank' rel='noreferrer'>
              API Git Repository
            </a>
          </li>
        )}
        {project.clientUrl && (
          <li>
            <a href={project.clientUrl} target='_blank' rel='noreferrer'>
              Client Git Repository
            </a>
          </li>
        )}
        {project.repoUrl && (
          <li>
            <a href={project.repoUrl} target='_blank' rel='noreferrer'>
              Git Repository
            </a>
          </li>
        )}
      </ul>
      <p>{project.desc}</p>
    </div>
  );
}
