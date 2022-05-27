
import Image from "next/image";

export default function Nav() {


    return (
        <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
            <div className="container">
                <a className="navbar-brand  text-white " href="https://demos.creative-tim.com/material-kit/presentation"  title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank"  rel="noreferrer">
                    Material Kit 2
                </a>
                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon mt-2">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </span>
                </button>
                <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
                    <ul className="navbar-nav navbar-nav-hover ms-auto">
                        <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
                            <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages2" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                                Pages
                                <Image src="/img/down-arrow-white.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-block d-none" />
                                <Image src="/img/down-arrow-dark.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-none d-block" />
                            </a>
                        </li>

                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                                Sections
                                <Image src="/img/down-arrow-white.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-block d-none" />
                                <Image src="/img/down-arrow-dark.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-none d-block" />
                            </a>
                        </li>

                        <li className="nav-item dropdown dropdown-hover mx-2">
                            <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="material-icons opacity-6 me-2 text-md">article</i>
                                Docs
                                <Image src="/img/down-arrow-white.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-block d-none" />
                                <Image src="/img/down-arrow-dark.svg" alt="down-arrow" width="5" height="5" className="arrow ms-auto ms-md-2 d-lg-none d-block" />
                            </a>
                        </li>
                        <li className="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0">
                            <a href="https://www.creative-tim.com/product/material-kit" className="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0">Free Download</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}