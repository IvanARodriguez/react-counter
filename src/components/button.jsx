import '../stylesheet/Button.css';


function Button({ text, isClickButton = false, handleClick }){
	return(
		<button
		className={ isClickButton ? 'btn addBtn ': 'btn resetBtn' }
		onClick={handleClick} >
			{text}
		</button>
	)
}

export default Button;