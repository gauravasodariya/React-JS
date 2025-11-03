import { useNavigation } from "react-router-dom";

export const Layout= () =>{
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <h2>Loading...</h2>
  }
    return (
        <>
        <Header />
        <Outlet/>
        <Footer/>
        </>
    )
}

