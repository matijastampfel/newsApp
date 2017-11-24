import React,{Component} from 'react';

export class Header extends Component {
    render(){
        return(
            <div className='topnav'>
                <div className='dropdown'>
                    <div className='dropbtn'>Menu</div>
                    <div className='dropdown-content'>
                    <a href='#focus'>Focus</a> 
                    </div>
                </div>
                <input className='searchBar' type="text" placeholder="Search.."/>
            </div>
        );   
    }
}