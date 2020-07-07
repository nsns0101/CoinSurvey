import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <section id="main-navigation">
            <div className="row py-1" style={{background:"#002ef0", opacity:1, display: "flex", height:"65px"}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <nav className="navbar navbar-expand-lg px-0 py-0">
                        <Link to="/" className="navbar-brand" style={{marginRight:"2em"}}>
                            <img className="img mx-4" src="/icon/logo_curumamori.png" alt="logo" style={{width:150}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <img className="search-img" src="../icon/list.png" 
                                style={{display: "inline-block",
                                verticalAlign: "middle",
                                width:"60%",
                                height: "60%"}}
                            ></img>
                        </button>
                        <div className="collapse navbar-collapse px-4" id="main_navbar" style={{background:"#002ef0", zIndex:1000}}>
                            <ul className="navbar-nav mr-auto col-auto">
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/products" className="nav-link" style={nav_text}>제품</Link>
                                </li>
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/bigdata" className="nav-link" style={nav_text}>빅데이터 자료실</Link>
                                </li>
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/boards/questions" className="nav-link" style={nav_text}>고객 문의</Link>
                                </li>
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <a className="nav-link" href="/boards/reviews" style={nav_text}>고객 리뷰</a>
                                </li>
                            </ul>
                
                            <ul className="navbar-nav col-auto">
                                <React.Fragment>
                                    <li className="nav-item" style={{marginRight:"1.5em"}}>
                                        <Link to="/info/index" className="nav-link" style={nav_text}>내정보</Link> 
                                    </li>
                                    <li className="nav-item" style={{marginRight:"1.5em"}}>
                                        <Link to="/logout" className="nav-link" style={nav_text}>로그아웃</Link> 
                                    </li>
                                </React.Fragment>

                            </ul>
                        </div>
                    </nav>   
                </div>
            </div>
        </section>
    )
}