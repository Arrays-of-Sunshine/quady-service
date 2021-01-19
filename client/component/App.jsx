import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Price from './Price.jsx';
import Stock from './Stock.jsx';

const WidgetArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2 1fr);
    grid-template-rows: repeat (5 1fr);
    border: 5px solid magenta;
`;

const BrokenP = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

const MarginTiny = styled.div`
    grid-column: 1;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    border-bottom: 1px solid black;
`;

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            product: {}
        }
    }
    componentDidMount(){
        // pressuming that we are only loading one page for this app
        // load the first product for this app.
        axios.get('/api/product/1')
        .then((response) => {
            this.setState({
                product: response.data[0]
            });
        }).catch(function(error) {
            console.log(`Error loading data from database: ${error}`);
        })
    }

    render() {
        return (
            <WidgetArea>
                {Object.keys(this.state.product).length === 0 &&
                    <BrokenP>Something is wrong. Unless you paused as the page is rendering, this should never show up.</BrokenP>
                }
                {Object.keys(this.state.product).length > 0 &&
                <>
                    <Price product={this.state.product}/> 
                    <MarginTiny />
                    <div>Here will be some credit card application stuff</div>
                    <MarginTiny />
                    <Stock product={this.state.product}/>
                </>}
            </WidgetArea>
        )
    }
}

export default App;