import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice'

export default function Counter() {

    const inputref = useRef()


    const { count } = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        const amount = inputref.current
        console.log(inputref);        
        
        if(amount){
            dispatch(incrementByAmount(amount))
        }else{
            alert("Enter a valid input")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh' }}>
            <div className='border border-2 border-light p-5 '>
                <h1 style={{ fontSize: '80px' }} className='text-center text-light'>{count}</h1>
                <div className='d-flex justify-content-center align-items-center gap-5 my-5'>
                    <button onClick={() => dispatch(decrement())} type="button" className="btn btn-warning">Dcrement</button>
                    <button onClick={() => dispatch(reset())} type="button" className="btn btn-danger">Reset</button>
                    <button onClick={() => dispatch(increment())} type="button" className="btn btn-success">Increment</button>
                </div>
                <input key={inputref} className='rounded rounded-3 border border-none ps-2' style={{ height: '50px', width: '250px' }} type="text" placeholder='Enter the number to incremented ' />
                <button onClick={handleIncrement} style={{ height: '50px' }} type="button" className="btn btn-primary rounded rounded-3 ms-3">Increment by amount</button>
            </div>
        </div>


    )
}
