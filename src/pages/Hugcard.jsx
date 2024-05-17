import React from 'react'
import { Database, Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Dot } from 'lucide-react';
import { Download } from 'lucide-react';

function Hugcard() {
    return (
        <div>

            <div className='hugcard sm:w-[520px] p-2 transform transition-transform duration-300 hover:scale-105'>
                <div className='flex p-2'>
                    <Database />
                    <h2 className='mt-1 ml-3' style={{ fontSize: "16px" }}>microsoft/orca-math-word-problems-200k</h2>
                </div>

                <div className='flex p-1' style={{color:"rgb(156 163 175)" , fontSize:"14px"}}>
                    <div className='flex pl-2'>
                       <Eye size={20}/> 
                       <h3 className=' ml-1'>Viewer</h3>
                       <Dot />
                    </div>

                    <div className='flex pl-1'>
                       <h3 className=''>Updated 7 days ago</h3>
                       <Dot />
                    </div>

                    <div className='flex pl-1'>
                       <Download size={20}/> 
                       <h3 className='ml-1'>1.78k</h3>
                       <Dot />
                    </div>

                    <div className='flex pl-1'>
                       <Heart size={20}/> 
                       <h3 className='ml-1'>1.78k</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hugcard