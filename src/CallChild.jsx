import React from 'react';

const CallChild = React.memo(({ parent }) => {


  console.log("Child rendered");

  return (<button onClick={parent}>
    Call Parent Function
    </button>);
});

export default CallChild;
