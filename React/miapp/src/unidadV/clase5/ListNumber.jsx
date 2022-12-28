import React from "react";

export default function ListNumber({numbers}){
    return(
        <React.Fragment>
            {numbers.map((num,i)=><span key={i}>- {num} -</span>)}
        </React.Fragment>
    )
}


  