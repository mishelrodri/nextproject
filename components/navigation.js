import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     <Link href="/">
     <a className="navbar-brand">Home</a>
     </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
           <Link href="/about">
           <a className="nav-link" href="#">About</a>
           </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
            <a className="nav-link">Services</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navigation;
