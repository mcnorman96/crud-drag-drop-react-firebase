import React, { useEffect, useState } from 'react'
import ProjectServices from '../../services/ProjectServices';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const url = window.location.href;
  const lastSegment = url.split("/").pop();
  const [currentProject, setCurrentProject] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    ProjectServices.getSingleProject(lastSegment).then((res) => {
      setCurrentProject(res);
    });
  }, [lastSegment])

  const updateProject = () => {
    ProjectServices.update(currentProject.id, currentProject).then(() => {
      navigate("/");
    });

  }

  const deleteProject = () => {
    ProjectServices.delete(currentProject.id).then(() => {
      navigate("/");
    });
  }
  
  return (
    <div className='max-w-xl px-4 m-auto mt-16 mb-10'>
      <h4 className="my-5 text-3xl font-bold text-center">Project</h4>
        {currentProject && (
          <div className="edit-form">
            <form>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="name">name</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="name"
                  value={currentProject.name}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        name: target,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="description">Description</label>
                <textarea
                cols="40" rows="15"
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="description"
                  value={currentProject.description}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        description: target,
                    }));
                  }}
                ></textarea>
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="img">img</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="img"
                  value={currentProject.img}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        img: target,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="type">type</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="type"
                  value={currentProject.type}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        type: target,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="techfield">techfield</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="techfield"
                  value={currentProject.techfield}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        techfield: target,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="url">url</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="url"
                  value={currentProject.url}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        url: target,
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="githuburl">githuburl</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="githuburl"
                  value={currentProject.githuburl}
                  onChange={(e) => {
                    const target = e.target.value;
                    setCurrentProject((prevState) => ({
                        ...prevState,
                        githuburl: target,
                    }));
                  }}
                />
              </div>
            </form>
            <div className="flex w-fit">
            <button
              type="submit"
              className="btn-primary "
              onClick={() => updateProject()}
            >
              Update
            </button>
            <button
              className="ml-5 btn-secondary"
              onClick={() => deleteProject()}
            >
              Delete
            </button>
            </div>
          </div>
        ) 
      }
    </div>
  )
}

export default ProjectDetail