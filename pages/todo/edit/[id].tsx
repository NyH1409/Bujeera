import Form from "@/components/form/form";
import { useProvider } from "@/provider/dataProvider";
import { CreateTask, Task } from "@/utils/type";
import { Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


const editTask = ()=>{
    const { push, query: { id } } = useRouter();
    const { register, handleSubmit } = useForm();
    const getTaskById  = useProvider((state) => state?.getTaskById);
    const task  = useProvider((state) => state?.task);
    const updateTask  = useProvider((state) => state?.updateTask);

    const update = (data:CreateTask) => {
        let toUpdate:Task = {
            id: id,
            title: data.title,
            description: data.description
        }
        updateTask(toUpdate);
        push("/todo")
    }

    useEffect(()=>{
        getTaskById(id)
    }, [])

    return(
        <>
            <Paper elevation={3} sx={{ width: 300, alignItems: "center", textAlign : "center", margin: "5% auto" }}>
                <div style={{ paddingBlock: "10%" }}>
                    <Typography variant="h6" color="GrayText">New Task</Typography>
                    <Form 
                        register={register} 
                        handleSubmit={handleSubmit} 
                        create={update}
                        defaultTitle={task?.title}
                        defaultDescription={task?.description}
                    />
                </div>
            </Paper>
        </>
    )
}

export default editTask;