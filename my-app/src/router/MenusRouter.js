/**
 * Created  on 2018/9/5.
 * by leilei
 */
import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';

import Home from '../view/home/Home'
import ChildMenu from '../view/menu/ChildMenu';

export default class MenusRouter extends Component {
    render() {

        return (
            <Switch>
                <Route path="/menusNew/home" exact component={Home}/>
                <Route path="/menusNew/userManagement" component={ChildMenu}/>
                <Route path="/menusNew/applicationManagement" component={ChildMenu}/>
                <Route path="/menusNew/tools" component={ChildMenu}/>
                <Route path="/menusNew/statistics" component={ChildMenu}/>
            </Switch>
        );
    }


}

