import { Inter } from 'next/font/google'
import { Box, Button, Card } from "@mui/material";
import { Start } from "@mui/icons-material";
import { yellow } from '@mui/material/colors';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
     <Box>
        <Card 
        sx={{ width: 300, 
              alignItems : "center", 
              textAlign: "center", 
              margin: "17% auto",
              color: yellow[900] }}>
          <div style={{ paddingBlock: 30 }}>
            <p>Bujeera</p>
            <p>Start planning your future project</p>
            <Button sx={{ marginBlock: 2 }} endIcon={<Start/>} color='info' variant='outlined'><Link href={"/todo"}>Here we go!</Link></Button>
          </div>
        </Card>
     </Box>
   </>
  )
}
