import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from "uuid"
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../../service/GlobalApi'
import { useNavigate } from 'react-router-dom'

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const navigation = useNavigate()

  // const onCreate = async () => {
  //   setLoading(true);
  //   const uuid = uuidv4();
  //   // console.log(resumeTitle, uuid)

  //   const data = {
  //     data: {
  //       title: resumeTitle,
  //       resumeId: uuid,
  //       userEmail: user?.primaryEmailAddress?.emailAddress,
  //       userName: user?.fullName
  //     }
  //   }

  //   console.log(data);
  //   console.log(payload); // Verify the data being sent

  //   GlobalApi.CreateNewResume(data).then(resp => {
  //     console.log(resp);

  //     if (resp) {
  //       setLoading(false);
  //     }
  //   }, (error) => {
  //     console.log(error);
  //     setLoading(false);
  //   })
  // }




  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();

    const payload = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    // console.log("Payload:", payload);

    try {
      const response = await GlobalApi.CreateNewResume(payload);
      console.log("Response:", response.data);
      setLoading(false);
      navigation('/dashboard/resume/' + response.data.data.documentId + "/edit")
      setOpenDialog(false); // Close dialog on success
    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <span>Add a title for your new resume</span>
              <Input className="mt-3" placeholder="Ex.Full Stack Resume"
                onChange={(e) => setResumeTitle(e.target.value)}

              />
            </DialogDescription>

            <div className="flex justify-end gap-5 mt-2">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {
                  loading ? <Loader2 className='animate-spin' /> : 'Create'
                }
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddResume