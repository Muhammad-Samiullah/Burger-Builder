import React, {Component} from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawerToggleClicked = () => {
        this.setState(prevState => {
            return({showSideDrawer: !prevState.showSideDrawer})
        })
    }
    
    render() {
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler} 
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout