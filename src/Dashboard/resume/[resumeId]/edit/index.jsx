import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useState } from 'react';
import dummy from '@/data/dummy';

const EditResume = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState()

  useEffect(() => {
    // console.log(params.resumeId);
    setResumeInfo(dummy)
  }, [])

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section */}
        <FormSection />

        {/* Preview Section */}
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume