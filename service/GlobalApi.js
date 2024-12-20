import axios from "axios";
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
// console.log("API Key:", API_KEY);


const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": 'application/json',
    "Authorization": `Bearer ${API_KEY}`
  }
})

// console.log(axiosClient);

const CreateNewResume = (data) => axiosClient.post('/user-resumes', data);
// const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes?[userEmail][$eq]=' + userEmail);
const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes');
// const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes?filters[userEmail][$eq]=' + userEmail);



const UpdateResumeDetail = (id, data) => axiosClient.put('/user-resumes/' + id, data)

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail
}