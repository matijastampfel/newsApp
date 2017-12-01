import React,{Component} from 'react';

export class Header extends Component {



// Click function do not work !!!



    render(){
        return(
            <div className='topnav'>
                <div className='dropdown'>
                    <button className='dropbtn'>Menu</button>
                    <div id='dropdownfun' className='dropdown-content'>
                    <a href='#focus'>Focus</a> 
                    </div>
                </div>
                <input className='searchBar' type="text" placeholder="Search.."/>
            </div>
        );   
    }
}