import { Suspense } from "react"
import IssuesContainer from "./components/IssuContainer/IssuesContainer"
import Navbar from "./components/Navbar"


const issuesPromiss = fetch("/isuess.json").then(res => res.json())
function App() {
  
  return (
    <>
     <Navbar/>
     
    <Suspense fallback={"loding.."}>
       <IssuesContainer issuesPromiss={issuesPromiss} />
    </Suspense>
    </>
  )
}

export default App
