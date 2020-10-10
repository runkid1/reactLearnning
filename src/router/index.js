import React from 'react';
import {Route} from 'react-router-dom'

const RouterView=(props)=>{
  console.log(props.routes)
  return props.routes.map((item,index)=>{
    return 
    <Route key={index} path={item.path} render={(routeProps)=>{
      if(item.children){
        return <item.component {...routeProps} routes={item.children}/>
      }else{
        return <item.component {...routeProps}/>
      }
    }}>
    </Route>
  })
}

export default RouterView