export const EventProps = ()=>{
    const handleUser = (user)=>{
        alert(`Welcome ${user}`)
    }

    const handleHover = () =>{
        alert("You hovered over the button!");
    }
    return (
        <>
        <WelcomeUser onClickUser={() => handleUser('Gaurav')}
                     onMouseEnterUser={handleHover}/>
        </>
    )
}

const WelcomeUser = ({onClickUser, onMouseEnterUser}) =>{
    return (
    <>
    <button onClick={onClickUser}>Click Me</button>
    <button onMouseEnter={onMouseEnterUser}>Hover Me</button>
    </>
    ) 
}