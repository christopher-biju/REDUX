import React from 'react'

export default function Counter() {
    return (
            <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh'}}>
                <div className='border border-2 border-light p-5 '>
                    <h1 style={{fontSize:'80px'}} className='text-center text-light'>87</h1>
                    <div className='d-flex justify-content-center align-items-center gap-5 my-5'>
                        <button type="button" class="btn btn-warning">Dcrement</button>
                        <button type="button" class="btn btn-danger">Reset</button>
                        <button type="button" class="btn btn-success">Increment</button>
                    </div>
                    <input className='rounded rounded-3 border border-none ps-2 ' style={{ height: '50px', width: '250px' }} type="text" placeholder='Enter the number to incremented ' />
                    <button style={{ height: '50px' }} type="button" class="btn btn-primary rounded rounded-3 ms-3">Increment by amount</button>
                </div>
            </div>

        
    )
}
