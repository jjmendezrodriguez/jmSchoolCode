interface Props {
  body: string;
}

function Card(props: Props) {
  const { body } = props;
  const width = { width: "18rem" };
  return (
    <div className="card" style={width}>
      <div className="card-body">{body}</div>
    </div>
  );
}

interface CardBadyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBadyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
