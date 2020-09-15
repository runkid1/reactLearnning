import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Video from './Pages/video/Video'
import Workplace from './Pages/workPlace/Workplace'
import Index from './index'
import './index.css'


let routeConfig=[
  {path:'/',title:'博客首页',exact:true,component:Index},
  {path:'/video',title:'视频教程',exact:false,component:Video},
  {path:'/workplace',title:'职场技能',exact:false,component:Workplace}
]
function AppRouter (){
  return (
    <Router>
      <div className="mainDiv">
          <div className="leftNav">
            <h3>一级导航</h3>
              <ul>
                {
                  routeConfig.map((item,index)=>{
                    return (
                    <li> <Link to={item.path}>{item.title}</Link> </li>
                    )
                  })
                }
              </ul>
          </div>
          <div className="rightMain">
            <Route path="/" exact component={Index} />
            <Route path="/video/" component={Video}></Route>
            <Route path="/Workplace/" component={Workplace}></Route>
          </div>
      </div>
    </Router>
  )
}
export default AppRouter;