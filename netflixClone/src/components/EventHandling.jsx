export const EventHandling = () => {
    function handliClick(){
        alert("Button Clicked")
    }
    return (
        <>
        <button onClick={handliClick}>Click Me</button>
        </>
    )
}
