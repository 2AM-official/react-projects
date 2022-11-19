import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class Square extends React.Component {
    render() {
        return (
            <button className='square'>
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSqare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return(
            <div>
                <div className="statues">{status}</div>
                <div className="board-row">
                    {this.renderSqare(0)}
                    {this.renderSqare(1)}
                    {this.renderSqare(2)}
                </div>
                <div className="board-row">
                    {this.renderSqare(3)}
                    {this.renderSqare(4)}
                    {this.renderSqare(5)}
                </div>
                <div className="board-row">
                    {this.renderSqare(6)}
                    {this.renderSqare(7)}
                    {this.renderSqare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />)