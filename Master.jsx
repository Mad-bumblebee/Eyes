import React from "react";
import './styles.css';

export default class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            X: 0,
            Y: 0
        }  
        this.arcctg = this.arcctg.bind(this);      
    }

    mouseMove(e) {
        this.setState({ X: e.pageX, Y: e.pageY });
    }

    arcctg(x, y) {
        if (x > 0 && y > 0 || x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);        
        if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
        if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }

    render() {
        const { X, Y } = this.state;
        let OX = this.state.X - 50;
        let OX2 = this.state.X - 156;
        let OY = this.state.Y - 50;
        let top = 350;
        let left = 820;
        return <body onMouseMove={this.mouseMove.bind(this)}>
        <div style = {{ position: 'absolute', top: top + 'px', left: left + 'px'}}>   
        <div className="eleft" style={{ transform: 'rotate('+ 57.2958 * this.arcctg(OX - left, OY - top) + 'deg)' }}>
                <div className="eleftscnd" style={{ transform: 'scale(2, 2) translateX(-25%)' }}>
                </div>                
            </div>
            <div className="eleft2" style={{ transform: 'rotate('+ 57.2958 * this.arcctg(OX2 - left, OY - top) + 'deg)' }}>
                <div className="eleftscnd2" style={{ transform: 'scale(2, 2) translateX(-25%)' }}>
                </div>                
            </div>
        </div>            
            <h1 style={{ textAlign: 'center' }}>Mouse coordinates: {X} {Y}</h1>
        </body>
    }
}
      