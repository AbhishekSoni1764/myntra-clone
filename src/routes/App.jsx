import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import LoadData from '../components/LoadData'
import LoadingSpinner from '../components/LoadingSpinner';
import '../App.css'

function App() {
  const loadData = useSelector((store) => store.loadData)

  return (
    <>
      <Header />
      <LoadData />
      {loadData.dataFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
