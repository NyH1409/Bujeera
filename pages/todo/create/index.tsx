import Form from "@/components/form/form";
import { useProvider } from "@/provider/dataProvider";
import { CreateTask } from "@/utils/type";
import { Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


let addTask = ()=>{
    const { push } = useRouter();
    const { register, handleSubmit } = useForm();
    const createTask  = useProvider((state) => state?.createTask);

    const create = (data:CreateTask) => {
        createTask(data)
        push("/todo")
    }

    return(
        <>
           <Paper elevation={3} sx={{ width: 300, alignItems: "center", textAlign : "center", margin: "5% auto" }}>
                <div style={{ paddingBlock: "10%" }}>
                    <Typography variant="h6" color="GrayText">New Task</Typography>
                    <Form register={register} handleSubmit={handleSubmit} create={create}/>
                </div>
           </Paper>
        </>
    )
}

export default addTask;