export const filterDataByName=(originalData,parm)=>{
   
    let temp=originalData.filter((item)=>item.data.title.toLowerCase().includes(parm.toLowerCase()))
    return temp
}

export const filterDataById=(originalData,parm)=>{
    console.log(parm)
    let temp=originalData.filter((item)=>item.data.id===parm)
    return temp
}
