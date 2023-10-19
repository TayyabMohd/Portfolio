import "./style.css";
import "./mediaqueries.css";
function NavBar() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  return (
    <div>
      <nav
        id="desktop-nav"
        style={{
          backgroundColor: "#0A0A0A",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <div class="logo" style={{ color: "royalblue" }}>
          {" "}
          Mohd Tayyab
        </div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project"> Project</a>
            </li>
            <li>
              <a href="#contact"> Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div class="logo"></div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={() => toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#home" onClick={() => toggleMenu()}>
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => toggleMenu()}>
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => toggleMenu()}>
                {" "}
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleMenu()}>
                {" "}
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
