import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function ProjetosList() {
  const { themePortfolio} = useContext(PortfolioContext);

  const projects = [
    { 
      project: 'Project Name',
      view: 'come see!',
      about:'Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.'
    },
    { 
      project: 'Project Name 2',
      view: 'come see!',
      about:'Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.'
    },
    { 
      project: 'Project Name 3',
      view: 'come see!',
      about:'Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.'
    },
    { 
      project: 'Project Name 4',
      view: 'come see!',
      about:'Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.'
    },
    { 
      project: 'Project Name 5',
      view: 'come see!',
      about:'Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.'
    },
  ]
  
  return (
    <div className={ themePortfolio ? "container-ligth" : "container-dark" }>
      {projects.map(({project, view, about}) => 
      <div className="card-container">
        <div className="card">
          <div className="card-wrapper">
            <h3>{project}</h3>
            <p>{view}</p>
          </div>     
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          {about}
        </div>
      </div>
      )}
    </div> 
  );
}
