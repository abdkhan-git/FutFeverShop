import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <ExpandMoreIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <ExpandMoreIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/11">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/12">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/13">Tracksuits</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">FUTFEVER</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
};

export default Navbar;