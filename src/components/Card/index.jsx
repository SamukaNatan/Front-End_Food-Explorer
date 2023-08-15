import { Container, Content, PurchaseCard } from './style.js'
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { ButtonText } from "../ButtonText";

import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import { useState } from "react";

import { BsReceipt } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function Card({ data, ...rest }) {
    Card.propTypes = {
        data: PropTypes.string.isRequired
      }
    const { user } = useAuth();
    
    const imageURL = `${api.defaults.baseURL}/files/${data.image}`;
    //const imageURL = `${api.defaults.baseURL}/tmp/uploads/${data.image}`;

    const { handleAddDishToCart} = useCart();
    
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity > 19) {
            alert("Erro: A quantidade máxima é de 20 unidades")
            return;
        }
        setQuantity(count => count + 1);
    };
     
    const decrease = () => {
        if (quantity < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
        setQuantity(count => count - 1);
    };

    return (
        <Container {...rest}>
            {
                user.isAdmin ?

                    <Content>
                        <div className="container">

                            <img src={imageURL} alt="Imagem do prato" />

                            <Link to={`/details/${data.id}`}>
                                <h3 className="product-title">{data.title}</h3>
                            </Link>

                            <p className="description">{data.description}</p>
                            
                            <h1 className="price">R$ {data.price}</h1>

                            <Link to={`/editDish/${data.id}`}>
                                <Button
                                    title="editar prato"
                                    icon={BsReceipt}
                                />
                            </Link>

                        </div>
                    </Content>

                :

                    <Content>
                        <button 
                            className="favButton"
                            >
                        </button>

                        <div className="container">
                            <img src={imageURL} alt="Imagem do prato" />
                            <Link to={`/details/${data.id}`}>
                                <h3 className="product-title">{data.title}{' >'} </h3>
                            </Link>
                            <p className="description">{data.description}</p>
                            <h1 className="price">R$ {data.price}</h1>

                            <PurchaseCard>
                                <div className="counter">
                                    <ButtonText 
                                        icon={FiMinus}
                                        onClick={decrease}
                                    />
                                    <span>{quantity.toString().padStart(2, '0')}</span>
                                    <ButtonText 
                                        icon={FiPlus}
                                        onClick={increase}
                                    />
                                </div>

                                <Button 
                                    title="incluir"
                                    icon={BsReceipt}
                                    onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                                    style={ { height: 56, width: 92, padding: '12px 4px' } }
                                />
                            </PurchaseCard>
                        </div>
                    </Content>
                }
        </Container>
    );
}