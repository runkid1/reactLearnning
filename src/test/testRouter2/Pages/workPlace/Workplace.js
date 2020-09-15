import React from 'react';
import {Route,Link} from 'react-router-dom'
import Money from './Money'
import Getup from './Getup'

function WorkPlace(){
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/Money">赚钱</Link></li>
          <li><Link to="/workplace/Getup">早起</Link> </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>职场软技能</div>
        <Route path="/workplace/Money/" component={Money}/>
        <Route path="/workplace/Getup" component={Getup}/>
      </div>
    </div>
  )
}
export default WorkPlace
