import { Container, CssBaseline } from "@mui/material"
import { SearchComponent } from "./components/SearchComponent"

function App() {


  return (
    <div>
      <CssBaseline/>
      <Container>
        <h1>Search App</h1>
        <SearchComponent/>
      </Container>
    </div>
  )
}

export default App
