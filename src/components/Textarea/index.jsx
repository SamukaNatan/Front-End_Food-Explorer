import { Container } from "./style";
import PropTypes from 'prop-types';

export function Textarea({ value, ...rest }) {

    Textarea.propTypes = {
        value: PropTypes.string.isRequired
    }

    return (
        <Container {...rest}>
            {value}
        </Container>
    );
}