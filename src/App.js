import {Main,  Search, Characters} from './components/index.jsx'
import * as dotenv from 'dotenv'
import { BrowserRouter, Routes, Route } from "react-router-dom"
dotenv.config()

function App() {
  const title = process.env.ENV === 'PROD' ? 'Hello Prod' : 'Hello Dev'
  const years = ["19BBY", "57BBY"]
  const names = ["Skywalker", "Kenobi"]

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main title={title}/>}  />
          <Route path="/search" element={ <Search years={years} names={names} />} />
          <Route path="/characters/:id" element={<Characters />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
