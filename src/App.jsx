import { Suspense } from "react"
import IssuesContainer from "./components/IssuContainer/IssuesContainer"
import Navbar from "./components/Navbar"
import StatasBox from "./components/StatasBox"

const issuesPromiss = fetch("/isuess.json").then(res => res.json())
function App() {
  
  return (
    <>
     <Navbar/>
     <StatasBox/>
    <Suspense fallback={"loding.."}>
       <IssuesContainer issuesPromiss={issuesPromiss} />
    </Suspense>
    </>
  )
}

export default App
