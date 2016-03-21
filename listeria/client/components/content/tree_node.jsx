require('./style/tree_node.pcss');

import React from 'react'; // eslint-disable-line no-unused-vars
import { AddNode } from 'content';
import { connect } from 'react-redux';

const generatePath = (path, index) => {
  if(!path && !index) {
    return [];
  }

  if(!path) {
    return [index];
  }

  return path.slice().concat(index);
};

const TreeNode = connect(
  (state, ownProps) => {
    console.log(ownProps);
    return {
      children: ownProps.node.children.map(child => {
        console.log(state.app, state.app[child], child);
        return state.app[child];
      })
    };
  }
)(({ parent, node, children, dispatch }) => (
  <div className="tree_node">
    <div className="title">
      {node.name}
    </div>

    {children.map((child, index) => (
      <TreeNode node={child} parent={node.seq} />
    ))}

    <AddNode onAdd={() => dispatch({
      type: 'ADD_NODE',
      parent: parent
    })} />
  </div>
));

export { TreeNode };
