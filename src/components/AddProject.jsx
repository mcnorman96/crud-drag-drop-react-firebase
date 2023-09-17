import React, { useState } from 'react'
import ProjectServices from '../services/ProjectServices';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Img, setImg] = useState('');
  const [Type, setType] = useState('');
  const [TechField, setTechField] = useState('');
  const [Url, setUrl] = useState('');
  const [GithubUrl, setGithubUrl] = useState('');  
  const navigate = useNavigate();

  const addProject = () => {
    ProjectServices.create({
      name: Name,
      slug: Name.trim(),
      description: Description,
      img: Img,
      type: Type,
      techfield: TechField,
      url: Url,
      githuburl: GithubUrl,
      order: 99
    })
    navigate('/');
  }

  return (
    <div className='max-w-xl px-4 m-auto mt-16 mb-10'>
      <h4 className="my-10 text-3xl font-bold text-center">Add Project</h4>
          <div className="edit-form">
            <form>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="name">name</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="name"
                  value={Name}
                  onChange={(e) => {
                    const target = e.target.value;
                    setName(target);
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
                  value={Description}
                  onChange={(e) => {
                    const target = e.target.value;
                    setDescription(target);
                  }}
                ></textarea>
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="img">img</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="img"
                  value={Img}
                  onChange={(e) => {
                    const target = e.target.value;
                    setImg(target);
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="type">type</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="type"
                  value={Type}
                  onChange={(e) => {
                    const target = e.target.value;
                    setType(target);
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="techfield">techfield</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="techfield"
                  value={TechField}
                  onChange={(e) => {
                    const target = e.target.value;
                    setTechField(target);
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="url">url</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="url"
                  value={Url}
                  onChange={(e) => {
                    const target = e.target.value;
                    setUrl(target);
                  }}
                />
              </div>
              <div className="flex flex-col my-5 form-group">
                <label className='my-2 capitalize' htmlFor="githuburl">githuburl</label>
                <input
                  type="text"
                  className="p-2 border-2 border-solid border-bg-gray-900 form-control"
                  id="githuburl"
                  value={GithubUrl}
                  onChange={(e) => {
                    const target = e.target.value;
                    setGithubUrl(target);
                  }}
                />
              </div>
            </form>
            <div className="flex w-fit">
            <button
              type="submit"
              className="btn-primary "
              onClick={() => addProject()}
            >
              Add Project
            </button>
            <button
              className="ml-5 btn-secondary"
            >
              <a href="/">
                Cancel
              </a>
            </button>
            </div>
          </div>
    </div>
  )
}

export default AddProject