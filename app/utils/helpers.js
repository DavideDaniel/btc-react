import axios from 'axios';

String.prototype.capitalize = (lower) => {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

function getCompetitorFromName(searchTerm) {
  return axios.get(`http://54.213.83.132/hackoregon/http/competitors_from_name/${searchTerm}/`);
}

function getCandidate(searchTerm){
  return axios.get(`http://54.213.83.132/hackoregon/http/candidate_search/${searchTerm}/`);
}

export default function fetchItems(searchTerm){
  const searchFor = searchTerm.capitalize();
  return axios.all([getCompetitorFromName(searchFor),getCandidate(searchTerm)])
  .then((arr)=>({
    candidates: arr[0].data,
    committees: arr[1].data
  }))
}
