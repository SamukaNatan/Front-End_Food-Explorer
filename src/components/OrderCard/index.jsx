import { Container } from "./style";

import { ButtonText } from "../ButtonText";

import { useCart } from '../../hooks/cart';

import PropTypes from 'prop-types';

export function OrderCard({data}) { 
    OrderCard.propTypes = {
        data: PropTypes.string.isRequired
    }
    const { handleRemoveDishFromCart } = useCart();

    return(
        <Container>
            <div className="card">

                <img src={data.image} alt="Imagem do Prato" />
                
                <div>
                    <p><strong>{data.quantity} x </strong>{data.title} <span>R${data.price}</span></p>
                    <ButtonText 
                        title="Excluir"
                        onClick={() => handleRemoveDishFromCart(data.id)}
                    />
                </div>
                
            </div>
        </Container>
    )
}