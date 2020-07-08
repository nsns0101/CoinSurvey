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
                                        <img src="/img/logo_CoinServey.png" style={{width:"150px", marginTop:"5px", marginRight:"80px"}}/>
                                        {/* <li><a href="contact.html">Home</a></li> */}
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Service">Service</Link></li>
                                        <li><Link to="/Market">Market</Link></li>
                                        <li><Link to="/Question">Question</Link></li>

                                        {/*  */}
                                    </ul>
                                    <ul className="nav navbar-nav" style={{listStyle:"none", float:"right"}}>
                                        <li><Link to="/Login">Login</Link></li>
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