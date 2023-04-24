const Button = (props) => {



  return (
    <button
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
