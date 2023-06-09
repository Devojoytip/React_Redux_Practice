import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark"> */}
            <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">E-Shopping App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                        </ul>
                        <span className="navbar-text bg-primary">
                            Rs. 10000
                        </span>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
