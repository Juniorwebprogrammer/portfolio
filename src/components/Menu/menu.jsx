import ("./menu.scss")

export default function ListMenu({menuOpen, setMenuOpen}) {
    return (
        <div className={"listMenu " + (menuOpen && "active")}>
            <li onClick={()=> setMenuOpen(false)} >
                <a href="#intro"> Home </a>
            </li>
            <li onClick={()=> setMenuOpen(false)} >
                <a href="#works"> Works </a>
            </li>
            <li onClick={()=> setMenuOpen(false)} >
                <a href="#contact"> Contact </a>
            </li>
        </div>
    )
}