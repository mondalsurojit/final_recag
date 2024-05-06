import React from 'react'
import './Rankings.css'
import img1 from '../../assets/ranking-img1.png';
import img2 from '../../assets/ranking-img2.png';
import img3 from '../../assets/ranking-img3.png';
import img4 from '../../assets/ranking-img4.png';
import img5 from '../../assets/ranking-img5.png';
import img6 from '../../assets/ranking-img6.png';
import img7 from '../../assets/ranking-img7.png';
import img8 from '../../assets/ranking-img8.png';

import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'

const tableData=[
    {
        id:1,
        image:img2,
        name:"Dieter",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:2,
        image:img2,
        name:"Psi",
        joined:"5 years ago",
        mp1:48,
        mp2:16,
        mp3:5,
        points:'115,908',
    },
    {
        id:3,
        image:img2,
        name:"Bestfitt",
        joined:"2 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:4,
        image:img2,
        name:"Qireshi",
        joined:"1 year ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:5,
        image:img2,
        name:"Theo",
        joined:"3 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:6,
        image:img2,
        name:"Nishchay",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:7,
        image:img2,
        name:"Hoyo",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:8,
        image:img2,
        name:"Chris",
        joined:"3 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:9,
        image:img2,
        name:"Yuhan",
        joined:"8 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:10,
        image:img2,
        name:"Zun",
        joined:"2 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:11,
        image:img2,
        name:"Ahmed",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:12,
        image:img2,
        name:"Takoi",
        joined:"10 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:13,
        image:img2,
        name:"Gazo",
        joined:"2 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:14,
        image:img2,
        name:"Guansh",
        joined:"3 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:15,
        image:img2,
        name:"Mathur",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:16,
        image:img2,
        name:"lossim",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:17,
        image:img2,
        name:"Quesris",
        joined:"3 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:18,
        image:img2,
        name:"Dieter",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:19,
        image:img2,
        name:"Sam",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:20,
        image:img2,
        name:"Famsin",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:21,
        image:img2,
        name:"Sameer",
        joined:"2 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
    {
        id:22,
        image:img2,
        name:"Dieter",
        joined:"6 years ago",
        mp1:38,
        mp2:16,
        mp3:3,
        points:'165,208',
    },
]

export default function Rankings() {
  return (
    <div>


    

        <Mobilemenu/>
        <div className="mt-[4.7rem] flex md:mt-0">
        <Simplemenu style={{color:"#fff"}}/>
    <section className={`ranking das`} style={{overflow:'scroll', height:"100vh", width:"100vw", backgroundColor:"#f1f5f9" , borderRadius:"15px" , zIndex:"0"}}
    >
        <div className="rank-container">
            <div className="rank-content">
                <div className="rank-title">
                    <h3 className="main">Kaggle Rankings</h3>
                </div>
                <div className="activity-list">
                    <div className="compete">
                        <div className="list-title">Competitions</div>
                        <div className="list-border"></div>
                    </div>
                    <div className="data-set">
                        <div className="list-title">Datasets</div>
                        <div className="list-border"></div>
                    </div>
                    <div className="notebook">
                        <div className="list-title">Notebooks</div>
                        <div className="list-border"></div>
                    </div>
                    <div className="discuss">
                        <div className="list-title">Discussions</div>
                        <div className="list-border"></div>
                    </div>
                </div>
                <div className="rank-logo">
                    <div className="rank-grandmasters">
                        <div className="rank-img"><img src={img1} alt="logo" className='rank-im'/></div>
                        <div className="rank-data">
                            <div className="ranking-number">319</div>
                            <div className="logo-name">grandmasters</div>
                        </div>
                    </div>
                    <div className="rank-masters">
                        <div className="rank-img"><img src={img2} alt="logo-images" className='rank-im'/></div>
                        <div className="rank-data">
                            <div className="ranking-number">2,031</div>
                            <div className="logo-name">masters</div>
                        </div>
                    </div>
                    <div className="rank-experts">
                        <div className="rank-img"><img src={img3} alt="logo-images" className='rank-im'/></div>
                        <div className="rank-data">
                            <div className="ranking-number">9,403</div>
                            <div className="logo-name">experts</div>
                        </div>
                    </div>
                    <div className="rank-contributors">
                        <div className="rank-img"><img src={img4} alt="logo-images" className='rank-im'/></div>
                        <div className="rank-data">
                            <div className="ranking-number">68,513</div>
                            <div className="logo-name">contributors</div>
                        </div>
                    </div>
                    <div className="rank-novices">
                        <div className="rank-img"><img src={img5} alt="logo-images" className='rank-im'/></div>
                        <div className="rank-data">
                            <div className="ranking-number">116,813</div>
                            <div className="logo-name">novices</div>
                        </div>
                    </div>
                </div>
                <div className="ranking-table">
                    <div className="table-head grid5">
                        <div className="rank">rank</div>
                        <div className="tier">tier</div>
                        <div className="users">user</div>
                        <div className="medals">medals</div>
                        <div className="points">points</div>
                    </div>
                    {
                        tableData.map(data=>{
                            
                            return (
                                <TableData key={data.id} {...data}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
  )
}



const TableData=(data)=>{
    const {image,name,id,mp1,mp2,mp3,joined,points} = data;
    return(
        <div className="table-data">
            <div className="rank-points">{id}</div>
            <div className="tier-data">
                <img src={image} alt="img1" />
            </div>
            <div className="user-data">
                <div className="left-user-data">
                    <img src={image} alt="img1" className='user-logo' />
                    <div className="user-name">{name}</div>
                </div>
                <div className="joined">joined {joined}</div>
            </div>
            <div className="medals-data">
                <div className="medal-logo">
                    <img src={img6} alt="img" />
                    <div className="medal-points">{mp1}</div>
                </div>
                <div className="medal-logo">
                    <img src={img7} alt="img" />
                    <div className="medal-points">{mp2}</div>
                </div>
                <div className="medal-logo">
                    <img src={img8} alt="img" />
                    <div className="medal-points">{mp3}</div>
                </div>
            </div>
            <div className="points-data">{points}</div>
        </div>
    )
}