import { Dot, ThumbsUp, MessageCircle,Eye } from 'lucide-react'
import React from 'react'

function StackQuestion() {
    return (
        <div className='dis-card' style={{ borderRadius: "5px", marginBottom: "30px" }}>
            <div className=''>
                <h2 className='dis-card-head'>Best practices for data fetching in a Next.js application with Server-Side...</h2>
            </div>

            <div className='dis-card-tag'>
                <div className='dis-card-tag1'>NEXTJS</div>
                <div className='dis-card-tag1'>SSR</div>
            </div>

            <div className='flex' style={{ justifyContent: "space-between", marginTop: "10px" }}>

                <div className='flex'>
                    <></>
                    <span style={{ fontSize: "16px", color: "black" }}>John Devi</span>
                    <Dot />
                    <span>asked 5 month ago</span>
                </div>

                <div className='flex'>
                    <div className='flex' style={{marginRight:"10px" , }}>
                        <ThumbsUp />
                        <span style={{marginTop:"5px"}}>9 Votes</span>
                    </div>

                    <div className='flex' style={{marginRight:"10px" , }}>
                        <MessageCircle />
                        <span style={{marginTop:"5px"}}>19 answers</span>
                    </div>

                    <div className='flex' style={{marginRight:"10px" , }}>
                        <Eye/>
                        <span style={{marginTop:"5px"}}>227 views</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackQuestion