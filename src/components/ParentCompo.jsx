import { useState } from 'react';
import Childcompo from './Childcompo';

function ParentCompo() {
   const [parentState, setParentState] = useState('parentValue');

   return (
       <div>
           <Childcompo parentState={parentState} />
       </div>
   );
}

export default ParentCompo;