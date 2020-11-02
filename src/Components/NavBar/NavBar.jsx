import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../ContextAPI/ContextAPI';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { filterDataByName } from '../../utils/filterData';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    const [state,dispatch]=useContext(DataContext)
    useEffect(() => {
        dispatch({
            type: "START",
            
          })

       fetch('https://www.reddit.com/r/pics/.json?jsonp=').then((res)=>res.json()).then((data)=>{dispatch({
        type: "ADD_DATA",
        payload:data.data.children
      });
      dispatch({
        type: "COMPLETE",
        payload:data.data.children
      })}
      )
       
    }, [])
    const handleChange=(value)=>{
      
      if(value){

        let newData= filterDataByName(state.data,value)
        dispatch({
         type: "FILTER",
         payload:newData
       })
      }else{

        dispatch({
          type: "FILTER",
          payload:state.data
        })

      }

    }
    return (
      <div>
      <Navbar color="light" fixed='top' light expand="md">
        <NavbarBrand href="/">Reddit Image Gallery</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search by title" placeholder="Search" onChange={(e)=>handleChange(e.target.value)} aria-label="Search"/>
  </form>
          
        </Collapse>
      </Navbar>
    </div>
      
      
    )
}
