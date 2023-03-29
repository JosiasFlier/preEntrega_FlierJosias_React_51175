const Button = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-sm btn-outline-secondary`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
