import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { renderButton, renderButtonx, renderText } from '../Displaycompo'

function Step2({ handleclick, handleprevious }) { // Destructure handleclick from props
    return (
        <div>
            <div style={{ backgroundColor: "white", color: "black", border: "none" ,marginTop:"10px"}}>
                {renderText({ label: "Curriculum Information" })}
                <Box>
                    <form style={{ position: "relative" }}>
                        <div style={{ margin: "15px", fontSize: "18px", paddingTop: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Topic Name :</label>
                                <input style={{ width: "100%", color: "black" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Note :</label>
                                <textarea style={{ width: "100%", color: "black" }}></textarea>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",gap:"20px" }}>
                                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                    <label htmlFor="level">Category:</label>
                                    <select id="level" name="level" style={{ color: "black", width: "32vw" }}>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advance">Advance</option>
                                    </select>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                    <label htmlFor="category">Sub-Category:</label>
                                    <select id="category" name="category" style={{ color: "black", width: "32vw" }}>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advance">Advance</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex' style={{justifyContent:"space-between"}}>
                                <Grid container spacing={2} m={2} p={2} >

                                    {renderButtonx({ label: "Back", handleprevious: handleprevious })}
                                </Grid>
                                <Grid container spacing={2} justify="flex-end" m={2} p={2}>

                                    {renderButton({ label: "Next", handleclick: handleclick })}
                                </Grid>
                            </div>
                        </div>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default Step2
