import React, { useState, useEffect, createContext } from 'react';

export const ModalContext = createContext();


const ModalContextProvider = (props) => {
   
   const [show6, setShow6] = useState(false)
   const [show22, setShow22] = useState(false)
   const [show23, setShow23] = useState(false)

   const [show14, setShow14] = useState(false)
   const [show40, setShow40] = useState(false)
   const [showFalse, setShowFalse] = useState(false)

   
   const handleShowFalse=()=>{
    // setShow14(false)
    // setShow40(false)
    // setShow6(false)
setShow22(false)
}
const handleShowTrue=()=>{
  // setShow14(false)
  // setShow40(false)
  // setShow6(false)
setShow22(true)
}
   const handleShow14 =()=>{
    setShow14(!show14)
}
const handleShow40 =()=>{
  setShow40(!show40)
}
   
   const handleShow6 =()=>{
       setShow6(!show6)
   }
   const handleShow22 =()=>{
    setShow22(!show22)
}
const handleShow23 =()=>{
  setShow23(!show23)
}
  return (
      <>
    <ModalContext.Provider value={{
      handleShow22, handleShow6,
      show6,show22,
      show14,show40,
      handleShow14, handleShow40,
      handleShowFalse,handleShowTrue,
    
    }}>
      <div style={{width:"100%"}}>
         {props.children}
      </div> 
    </ModalContext.Provider>
    </>
   
  );
};
export default ModalContextProvider;
