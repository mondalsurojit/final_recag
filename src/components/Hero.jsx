import React from 'react'
import img2 from "../Images/img2.png"
import robot from "../Images/robot.png"
import floor from "../Images/floor.png"
import floor2 from "../Images/floor2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.png"
import wire1 from "../Images/wire1.png"
import wire2 from "../Images/wire2.png"
import wire3 from "../Images/wire3.png"
import bitcoin from "../Images/bitcoin.png"
import robo1 from "../Images/robo1.png"
import robo2 from "../Images/robo2.png"
import robo3 from "../Images/robo3.png"
import robo4 from "../Images/robo4.png"
import robo5 from "../Images/robo5.png"
import bit from "../Images/bit.png"
function Hero() {
    return (
        <div>

            <div>

                <div className="h-[400px] w-[430px] sm:h-[550px] sm:w-[550px] absolute !m-[0] right-[0.125rem] sm:bottom-[1.125rem] bottom-[-10rem] overflow-hidden" >
                    {/* <img
                        className="absolute top-[51.938rem] left-[2.938rem] w-[39px] h-[59px] overflow-hidden object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="../Images/rslayerwrap--rsl--yer--h8revimg4png@2x.png"
                    /> */}
                    <img
                        className="absolute top-[0.099rem] left-[5.719rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="absolute top-[1.625rem] left-[3.031rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[3]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="absolute top-[0rem] left-[17.625rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[2]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="absolute top-[1.625rem] left-[20.25rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[3]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="bit absolute top-[1.35rem] left-[9.6875rem] w-[101px] h-[109.5px] overflow-hidden object-cover z-[8]"
                        alt=""
                        src={bit}
                    />
                    <img
                        className="absolute top-[15.344rem] left-[23.219rem] w-[69px] h-[190px] overflow-hidden object-cover z-[9]"
                        loading="lazy"
                        alt=""
                        src={robot}
                    />
                    <div className="absolute top-[2.2815rem] left-[0rem] w-[420.5px] h-[321px]">
                        <img
                            className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden object-cover"
                            alt=""
                            src={floor}
                        />
                        <img
                            className="absolute top-[0.9065rem] left-[0.375rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[4]"
                            alt=""
                            src={img3}
                        />
                        <img
                            className="absolute top-[0.0625rem] left-[2.6875rem] w-[142.5px] h-[121px] overflow-hidden object-cover z-[5]"
                            alt=""
                            src={wire1}
                        />
                        <img
                            className="absolute top-[0.844rem] left-[22.969rem] w-[46px] h-[58.5px] overflow-hidden object-cover z-[4]"
                            alt=""
                            src={img3}
                        />
                        <img
                            className="absolute top-[0.0625rem] left-[14.812rem] w-[142.5px] h-[121px] overflow-hidden object-cover z-[5]"
                            alt=""
                            src={wire2}
                        />
                        <div className="absolute top-[3.1565rem] left-[4.969rem] w-[263.5px] h-[169.5px]">
                            <img
                                className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden object-cover"
                                alt=""
                                src={floor2}
                            />
                            <img
                                className="absolute top-[1.4375rem] left-[4.344rem] w-[125px] h-[70.5px] overflow-hidden object-cover z-[7]"
                                alt=""
                                src={bitcoin}
                            />
                        </div>
                        <img
                            className="absolute top-[9.375rem] left-[2.719rem] w-[142.5px] h-[121px] overflow-hidden object-cover z-[7]"
                            alt=""
                            src={wire3}
                        />
                        <img
                            className="absolute top-[12.2815rem] left-[0.2815rem] w-[49px] h-[58.5px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={img4}
                        />


                        <img
                            className="absolute top-[13.844rem] left-[3rem] w-[49px] h-[58.5px] overflow-hidden object-cover z-[9]"
                            alt=""
                            src={img4}
                        />
                        <img
                            className="absolute top-[15.5rem] left-[5.6565rem] w-[49px] h-[58.5px] overflow-hidden object-cover z-[9]"
                            alt=""
                            src={img4}
                        />
                        <img
                            className="absolute top-[13.5565rem] left-[16.35rem] w-[69px] h-[83px] overflow-hidden object-cover z-[7]"
                            loading="lazy"
                            alt=""
                            src={robo1}
                        />
                        <img
                            className="roboleft absolute top-[10.6rem] left-[21.244rem] w-[69px] h-[83px] overflow-hidden object-cover z-[7]"
                            alt=""
                            src={robo2}
                        />
                        <img
                            className="absolute top-[14.75rem] left-[21.625rem] w-[60px] h-[39px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={robo3}
                        />
                        <img
                            className="absolute top-[16.7065rem] left-[14.544rem] w-[32.5px] h-[39px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={robo4}
                        />
                    </div>
                    <img
                        className="absolute top-[12.575rem] left-[25.3315rem] w-[32.5px] h-[39px] overflow-hidden object-cover z-[8]"
                        loading="lazy"
                        alt=""
                        src={robo5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero