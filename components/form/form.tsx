import { Button, TextField } from "@mui/material";
import Link from "next/link";

const Form = ({ register, handleSubmit, create, defaultTitle, defaultDescription }:any)=>{
    return(
        <>
            <form onSubmit={handleSubmit((data:any)=>create(data))}>
                        <div style={{ paddingBlock: "8%" }}>
                            <TextField 
                                type="text"
                                label="Title"
                                {...register("title", { required: true })}
                                defaultValue={defaultTitle}
                                placeholder={defaultTitle}
                            />
                        </div>
                        <div>
                            <TextField 
                                type="text"
                                label="Description"
                                {...register("description", { required: true })}
                                defaultValue={defaultDescription}
                                placeholder={defaultDescription}
                            />
                        </div>
                        <div style={{ display: "flex",  justifyContent: "space-between", padding: "8% 12%" }}>
                            <Button variant="contained" color="error" sx={{ color: "red" }}><Link href={"/todo"}>Cancel</Link></Button>
                            <Button variant="contained" type="submit" color="success" sx={{ color: "green" }}>Save</Button>
                        </div>
                </form>
        </>
    )
}

export default Form;