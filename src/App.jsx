import Intro from "./Intro"
import Bar from "./Bar"
import Features from './Features'
import Findout from "./Findout"
import Footer from "./Footer"

function App() {

  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <Features />
      <Findout />
      <Footer />
    </>
  )
}

export default App
