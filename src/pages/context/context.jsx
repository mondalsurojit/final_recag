import React , {createContext, useEffect, useState} from 'react';

const AppContext = createContext();
const AppProvider = ({children}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [ids, setIds] = useState('2');
  const [pos,setPos] = useState(false);
  const [gridView,setGridView] = useState(false);
  const [gridView2,setGridView2] = useState(true);

    useEffect(() => {
      const handleScroll =()=>{
          const position = 270;
          const winScroll = window.pageYOffset;
          winScroll > position? setPos(true):setPos(false);
          // console.log(window.pageYOffset);
      }
      window.addEventListener("scroll",handleScroll);
      
      return () => {
        window.removeEventListener("scroll",handleScroll);
    }
  }, [])
    return(
  <AppContext.Provider value={{setIsOpening,isOpening,pos,setGridView,gridView,gridView2,setGridView2 ,ids,setIds}}>
    {children}
  </AppContext.Provider>
    )
}

export {AppContext,AppProvider};