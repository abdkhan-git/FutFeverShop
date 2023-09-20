import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://www.linkpicture.com/q/benzema_1.jpeg"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/12">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://www.linkpicture.com/q/women-player1.png"
                        alt=""
                    />
                    <button>
                        <Link to="/products/11" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://www.linkpicture.com/q/mbappe-new.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/12" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://www.linkpicture.com/q/haaland.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/12" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://www.linkpicture.com/q/messi_2.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/12" className="link">
                                    International
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://www.linkpicture.com/q/saka.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/13" className="link">
                            Tracksuits
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;