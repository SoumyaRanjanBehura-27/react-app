import { useState } from "react";
export function FormDemo(){
 const 
 function Handlesubmit(e){
e.preventDefault();
let formdata=new formdata(e.target);
 }
 return(
    <div>
        <form onSubmit={Handlesubmit}>
            <dl>
                <dt>USER NAME</dt>
                <dd><input type="text"></input></dd>
            </dl>
            <button>Submit</button>
        </form>
    </div>
 )
}