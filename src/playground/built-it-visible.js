class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false //default state danne mehemai //variable wala danne ne global widiyata
        }
    }

    toggleVisibility() {
        this.setState((prevState)=>{ //mehema this dala access karanna ona nisa thama uda constructor eke bind karala tynne 'this'
            return {
                visibility : !(prevState.visibility)
            };
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Some deteils you want to see !</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));