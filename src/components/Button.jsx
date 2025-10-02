

const Button = ({ onClick, children, id, className, disabled = false }) => {
    return (
        <button onClick={ onClick } id={ id } className={ className } disabled={ disabled }>
            { children }
        </button>
    )

}

export default Button;