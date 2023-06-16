import React,{useState} from 'react'

function Textarea(props) {
    // const [btnDark,setBtnDark]=useState("Enable Dark Mode")
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const toggle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnDark("Disable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnDark("Enable Dark Mode")
    //     }
    // }
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const [text,setText]=useState("")
  return (
    <>
    <div className="container" >
      <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} value={text} id="MyBox" onChange={handleOnChange} rows="7"></textarea>
        </div>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button> 
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}

export default Textarea