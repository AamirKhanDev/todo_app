export default function Navbar ({title}) {
    return (
        <nav className="navbar bg-dark px-5 py-2 border-bottom">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <span className="navbar-brand text-white pointer me-0 fw-bold">
                        {title}
                    </span>
                </div>
            </div>
        </nav>
    )
}