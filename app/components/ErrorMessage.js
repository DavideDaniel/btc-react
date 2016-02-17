import React from 'react';

const ErrorMessage = () => {
  return(
    <div>
      <p>We did not find a match for that. Please update your search and try again.</p>
      <h6>Tips:</h6>
      <ol>
      <li>Check your spelling</li>
      <li>If you are not sure what to search, try browsing for a candidate, donor, measure, PAC name or corporation.</li>
      <li>Let us know if you think there is an issue with our site.</li>
      </ol>
    </div>
  );
}

export default ErrorMessage;
