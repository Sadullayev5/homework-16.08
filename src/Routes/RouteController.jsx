import { lazy , Suspense } from 'react';

const Home = lazy(() => import('./Home/Home'));
const SingleProduct = lazy(() => import('./singleProduct/SingleProduct'));
import { Routes , Route} from 'react-router-dom'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>}><Home/></Suspense>} />
        <Route path='/singleproduct/' element={<Suspense fallback={<h1>Loading...</h1>}><SingleProduct/></Suspense>} />
    </Routes>
  )
}

export default RouteController