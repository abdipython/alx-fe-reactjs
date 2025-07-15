import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {/* Company Logo or Name */}
      <h1 style={{ margin: 0 }}>MyCompany</h1>

      {/* Navigation Links */}
      <div>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
