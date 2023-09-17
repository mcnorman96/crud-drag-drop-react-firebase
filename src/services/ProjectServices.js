import { firestore } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite';

const projectsCol = collection(firestore, 'development');

const getProjects = async () => {
  const projectsSnapshot = await getDocs(projectsCol);
  const projectsList = projectsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  return projectsList;
}

class ProjectDataService {
  async getAll() {
    return getProjects();
  }

  async getSingleProject(slug) {
    return this.getAll().then((projects) => {
      console.log(projects );
      return projects.find((project) => project.slug === slug);
    })
  }

  create(project) {
    addDoc(projectsCol, project).then((res) => {
      console.log('added');
    }).catch((err) => console.log(err));
  }

  update(id, value) {
    const docRef = doc(firestore, 'development', id);
    return updateDoc(docRef, value).then(() => {
      console.log('updated');
    })
  }

  dragNdrop(projects) {
    return projects.forEach((project, index) => {
      project.order = index;
      return this.update(project.id, project);
    });
  }

  delete(id) {
    const docRef = doc(firestore, 'development', id);
    return deleteDoc(docRef).then(() => console.log("deleted"));
  }
}

export default new ProjectDataService();