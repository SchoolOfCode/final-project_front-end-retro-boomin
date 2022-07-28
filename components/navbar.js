import { Typography, Stack} from "@mui/material"
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  return (
  <Stack direction='row' spacing ={10} size = '50px'>
  <img alt = 'icon' />
  <Typography> CraveAway</Typography>
  <HiMenu onClick ={()=>console.log('Hello')}/>
  </Stack>
  )
}

export default Navbar