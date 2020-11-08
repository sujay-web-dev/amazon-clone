import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import "./Header.css";
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    // console.log(basket);

    return (
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="logo.png" alt="LOGO"/>
            </Link>

            <div className="header__search">
             <input type="text" className="header__searchinput"/>
             <SearchIcon className="header__searchicon" />
            </div>

            <div className="header__nav">
                
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={login} className="header__option">                    
                        <span className="header__optionlineone">Hello {user && user.email}</span>
                        <span className="header__optionlinetwo">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>                
                <Link className="header__link" to="/">
                    <div className="header__option">                    
                        <span className="header__optionlineone">Returns &</span>
                        <span className="header__optionlinetwo">Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="/">
                    <div className="header__option">                    
                        <span className="header__optionlineone">Your</span>
                        <span className="header__optionlinetwo">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to="/checkout">
                    <div className="header__optionbasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionlinetwo header__basketcount">{ basket?.length }</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
