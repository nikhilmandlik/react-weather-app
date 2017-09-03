import React, {Component}  from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state= {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event){
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                  <input type="text" className="form-control" placeholder="Please city name"
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
