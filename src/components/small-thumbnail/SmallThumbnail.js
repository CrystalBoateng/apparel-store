import './SmallThumbnail.css';

export function SmallThumbnail(props) {
  return (
    <div>
      <img src={props.src} width="100px"/>
      <p>${props.price}</p>
      <p>{props.title}</p>
    </div>
  );
}
