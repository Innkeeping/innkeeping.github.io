import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">Innkeep</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <button
              data-tally-open="w2bAoL"
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave">
                Let's Collab!
              </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle />
        <a className="btn btn-primary">Download CV</a>
      </div>
    </div>
  );
}