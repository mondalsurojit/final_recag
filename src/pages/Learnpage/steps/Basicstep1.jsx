import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { renderButton, renderText } from '../Displaycompo'

function Basicstep1 ({ handleclick }) { // Destructure handleclick from props
    return (
        <div>
            <div style={{backgroundColor:"white" , color:"black" , border:"none"}}>
                {renderText({ label: "Basic Information" })}
                <Box>
                    <form style={{ position: "relative" }}>
                        <div style={{ margin: "15px", fontSize: "18px", paddingTop: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Course Title :</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Course Description :</label>
                                <textarea style={{ width: "100%", color: "black" }}></textarea>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"  , gap:"20px"}}>
                                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                    <label htmlFor="level">Course Level:</label>
                                    <select id="level" name="level" style={{ color: "black", width: "32vw" }}>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advance">Advance</option>
                                    </select>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                    <label htmlFor="category">Course Category:</label>
                                    <select id="category" name="category" style={{ color: "black", width: "32vw" }}>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advance">Advance</option>
                                    </select>
                                </div>
                            </div>

                            <Grid  container spacing={2} justify="flex-end" m={2} p={2}>
                                {renderButton({ label: "Next", handleclick: handleclick })}
                            </Grid>
                        </div>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default Basicstep1
