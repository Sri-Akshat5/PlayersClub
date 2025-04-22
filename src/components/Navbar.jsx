import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide">PlayersClub</Link>
      <ul className="flex gap-6 text-sm uppercase font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
