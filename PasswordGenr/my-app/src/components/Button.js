const Button = ({onclick, text, customClass}) =>{
    return (
        <button className={customClass}> onclick ={onclick}
        {text}
        </button>
    );
};

export default Button;