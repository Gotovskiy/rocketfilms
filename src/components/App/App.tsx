import styled from "styled-components"
import Loader from "../Loader"
import './index.css'

const GlobalStyles = styled.div`
 margin: 0;
 padding: 0;
 outline:0;
 box-sizing:border-box;
 font-family: 'Open Sans', sans-serif; 
 height:100vh;
 width:100vw;
 background-color: teal;
`

function App() {

  return (
    <>
    <GlobalStyles>
    <Loader/>
    </GlobalStyles>
    </>
  )
}

export default App
