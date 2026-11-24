import { useState } from "react";
export function FormDemo(){
 const [uname,setUserName]=useState('');
 const [age,setAge]=useState(0);
 const [city,setCity]=useState('');
function handleNameChange(e){
    setUserName(e.target.value);
}
function handleAgeChange(e){
    setAge(e.target.value);
}
function handleCityChange(e){
    setCity(e.target.value)
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