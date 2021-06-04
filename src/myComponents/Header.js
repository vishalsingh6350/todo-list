import PropTypes from 'prop-types'
import Btn from './Button'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            {/* <Btn color='black' text='Add' tColor='white'/> */}
        </header>
    );
};

Header.defaultProps={
    title: 'task tracker',
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
// const headingStyle={
//     color: 'red',
//     backgroundColor:'blue',
// }
export default Header;
