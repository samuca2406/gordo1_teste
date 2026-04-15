import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contato">Contato</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/artigo">Artigo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}