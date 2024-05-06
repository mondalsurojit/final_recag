import { Box, Grid, Paper } from '@mui/material'
import React, { useRef, useState } from 'react'
import { renderButton, renderButtonx, renderText } from '../Displaycompo'

function Step4({ handleclick, handleprevious }) { // Destructure handleclick from props

  
    return (
        <div >
           
           {renderText({ label: "Data is submited" })}
        </div>
    )
}

export default Step4
