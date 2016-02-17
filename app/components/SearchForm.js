import React from 'react';
import Autosuggest from 'react-autosuggest';
import ErrorMessage from './ErrorMessage';
import {hashHistory} from 'react-router';
import getSearchTermItems from '../utils/helpers';
import axios from 'axios';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatches(value,dataArr) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp('^' + escapedValue, 'i');
  return dataArr.filter(data => regex.test(data.candidate_name));
}

function getSuggestionValue(suggestion) {
  return suggestion.candidate_name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.candidate_name}</span>
  );
}

class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        value: '',
        suggestions: getMatches(''),
        isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.setRef = this.setRef.bind(this);
  }

    loadSuggestions(value) {
      this.setState({
        isLoading: true
      });

        getSearchTermItems(value).then((data)=>{
        let dataArr = [...data.candidate_names,...data.related]
        const suggestions = getMatches(value,dataArr);

        if (value === this.state.value) {
          this.setState({
            isLoading: false,
            suggestions
          });
        } else {
          this.setState({
            isLoading: false
          })
        }
      })
    }

    onChange(event, { newValue }) {
      this.setState({
        value: newValue
      });
    }

    onSuggestionSelected(event, { suggestionValue }) {
      this.loadSuggestions(suggestionValue);
    }

    onSuggestionsUpdateRequested({ value }) {
      this.loadSuggestions(value);
    }

  handleSubmit(){
    const search_term = this.searchTermRef;
    this.searchTermRef = '';
    axios.get(`http://54.213.83.132/hackoregon/http/candidate_search/${search_term}`)
    console.log('Make API call to: http://54.213.83.132/hackoregon/http/candidate_search/'+search_term);
    // hashHistory.push(null,'/#/'+search_term);
    // this.props.addSearch(search_term);
  }

  setRef(ref){
    this.searchTermRef = ref;
  }

  render () {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      className: "form-control",
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return(
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
          <Autosuggest ref={()=>this.setRef(this.state.value)}
                       suggestions={suggestions}
                       onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                       getSuggestionValue={getSuggestionValue}
                       renderSuggestion={renderSuggestion}
                       inputProps={inputProps} />

          </div>
          <div className="form-group col-sm-1">
            <button type="submit" className="btn btn-sm btn-block btn-default" onClick={this.handleSubmit.bind(this)}>
            Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchForm;
