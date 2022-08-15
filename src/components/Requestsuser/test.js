import React ,{ useContext ,useLocation} from 'react';
import { Context } from '../underHome/underHome';

export default function Test(){
    const location = useLocation();
    // const {value} = useContext(Context);

    return <div>{location.state.name}</div>
   ;
}