import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="body-inner">
		    <header id="header" className="header-one">
                <nav className="site-navigation navigation navdown">
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
							<div className="site-nav-inner">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>

								<div className="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul className="nav navbar-nav">
                                        <Link to="/">
                                            <img src="/icon/logo_CoinServey_white.png" style={{width:"150px", marginTop:"5px", marginRight:"80px"}}/>
                                        </Link>
                                        {/* <li><a href="contact.html">Home</a></li> */}
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/market">Market</Link></li>
                                        <li><Link to="/question">Question</Link></li>

                                        {/*  */}
                                    </ul>
                                    <ul className="nav navbar-nav" style={{listStyle:"none", float:"right"}}>
                                        <li><Link to="/auth/login">Login</Link></li>
                                    </ul>
								</div>

							</div>

						</div>
                        
                     </div>
                </nav>
            </header>
        </div>

    )
}