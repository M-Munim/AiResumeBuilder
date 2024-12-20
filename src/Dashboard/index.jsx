import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

const index = () => {
  const user = useUser();
  // console.log(user);
  const [resumeList, setResumeList] = useState([])

  useEffect(() => {
    user && GetResumesList()
  }, [user]);

  // use to get user resume list
  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp.data);
        setResumeList(resp.data.data);
      })
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className="font-bold text-3xl">
        My Resume
      </h2>
      <p className="">
        Start Creating AI Resume to your next Job role
      </p>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-2 gap-5'>
        <AddResume />

        {
          resumeList.length > 0 && resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default index