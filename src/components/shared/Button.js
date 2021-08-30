import "../../App.css";

const Button = ({ onClick, name }) => {
  return <button onClick={onClick} className="btn-login btn-primary">{name}</button>;
};

export default Button;
