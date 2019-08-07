import React, { Component } from 'react';
import CartiFacts from './CartiFacts';

export default class CartiFactSheet extends Component {
    constructor(props){
        super(props);

        this.state = {
            facts: ["Playboi Carti is the greatest rapper alive",
                    "fdsgfdfgdfgdfgdfg",
                    "asdfasdfasdfasdfas"]

        };
    
    }
    
    
    
    
    
    
    
    
    
    
    render() {
        return (
            <div className="cartiFactSheetMain">
               <CartiFacts />
            </div>
    )
        
    }
}
