import React, { useState } from 'react';
import img1 from "../Images/svg-2.svg";
import img2 from "../Images/h4holdertabimg1png@2x.png"
import img3 from "../Images/svg.svg"

function Cryptop03() {
  const [activeCategory, setActiveCategory] = useState('Technology');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <section className="relative  flex flex-row items-start justify-start sm:gap-[1.188rem] max-w-full text-center sm:text-[3.75rem] text-[3.4rem] text-white font-montserrat overflow-hidden">
        <div className="flex-1 flex flex-col items-start justify-center pt-[0.938rem] px-[0rem] pb-[0rem] box-border ">
          <div className=" flex flex-col items-center justify-center py-[0rem] pr-[1.25rem] pl-[1rem] box-border gap-[2.688rem] max-w-full">
            <div className=" flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <h1 className="m-0  relative sm:text-inherit text-[3rem] tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3rem] mq1050:leading-[3.25rem] ">
                The right solutions
              </h1>
            </div>
            <div className=" flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1rem]">
              <div className=" text-[1.2rem] flex flex-row flex-wrap sm:flex-nowrap items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap mq750:justify-center">
                <CategoryButton category="Technology" isActive={activeCategory === 'Technology'} onClick={handleCategoryClick} />
                <CategoryButton category="Branding" isActive={activeCategory === 'Branding'} onClick={handleCategoryClick} />
                <CategoryButton category="Marketing" isActive={activeCategory === 'Marketing'} onClick={handleCategoryClick} />
                <CategoryButton category="Web design" isActive={activeCategory === 'Web design'} onClick={handleCategoryClick} />
              </div>
            </div>
            <div className="">
              {/* Render content based on the active category */}
              {activeCategory === 'Technology' && (
                <div>
                  {/* Technology content */}
                  <div className="self-stretch flex flex-col sm:flex-row items-start justify-center gap-[3.094rem] max-w-full text-left text-[0.938rem] text-lightsteelblue mq1050:flex-wrap">
                    <img
                      className="h-[411.3px] flex-1 relative max-w-full overflow-hidden object-cover sm:min-w-[622px] z-[2] mq750:min-w-full left-[1rem] sm:left-4"
                      loading="lazy"
                      alt=""
                      src={img2}
                    />
                    <div className=" flex  flex-col items-start justify-start pt-[3.444rem] sm:pl-[3.5rem] pl-4 pb-[0rem] box-border">
                      <div className="flex flex-col items-start justify-start gap-[2.063rem]">
                        <div className="flex flex-col items-start justify-start gap-[1.594rem] ">
                          <div className="relative leading-[1.5rem] font-medium z-[2] ">
                            <p className="m-0 pb-9 ml-[2rem]">
                            This setup will create a React component (MovingImage) that displays an image moving up and down within a container. Adjust the CSS and animation properties as needed to customize the behavior and appearance of the moving image.
                            </p>
                            
                          </div>
                          <div className="flex ml-[2rem] flex-row items-start justify-start gap-[0.175rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Crypto-news curation
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Natural Language Understanding
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Wallet aggregation
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="cursor-pointer ml-[2rem] [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem] z-[2]">
                          <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Read More
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                              className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                              alt=""
                              src={img3}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCategory === 'Branding' && (
                <div>
                  {/* Branding content */}

                  <div className="self-stretch flex flex-col sm:flex-row items-start justify-center gap-[6.094rem] max-w-full text-left text-[0.938rem] text-lightsteelblue mq1050:flex-wrap">
                    <img
                      className="h-[411.3px] flex-1 relative max-w-full overflow-hidden object-cover sm:min-w-[622px] z-[2] mq750:min-w-full left-[2rem] sm:left-0"
                      loading="lazy"
                      alt=""
                      src="https://innovio.qodeinteractive.com/wp-content/uploads/2018/12/h4-holder-tab-img-2.png"
                    />
                    <div className=" flex  flex-col items-start justify-start pt-[3.444rem]  pb-[0rem] box-border">
                      <div className="flex flex-col items-start justify-start gap-[2.063rem]">
                        <div className="flex flex-col items-start justify-start gap-[1.594rem] ">
                          <div className="relative leading-[1.5rem] font-medium z-[2] ">
                            <p className="m-0 pb-9 ml-[2rem]">
                            This setup will create a React component (MovingImage) that displays an image moving up and down within a container. Adjust the CSS and animation properties as needed to customize the behavior and appearance of the moving image.
                            </p>
                            
                          </div>
                          <div className="flex ml-[2rem] flex-row items-start justify-start gap-[0.175rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Crypto-news curation
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Natural Language Understanding
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Wallet aggregation
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="cursor-pointer ml-[2rem] [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem] z-[2]">
                          <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Read More
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                              className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                              alt=""
                              src={img3}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCategory === 'Marketing' && (
                <div>
                  {/* Marketing content */}

                  <div className="self-stretch flex flex-col sm:flex-row items-start justify-center gap-[6.094rem] max-w-full text-left text-[0.938rem] text-lightsteelblue mq1050:flex-wrap">
                    <img
                      className="h-[411.3px] flex-1 relative max-w-full overflow-hidden object-cover sm:min-w-[622px] z-[2] mq750:min-w-full left-[2rem] sm:left-0"
                      loading="lazy"
                      alt=""
                      src="https://innovio.qodeinteractive.com/wp-content/uploads/2018/12/h4-holder-tab-img-3.png"
                    />
                    <div className=" flex  flex-col items-start justify-start pt-[3.444rem]  pb-[0rem] box-border">
                      <div className="flex flex-col items-start justify-start gap-[2.063rem]">
                        <div className="flex flex-col items-start justify-start gap-[1.594rem] ">
                          <div className="relative leading-[1.5rem] font-medium z-[2] ">
                            <p className="m-0 pb-9 ml-[2rem]">
                            This setup will create a React component (MovingImage) that displays an image moving up and down within a container. Adjust the CSS and animation properties as needed to customize the behavior and appearance of the moving image.
                            </p>
                            
                          </div>
                          <div className="flex ml-[2rem] flex-row items-start justify-start gap-[0.175rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Crypto-news curation
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Natural Language Understanding
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Wallet aggregation
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="cursor-pointer ml-[2rem] [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem] z-[2]">
                          <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Read More
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                              className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                              alt=""
                              src={img3}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCategory === 'Web design' && (
                <div>
                  {/* Web design content */}
                  <div className="self-stretch flex flex-col sm:flex-row items-start justify-center gap-[6.094rem] max-w-full text-left text-[0.938rem] text-lightsteelblue mq1050:flex-wrap">
                    <img
                      className="h-[411.3px] flex-1 relative max-w-full overflow-hidden object-cover sm:min-w-[622px] z-[2] mq750:min-w-full left-[2rem] sm:left-0"
                      loading="lazy"
                      alt=""
                      src="https://innovio.qodeinteractive.com/wp-content/uploads/2018/12/h4-holder-tab-img-4.png"
                    />
                    <div className=" flex  flex-col items-start justify-start pt-[3.444rem]  pb-[0rem] box-border">
                      <div className="flex flex-col items-start justify-start gap-[2.063rem]">
                        <div className="flex flex-col items-start justify-start gap-[1.594rem] ">
                          <div className="relative leading-[1.5rem] font-medium z-[2] ">
                            <p className="m-0 pb-9 ml-[2rem]">
                            This setup will create a React component (MovingImage) that displays an image moving up and down within a container. Adjust the CSS and animation properties as needed to customize the behavior and appearance of the moving image.
                            </p>
                            
                          </div>
                          <div className="flex ml-[2rem] flex-row items-start justify-start gap-[0.175rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                              <input
                                className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Crypto-news curation
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Natural Language Understanding
                              </div>
                              <div className="relative leading-[1.5rem] font-medium z-[2]">
                                Wallet aggregation
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="cursor-pointer ml-[2rem] [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem] z-[2]">
                          <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Read More
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                              className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                              alt=""
                              src={img3}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Button component for each category
const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <div className={` flex flex-row items-end justify-start gap-[0.813rem] text-tomato cursor-pointer ${isActive ? 'active' : ''}`} onClick={() => onClick(category)}>
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.406rem]">
        {isActive && <img className="w-[26px] h-[9px] relative overflow-hidden shrink-0" alt="" src={img1} />}
      </div>
      <div className={`flex-1 relative tracking-[0.16px] leading-[1.5rem] font-semibold inline-block min-w-[97.4px] z-[2] ${isActive ? 'active' : ''}`}>
        {category}
      </div>
    </div>
  );
};




export default Cryptop03;
