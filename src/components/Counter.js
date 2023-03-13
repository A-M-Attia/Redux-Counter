import classes from './Counter.module.css';
import { useSelector , useDispatch} from 'react-redux';
import incAction from "../store/actions/increment"
import decAction from "../store/actions/decrement"
import toggle from '../store/actions/toggleAction';



const Counter = () => {
  const dispatch = useDispatch()
  const inc = useSelector(state => state.counter.counter)
  const toggleShow = useSelector(state => state.toggle)

  

  const incrementHandler = ()=>{
    if(toggleShow)
    dispatch(incAction())
  }

  const decrementHandler = ()=>{
    if(toggleShow) dispatch(decAction())
  }

  const toggleCounterHandler = () => {
   dispatch(toggle()) 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> -- COUNTER VALUE -- </div>
      {toggleShow && <div className={classes.value}>{ inc}</div>}
      <div className={classes.btn}>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>


      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
