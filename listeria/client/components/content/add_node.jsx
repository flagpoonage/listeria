import React from 'react'; // eslint-disable-line no-unused-vars

const AddNode = ({ onAdd }) => (
  <div className="add_node">
    <button onClick={onAdd}>Add New Node</button>
  </div>
);

export { AddNode };
