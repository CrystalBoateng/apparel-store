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
