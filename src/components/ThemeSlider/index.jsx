import { Container } from "./styles";
import PropTypes from 'prop-types';


export function ThemeSlider({ theme, toggleTheme }) {
    ThemeSlider.propTypes = {
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.string.isRequired
    }
    
    return (
        <Container>
            <div className='toggle-switch'>
                <label>
                    <input id="sliderState" type='checkbox' checked={theme === 'darkTheme' ? false : true} onChange={toggleTheme}/>
                    <span className='slider'></span>
                </label>
            </div>
        </Container>
    );
}