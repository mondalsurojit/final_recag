import { Box, Grid, Paper } from '@mui/material'
import React, { useRef, useState } from 'react'
import { renderButton, renderButtonx, renderText } from '../Displaycompo'

function Step3({ handleclick, handleprevious }) { // Destructure handleclick from props

    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Check if the selected file is an MP4 video
        if (file && file.type === 'video/mp4') {
            setSelectedVideo(file);
        } else {
            alert('Please select an MP4 video file.');
        }
    };

    const handleRemoveVideo = () => {
        setSelectedVideo(null);
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // Check if the selected file is an image
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
        } else {
            alert('Please select a valid image file (PNG, JPG, etc.).');
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        // Reset the file input element
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div>
            <div style={{ backgroundColor: "white", color: "black", border: "none" ,width:"1000px" }}>
                {renderText({ label: "Media Information" })}
                <Box>
                    <form style={{ position: "relative" }}>
                        <div style={{ margin: "20px", fontSize: "18px", paddingTop: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <label>Upload Video :</label>
                                <input
                                    type="file"
                                    accept=".mp4"
                                    onChange={handleFileChange}
                                    style={{ backgroundColor: "white" }}

                                />
                                {selectedVideo && (
                                    <div flex>
                                        <video controls style={{ width: "400px", height: "250px" }}>
                                            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <button onClick={handleRemoveVideo} style={{ margin: "10px", backgroundColor: "white", color: "black", padding: "10px 15px", borderRadius: "5px" ,border:"1px solid black"}}>Remove Video</button>
                                    </div>
                                )}

                            </div>

                            <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px"  , marginTop:"20px"}}>
                                <label>Upload Thumbnail :</label>
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={handleImageChange}
                                    ref={fileInputRef}
                                />
                                {selectedImage && (
                                    <div flex>
                                        <img src={URL.createObjectURL(selectedImage)} alt="Uploaded pic" style={{ width: "400px", height: "300px" }}/>
                                        <button onClick={handleRemoveImage} style={{ margin: "10px", backgroundColor: "white", color: "black", padding: "10px 15px", borderRadius: "5px" , border:"1px solid black"}}>Remove Image</button>
                                    </div>
                                )}
                            </div>



                            <div className='flex'>
                                <Grid container spacing={2} justify="flex-end" m={2} p={2}>

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

export default Step3
