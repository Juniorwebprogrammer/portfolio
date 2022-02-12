import ("./menu.scss")

export default function ListMenu({menuOpen, setMenuOpen}) {
    return (
        <div className={"listMenu " + (menuOpen && "active")}>
            <li>
                <a href="#intro"> Home </a>
            </li>
            <li>
                <a href="#portfolio"> Portfolio </a>
            </li>
            <li>
                <a href="#works"> Works </a>
            </li>
            <li>
                <a href="#testimonials"> Testimonials </a>
            </li>
            <li>
                <a href="#contact"> Contact </a>
            </li>
        </div>
    )
}