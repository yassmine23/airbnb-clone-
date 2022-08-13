import React from 'react'
import Header from './../../Header';
import { useSelector } from 'react-redux';
import Footerhostormore from './../../../pages/pagehost/footerhostormore';

export default function UserProfile() {
  const x = useSelector((state)=>state.userData.info)
  // console.log(x);
  return (<>
  <Header />
  <div className='container'>
    <div className='row py-5'>
      <div className='col-md-4 border border-1 rounded p-3 text-center'>
        <div className=' '>
          <img className='rounded-circle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU'/>
        </div>
        <div className='my-2'>
          <h2>{x.name}</h2>
        </div>
      </div>
      <div className='col-md-8 px-5'>
        <h2>Hi, {x.name}</h2>
      </div>
    </div>
  </div>
  <Footerhostormore/>
  </>
  )
}
