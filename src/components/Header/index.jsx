import { Container, Content, Logo, Search, Logout, Button, ButtonMenu, Profile } from "./style";
import { useAuth } from '../../hooks/auth';
import PropTypes from 'prop-types';


import { Link } from "react-router-dom";

import { FiSearch, FiLogOut, FiUser, FiShoppingBag, FiHeart } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import receit from '../../assets/receit.svg';

import { useCart } from '../../hooks/cart';

export function Header({search, favoritesFilter}) {
    Header.propTypes = {
        search: PropTypes.string.isRequired,
        favoritesFilter: PropTypes.string.isRequired
      }
    const { user } = useAuth()
    const { signOut } = useAuth();

    const { cart } = useCart();
    
    function mobileMenu() {
        document.getElementById('hamburger').classList.toggle('active')
        document.getElementById('nav-menu').classList.toggle('active')
    }

    function userMenu() {
        document.getElementById('user-menu').classList.toggle('active')
    }

    return (
        <Container>
            <Content>
            {
                        user.isAdmin ?
                <Logo>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                            <div className="title">
                            <h1>food explorer</h1>
                            <span>admin</span>
                            </div>
                        </Link>
                    </div>
                </Logo>
                :
                <Logo>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                           
                            <h1>food explorer</h1>
                       
                           
                        </Link>
                    </div>
                </Logo>
                    }


                <div className="hamburger" id="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-menu" id="nav-menu">

                    <Search>
                        <label>
                            <FiSearch size={24}/>
                            <input 
                                type="text" 
                                placeholder="Busque pelas opções de pratos"
                                onChange={e => {search(e.target.value)}}
                            />
                        </label>
                    </Search>

                    {
                        user.isAdmin ?

                            <Link to="/createdish">
                                <Button
                                    type='button'
                                >
                                    Novo Prato 
                                </Button>
                            </Link>

                    :

                            <Link to="/cart">
                                <Button
                                    type='button'
                                >
                                    <img src={receit} alt="" />
                                    Carrinho <span>({cart})</span>
                                </Button>
                            </Link>
                    }

                    {
                        user.isAdmin ?

                            <Link to="/profile">
                                <Profile>
                                    <FiUser />
                                </Profile>
                            </Link>

                    :

                    <Profile onClick={userMenu}>
                        <FiUser />
                        <div className="user-menu" id="user-menu">
                                <Link to="/orders">
                                    <ButtonMenu>
                                        <FiShoppingBag size={24}/>
                                        Meus Pedidos
                                    </ButtonMenu>
                                </Link>

                                <Link to="/">
                                    <ButtonMenu onClick={favoritesFilter}>
                                        <FiHeart size={24}/>
                                        Meus Favoritos
                                    </ButtonMenu>
                                </Link>
                                
                                <Link to="/profile">
                                    <ButtonMenu>
                                        <FiUser size={24}/>
                                        Meu Perfil
                                    </ButtonMenu>
                                </Link>
                        </div>
                    </Profile>
                    }

                    <Logout to="/" onClick={signOut}>
                        <FiLogOut />
                    </Logout>
                </div>

            </Content>
        </Container>
    );
}