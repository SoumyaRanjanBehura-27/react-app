import {useEffect,useState} from "react"
 function Flipkart(){
    const[Product,setProduct]=useState({title:null,img:null,rating:{rate:0,count:0},feature:[]});
    function Loaddata(){
        let http=new XMLHttpRequest();
        http.open("GET","product.json",true)
        http.send();
        http.onreadystatechange=function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }
    useEffect(()=>{
        Loaddata();
    },[])
    return(
        <>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-6"></div>
            <div className="col-2
            
            
            "></div>
        </div>
        </>
    )
}
export default Flipkart;