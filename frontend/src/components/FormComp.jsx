import React, { useState } from 'react'
import AgeSelection from './AgeSelection';
import GarageFinder from './GarageFinder';

function FormComp() {
    const [count,setCount] =useState(1);

    const ChangeForm = (id) =>{
        if(id){
            setCount(id)
        }
    }
  return (
    <>
   
   {count===1 && <AgeSelection count={count} ChangeForm={ChangeForm}/>}
   {count===2 && <GarageFinder count={count} ChangeForm={ChangeForm}/>}
    </>
  )
}

export default FormComp