import React, { useEffect, useRef, useState } from 'react'
import ProjectServices from '../../services/ProjectServices';
import SingleProject from './SingleProject';
import { moveInArray } from '../utils/utils';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [updatedOrder, setUpdatedOrder] = useState(false)

  useEffect(() => {
      ProjectServices.getAll().then((res) => {
        const response = res.sort((a, b) => a.order - b.order);
        setProjects(response);
      })
  }, [])

  const draggedItem = useRef();

  // Updated the dragged item when dragging
  const handleOnDrag = (e, project) => {
      draggedItem.current = project;
  };

  // Handling what to do when dropping the project a new place
  const handleOnDrop = (e, project) => {
      e.currentTarget.firstElementChild.classList.remove('dnd-sortable-drag');

      // If it is the same place the project is dropped -> do nothing
      if (draggedItem.current === project) return;

      const draggedItemId = projects.findIndex((projectIndex) => projectIndex.order === draggedItem.current.order);
      const tovieworder = projects.findIndex((projectIndex) => projectIndex.order === project.order);

      // Function to move items around in the array
      const newprojects = moveInArray([...projects], draggedItemId, tovieworder);
      if (newprojects) {
          setProjects(() => newprojects);
          setUpdatedOrder(true);
      }
  };

  // Handling dragging over elements
  const handleDragOver = (e, project) => {
      if (draggedItem.current === project) return;

      // Needed to make it a droppable zone
      e.preventDefault();
      e.currentTarget.firstElementChild.classList.add('dnd-sortable-drag');
  };

  // When the dragged element leaves the dragover zone
  const handleDragLeave = (e) => {
      e.currentTarget.firstElementChild.classList.remove('dnd-sortable-drag');
  };

  const handleUpdateOrder = () => {
    ProjectServices.dragNdrop(projects);
  }

  return (
    <div className='max-w-screen-xl px-4 m-auto'>
      <h1 className='my-16 text-center'>Projects</h1>
      <div className="grid justify-between max-w-screen-xl grid-cols-1 gap-4 mx-auto mt-5 max-xl sm:grid-cols-2 md:grid-cols-3">
        {projects && projects.map((project, index) => (
          <div
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, project)}
            onDragOver={(e) => handleDragOver(e, project)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleOnDrop(e, project)}
            key={index}
          >
            <SingleProject project={project}  />
          </div>
        ))}
      </div>
      <button disabled={!updatedOrder} onClick={() => handleUpdateOrder()} className="mt-16 btn-primary">
        Update order
      </button>
    </div>
  )
}

export default Projects