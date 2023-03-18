import {Component} from 'react'

const HOC = (OriginalComponent) => {

    return class NewComponent extends Component {
        state = {
            data : []
        }

        getData = async () => {         
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({
              data    
            })                      
        }

        componentDidMount() {
            this.getData()
        }

        reander() {
            return (
                <OriginalComponent data = {this.state.data} />
                // <OriginalComponent data = "Hello HOC" />
            )
        }
    }
}

export default HOC;