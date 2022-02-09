import React, { useState, useEffect, createContext } from 'react';

export const SwapTableContext = createContext();


const SwapTableContextProvider = (props) => {
 
   const [table6, setTable6] = useState(true)
   const [table10, setTable10] = useState(false)

   const [table5, setTable5] = useState(true)
   const [table5A, setTable5A] = useState(false)

   const [show5F1, setShow5F1] = useState(true)
   const [show5F2, setShow5F2] = useState(false)
   const [show5F3, setShow5F3] = useState(false)

   const [sideValue, setSideValue] = useState(0)

   const [badgeValueR, setBadgeValueR] = useState(0)
   const [badgeValueA, setBadgeValueA] = useState(0)

   const [badgeValue6, setBadgeValue6] = useState(0)
   const [badgeValue13, setBadgeValue13] = useState(0)

   const [reloadDev, setReloadDev] = useState(true)


   const [category, setCategory] = useState(0)
   const [initiator, setInitiator] = useState(0)

   const [approvalStatus, setApprovalStatus] = useState(0)
   const [itemz, setItemz] = useState(0)

   const [dateFrom, setDateFrom] = useState("")
   const [dateTo, setDateTo] = useState("")
   const [dateMdaTo, setDateMdaTo] = useState("")
   const [dateMdaFrom, setDateMdaFrom] = useState("")
   const [mda, setMda] = useState(0)

   const [refreshDashboardRequest, setRefreshDashboardRequest] = useState(false)
   const [showSuccess, setShowSuccess] = useState(true)
   let [changeSide, setChangeSide] = useState('Add Item')

   const [analyticsTrigger, setAnalyticsTrigger] = useState(true)
   const [imageHolder, setImageHolder] = useState(
     {
     name:"",
     doclink:""
   }
  )
  const [imageArray, setImageArray] = useState([])
  const [approversArray, setApproversArray] = useState([])
  const [mFilesArray, setMfilesArray] = useState([])
  // const [testArray, setTestArray] = useState([])

  const [homeArray, setHomeArray] = useState([])
  const [gameType, setGameType] = useState('NAP 3')
   

  const handleCategory =(value)=>{
    setCategory(value)

   }

  // const handleCategory =(value)=>{
  //     setCategory(value)
  
  //    }

    const handleInitiator =(value)=>{
      setInitiator(value)
  
     }
     const handleApprovalStatus =(value)=>{
      setApprovalStatus(value)
  
     }
     const handleItemz =(value)=>{
      setItemz(value)
  
     }
     const handleDateTo =(value)=>{
      setDateTo(value)
  
     }
     const handleDateFrom =(value)=>{
      setDateFrom(value)
  
     }
  
     const handleDateMdaTo =(value)=>{
      setDateMdaTo(value)
  
     }
     const handleDateMdaFrom =(value)=>{
      setDateMdaFrom(value)
  
     }
    const handleMda =(value)=>{
      setMda(value)
  
     }

   const handleBadgeValueR =(value)=>{
    setBadgeValueR(value)

   }
   const handleBadgeValueA =(value)=>{
    setBadgeValueA(value)

   }
   const handleBadgeValue6 =(value)=>{
    setBadgeValue6(value)

   }
   const handleBadgeValue13 =(value)=>{
    setBadgeValue13(value)

   }

   const handleReloadDev =()=>{
    setReloadDev(!reloadDev)

   }

   const handleShow5F1 =()=>{
    setShow5F1(true)
      setShow5F2(false)
      setShow5F3(false)

   }
   const handleShow5F2 =()=>{
    setShow5F1(false)
    setShow5F2(true)
    setShow5F3(false)
}
const handleShow5F3 =()=>{
  setShow5F1(false)
  setShow5F2(false)
  setShow5F3(true)
}

   const handleTable6 =()=>{
    setTable6(true)
    setTable10(false)
   }
   const handleTable10 =()=>{
    setTable6(false)
    setTable10(true)
   }

   const handleTable5 =()=>{
    setTable5(true)
    setTable5A(false)
   }
   const handleTable5A =()=>{
    setTable5(false)
    setTable5A(true)
   }
  //  const handleTable5A =()=>{
  //   setTable5(false)
  //   setTable5A(true)
  //  }
   const handleRefreshDashboardRequest = ()=>{
    setRefreshDashboardRequest(!refreshDashboardRequest)
   }
   const handleShowSuccess = ()=>{
    setShowSuccess(!showSuccess)
   }

   const handleChangeSide = (side)=>{
    setChangeSide(side)
   }

   const handleAnalyticsTrigger = ()=>{
    setAnalyticsTrigger(!analyticsTrigger)
   }


   
   

   

   const handleSideValue =(index)=>{
   
    console.log(index)

    switch (index?.key>0) {
      case index?.key==12: 
     
      handleShow5F1()
      break;
      
      case index.key==13: 
     
     handleShow5F2()
      break;
      
      
      case index.key==14: 
      
      handleShow5F3()
      break;
      
      default:
        handleShow5F1()
        // {handleShow5F1()}
   }
   }

   const handleImage = (name,doclink)=>{

    setImageHolder(
      // name
      {
        name : name,
        doclink : doclink
      }
      )

   }

   const handleImageArray = (imageArray)=>{

    setImageArray(imageArray)

   }
   const handleApproversArray = (approversArray)=>{

    setApproversArray(approversArray)

   }
   const handleMfilesArray = (drop)=>{

    setMfilesArray([...mFilesArray, drop])

   }
   const holdMfilesArray = (drop)=>{

    setMfilesArray(drop)

   }

   const handleHomeArray = (drop)=>{

    setHomeArray(drop) 

   }

   const handleGameType =(data)=>{
     setGameType(data)
   }


   
  return (
      
    <SwapTableContext.Provider
    
    value = {{table6, table10,handleTable6,handleTable10, badgeValue6, badgeValue13, handleBadgeValue6,handleBadgeValue13,
      show5F1,show5F2,show5F3,handleShow5F1,handleShow5F2,handleShow5F3,
      sideValue, handleSideValue,
      table5,table5A,handleTable5,handleTable5A,
      badgeValueR, badgeValueA, handleBadgeValueR,handleBadgeValueA,
      reloadDev, handleReloadDev,
      mda, initiator, itemz, dateTo,dateFrom, dateMdaTo, dateMdaFrom, approvalStatus,category, handleDateTo, handleMda, handleCategory, handleInitiator,handleDateMdaTo, handleApprovalStatus, handleItemz,handleDateFrom,handleDateMdaFrom,
refreshDashboardRequest,handleRefreshDashboardRequest,
showSuccess, handleShowSuccess,
changeSide, handleChangeSide,
analyticsTrigger, handleAnalyticsTrigger,
handleImage, imageHolder,handleImageArray,imageArray,
handleApproversArray,approversArray,
mFilesArray,handleMfilesArray,holdMfilesArray,
    

homeArray, handleHomeArray, gameType, handleGameType
    
    }}>


{props.children}
    </SwapTableContext.Provider>

   
  );
};
export default SwapTableContextProvider;
