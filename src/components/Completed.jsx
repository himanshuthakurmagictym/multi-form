import React from 'react'

function Completed({handleSubmit}) {
  const onSubmit = (e)=>{
    e.preventDefault();
    handleSubmit();
}
  return (
    <div className="container">
      <div className="col-12 text-center">
     
          <form onSubmit={onSubmit}>
        <button type="submit" className='btn btn-success text-right'>Completed</button>
        </form>
      </div>
    </div>
  )
}

export default Completed