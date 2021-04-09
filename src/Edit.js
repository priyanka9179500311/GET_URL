import React from 'react'
import {useParams} from "react-router-dom";
/**
* @author
* @function Edit
**/

const Edit = (props) => {
  const params = useParams();
  return(
    <div>Edit {params.editid}</div>
   )

 }

export default Edit;