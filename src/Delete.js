import React from 'react';
import {useParams} from "react-router-dom";

/**
* @author
* @function Delete
**/

const Delete = (props) => {
    const params = useParams();
  return(
    <div>Delete {params.deleteid}</div>
   )

 }

export default Delete