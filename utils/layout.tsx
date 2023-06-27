import { AppBar, Button } from "@mui/material";
import Link from "next/link";

const Layout = ()=>{
    return(
        <>
            <AppBar position="fixed" color="primary" sx={{ height: "40px" }}>
                <Button variant="contained" color="warning"><Link href={"/todo/create"}>create</Link></Button>
            </AppBar>
        </>
    )
}


export default Layout;