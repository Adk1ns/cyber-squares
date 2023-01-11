import { Provider as JotaiProvider } from 'jotai'
import GlobalStyles from './components/styles/GlobalStyles'
import MainPage from './components/pages/MainPage'

function App() {
  return (
    <div className="">
      <JotaiProvider>
        <GlobalStyles>
          <MainPage />
        </GlobalStyles>
      </JotaiProvider>
    </div>
  )
}

export default App
