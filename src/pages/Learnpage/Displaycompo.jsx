import { Typography , Button} from "@mui/material"

export const renderText = ({label , color , align , variant})=>(
     <Typography
     color={color ? color : "black"} 
     align={align ? align :"center"}
     variant={variant ? variant :"h6"}
     >{label}</Typography>
     );


export const renderButton =({label , color , handleclick , variant}) => (
    <Button  variant={variant ? variant :"h6"}   color={color ? color : "black"}  onClick={handleclick} style={{border:"1px solid black" , borderRadius:"5px"}} >{label}</Button>
)

export const renderButtonx =({label , color , handleprevious , variant}) => (
    <Button  variant={variant ? variant :"h6"}   color={color ? color : "black"}  onClick={handleprevious} style={{right:"0", border:"1px solid black" , borderRadius:"5px"}} >{label}</Button>
)

export const renderButtons =({label , color  , variant}) => (
    <Button  variant={variant ? variant :"h6"}   color={color ? color : "black"}  type="submit" style={{right:"0", border:"1px solid black" , borderRadius:"5px"}}>{label}</Button>
)