require('./style/tree_node.pcss');

import React from 'react'; // eslint-disable-line no-unused-vars
import { AddNode } from 'content';
import { connect } from 'react-redux';

const TreeNode = connect(
  (state, ownProps) => {
    return {
      children: ownProps.node.children.map(child => {
        console.log(state.app, state.app[child], child);
        return state.app[child];
      }),
      viewState: state.app.viewState
    };
  }
)(({ node, children, viewState, dispatch, collapsed, alternate }) => {
  let nodeClass = 'tree_node' + (alternate ? ' alt' : '') + (collapsed ? ' collapsed' : '');
  let toggleClass = 'toggle' + (collapsed ? ' collapsed' : '');
  let hoverState = (viewState.hoverNode &&
    (viewState.hoverNode === node.seq || (viewState.hoverNode === 'root' && !node.seq)));

  return (
    <div className={nodeClass}
         data-hoverstate={hoverState}
         data-selectstate={node.selectstate}
         onMouseOver={() => dispatch({ type: 'HOVER_NODE', seq: node.seq })}
         onMouseOut={() => dispatch({ type: 'LEAVE_NODE', seq: node.seq })}>

      <div className="heading">
        <div className={toggleClass}>
          <i className="fa fa-chevron-down"></i>
        </div>

        <div className="title">
          {node.name}
        </div>
      </div>

      {children.map((child, index) => (
        <TreeNode alternate={!alternate} node={child} parent={node.seq} key={index} collapsed={node.collapsed} />
      ))}

      <AddNode onAdd={() => dispatch({
        type: 'ADD_NODE',
        parent: node.seq
      })} />
    </div>
  );
});

export { TreeNode };
