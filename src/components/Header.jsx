import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="containerHeader">
      <div className="row">
        <div className="col">
          <section className="panel">
            <nav className="navbar navbar-expand-lg">
            <div>
              <img className="banner-header" src="./img/banner.jpg" />
            </div>
              {Object.entries(props.menu).map(([rId, menu]) => (
                <NavLink to={`/${rId}`} key={rId} className="nav-link">
                  {menu.title}
                </NavLink>
              ))}
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
}
