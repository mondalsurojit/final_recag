import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { renderButton, renderText } from '../Displaycompo'

function Step5 ({ handleclick }) { // Destructure handleclick from props
    return (
        <div>
            <div style={{backgroundColor:"white" , color:"black" , border:"none"}}>
                {renderText({ label: "Basic Information" })}
                <Box>
                    <form style={{ position: "relative" }}>
                        <div style={{ margin: "15px", fontSize: "18px", paddingTop: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Publisher Name:</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Publisher Adress:</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" , gap:"20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px", width:"32vw" }}>
                                <label>Phone Number:</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px",width:"32vw" }}>
                                <label>Publisher Email:</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>
                            </div>

                            <Grid  container spacing={2} justify="flex-end" m={2} p={2}>
                                {renderButton({ label: "Submit", handleclick: handleclick })}
                            </Grid>
                        </div>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default Step5
