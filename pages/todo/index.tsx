import { useProvider } from "@/provider/dataProvider";
import Layout from "@/utils/layout";
import { Task } from "@/utils/type";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";


const Tasks = ()=>{
    const [display, setDisplay] = useState("flex");
    const zustandTasks = useProvider(state => state?.tasks);
    const getTasks = useProvider(state => state?.getTasks);
    const deleteTask = useProvider(state => state?.deleteTask);
    
    useEffect(()=>{
        setInterval(()=>{
            if (window.screen.width<1000) {
                setDisplay("inline")
            }else{
                setDisplay("flex")
            }
            console.log(window.screen.width);
            getTasks()
        }, 1000)
    }, [])
    
    return (
        <>
        <Layout/>
        <Box sx={{ display: display, justifyContent: "space-between", textAlign: "center" }}>
            <Paper elevation={3} sx={{ width: 350, alignItems: "center", textAlign : "center", margin: "5% auto" }}>
                <div style={{ paddingBlock: "5%", margin: "auto" }}>
                    <Typography variant="h6" color="GrayText">TODO</Typography>
                    {
                        zustandTasks.map((elt:Task, k:number)=>(
                            <>
                                <Card key={k} sx={{ width : 300, margin: "5% auto" }} draggable={true}>
                                    <CardHeader
                                        title={elt?.title}
                                        avatar={<Avatar alt="TODO" variant="square" src="TODO" sx={{ background: "green" }}/>}
                                    />
                                    <CardContent>
                                        <Typography color="GrayText" variant="body1">{elt?.description}</Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-between"}}>
                                        <Delete color="error" onClick={()=>deleteTask(elt?.id)}/>
                                        <Link href={`/todo/edit/${elt?.id}`}><Edit color="action"/></Link>
                                    </CardActions>
                                </Card>
                            </>
                        ))
                    }
                </div>
            </Paper>
            <Paper elevation={3} sx={{ width: 350, alignItems: "center", textAlign : "center", margin: "5% auto" }}>
                <div style={{ paddingBlock: "5%", margin: "auto" }}>
                    <Typography variant="h6" color="GrayText">IN PROGRESS</Typography>
                </div>
            </Paper>
            <Paper elevation={3} sx={{ width: 350, alignItems: "center", textAlign : "center", margin: "5% auto" }}>
                <div style={{ paddingBlock: "5%", margin: "auto" }}>
                    <Typography variant="h6" color="GrayText">DONE</Typography>
                    
                </div>
            </Paper>
        </Box>
        </>
    )
}

export default Tasks;