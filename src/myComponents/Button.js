const Button = ({ color,text,tColor,onclick}) => {
    return <button style={{backgroundColor:color, color:tColor}} className="btn" onClick={onclick}>{text}</button>;
};

Button.defaultProps={
   color:'#fe5858' ,
   text:'A button',
   tColor:'black',
}
export default Button;
