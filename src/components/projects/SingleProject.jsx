import React from 'react'

const SingleProject = ({project}) => {
  return (
   <a href={`projects/${project.slug}`} className="block px-10 py-10 text-center dark:bg-gray-900">
    <h3 className="text-white">{project.name}</h3>
   </a>  
  )
}

export default SingleProject