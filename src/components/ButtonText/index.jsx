import {Container} from './style';
import PropTypes from 'prop-types';


export function ButtonText({title, ...rest}){

    ButtonText.propTypes = {
        title: PropTypes.string.isRequired
      }
    
    return (
        <Container type="button" {...rest}>
            {title}
        </Container>
    );
}