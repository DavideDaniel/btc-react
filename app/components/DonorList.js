import React from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://btc-dev.firebaseio.com/');

const DonorList = ({donors}) => {
  return(
    <ul className="list-group">
      {donors.map((donor, index)=>(
        <li className="list-group-item" key={index}>
        {donor}
        </li>
      ))}
    </ul>
  );
}

DonorList.propTypes = {
  donors: React.PropTypes.array.isRequired
}

export default DonorList;
