import { useLocation, Outlet } from 'react-router-dom'

const PageTransitionLayout = () => {
  const location = useLocation()

  return (
    <div className="transition-wrapper" key={location.pathname}>
      <Outlet />
    </div>
  )
}

export default PageTransitionLayout
