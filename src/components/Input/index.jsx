import { Container } from './style';
import PropTypes from 'prop-types';

export function Input({ icon: Icon, ...rest }) {

    Input.propTypes = {
        icon: PropTypes.string.isRequired
    }

    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}