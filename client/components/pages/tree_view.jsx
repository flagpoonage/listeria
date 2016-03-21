import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { TreeNode } from 'content';

const PageTreeView = connect(
  state => state.app
)(({ rootNode, dispatch }) => (
  <div className="tree_view">
    <TreeNode node={rootNode} dispatch={dispatch} />
  </div>
));

export { PageTreeView };
