import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import datasample from '../config/datasample.json';
import Button from './Button';

const SearchItems = [{"tran_id":2172756,
   "tran_date":"2016-02-12",
   "filer":"Prentiss Courtney for State Senate",
   "contributor_payee":"C&E Systems",
   "sub_type":"Cash Expenditure",
   "amount":425.55,
   "contributor_payee_committee_id":null,
   "filer_id":470,
   "purp_desc":"#2814",
   "book_type":"Business Entity",
   "addr_line1":"PO Box 42307",
   "filed_date":"2016-02-15",
   "addr_line2":null,
   "city":"Portland",
   "state":"OR",
   "zip":97242,
   "purpose_codes":"Management Services; Postage",
   "direction":"out",
   "contributor_payee_class":null},
   {"tran_id":2172761,
   "tran_date":"2016-02-04",
   "filer":"Peter Courtney for State Senate",
   "contributor_payee":"Peter Courtney",
   "sub_type":"Cash Expenditure",
   "amount":409.78,
   "contributor_payee_committee_id":null,
   "filer_id":470,
   "purp_desc":"mileage",
   "book_type":"Candidates Immediate Family",
   "addr_line1":"2925 Island View Dr NE",
   "filed_date":"2016-02-15",
   "addr_line2":null,
   "city":"Salem",
   "state":"OR",
   "zip":97303,
   "purpose_codes":"Travel Expenses (need description)",
   "direction":"out",
   "contributor_payee_class":null},
   {"tran_id":2172760,
   "tran_date":"2016-02-04",
   "filer":"Peter Sunwoo for State Senate",
   "contributor_payee":"Peter Courtney",
   "sub_type":"Cash Expenditure",
   "amount":64.99,
   "contributor_payee_committee_id":null,
   "filer_id":470,
   "purp_desc":null,
   "book_type":"Candidates Immediate Family",
   "addr_line1":"2925 Island View Dr NE",
   "filed_date":"2016-02-15",
   "addr_line2":null,
   "city":"Salem",
   "state":"OR",
   "zip":97303,
   "purpose_codes":"Reimbursement for Personal Expenditures",
   "direction":"out",
   "contributor_payee_class":null}
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// function getSuggestions(value) {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;
//
//   return inputLength === 0 ? [] : SearchItems.filter(lang =>
//     lang.filer.toLowerCase().slice(0, inputLength) === inputValue
//   );
// }

function getMatches(value,dataArr) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp('^' + escapedValue, 'i');
  return dataArr.filter(data => regex.test(data.filer));
}

function fetchItems(data){
  // axios.get(`http://54.213.83.132/hackoregon/http/candidate_search/${value}`)
  let promised = new Promise( (resolve, reject) =>
    setTimeout(()=>{
      resolve(data);
    },10))
  return promised;
}

function getSuggestionValue(suggestion) { // when suggestion selected, this function tells
  return suggestion.filer;                 // what should be the value of the input
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.filer}</span>
  );
}

const SearchInput =({props}) => {

    this.state = {
        value: this.props.params.value || '',
        suggestions: getMatches(''),
        isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);


  loadSuggestions(value) {
    this.setState({
      isLoading: true
    });

  // AJAX call
  // axios.get(`http://54.213.83.132/hackoregon/http/candidate_search/${value}`)
  // axios.get(`http://54.213.83.132/hackoregon/http/current_candidate_transactions/470/`)
      fetchItems(SearchItems)
      .then((data)=>{
      // const suggestions = getSuggestions(data);
      const suggestions = getMatches(value,data);

      if (value === this.state.value) {
        this.setState({
          isLoading: false,
          suggestions
        });
      } else { // Ignore suggestions if input value changed
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

  // onSuggestionsUpdateRequested({ value }) {
  //
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // }

  render() {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      name: this.props.params.name,
      placeholder: this.props.params.placeholder,
      value,
      onChange: this.onChange
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return (
      <div>
      <Autosuggest suggestions={suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={getSuggestionValue}
                   renderSuggestion={renderSuggestion}
                   inputProps={inputProps} />
      </div>
    );
  }
}

export default SearchInput;
