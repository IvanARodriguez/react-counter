import '../stylesheet/Counter.css';

function Counter({ clickNum }){
    return(
        <div className="counter_display">
            {clickNum}
        </div>
    )
}

export default Counter;