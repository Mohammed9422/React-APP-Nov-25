function Login(props){
    return(
        <>
        <h2>Hello {props.user}</h2>
        </>
    )

}

function SignUp(){
    return(
        <>
        <h2>Hey Kindly Sign UP :😉</h2>
        </>
    )
}

function Conditional(){
   
   let logdata = true
    return (
        <>
        <h4>{logdata?<Login user ="Sohail"/>:<SignUp/>}</h4>
        </>
    )    
}

export default Conditional;