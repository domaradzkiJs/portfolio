import React from 'react';
import '../../index.scss';



class Hamburger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
            activeClass:'is-active',
            notActive:''            
        }

    }



render() { 
    
    return (
    <div className={`hamburger ${this.props.open ? this.state.activeClass : this.state.notActive}` }  id="hamburger-11" onClick={this.props.action} >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
  </div>
    )
  }
}
export default Hamburger;