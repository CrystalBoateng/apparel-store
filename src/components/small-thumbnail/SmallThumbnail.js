import PropTypes from 'prop-types';
import './SmallThumbnail.css';

export function SmallThumbnail(props) {
  return (
    <div className="small-thumbnail">
      <img alt={props.title} src={props.src} width="100px"/>
      <p>${props.price}</p>
      <p>{props.title}</p>
    </div>
  );
}

SmallThumbnail.defaultProps = {
  price: 0,
  src: "",
  title: "",
}

SmallThumbnail.propTypes = {
  price: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
}