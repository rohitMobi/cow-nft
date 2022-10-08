import "./style.css";

function HeaderComp() {
    return (
        <>
            <div>
                <nav class="bs-navbar navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="bs-nav-link nav-link active" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="bs-nav-link nav-link" href="#">Eco-System</a>
                                </li>
                                <li class="nav-item">
                                    <a class="bs-nav-link nav-link" href="#">Roadmap</a>
                                </li>
                                <li class="nav-item">
                                    <a class="bs-nav-link nav-link" href="#">Whitepaper</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                <button class="btn me-2 bs-btn-orange" type="button">Free $10</button>
                                <button class="btn me-2 bs-btn-orange" type="button">BUY</button>
                                <button class="btn me-2 bs-btn-orange" type="button">CLAIM</button>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default HeaderComp;