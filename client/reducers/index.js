let emptyNode = { name: 'New Node', children: [] };

const createNode = (seq) => (
  Object.assign({}, { seq: seq, name: 'New Node', children: [] }));

const RootReducer = (state = { rootNode: emptyNode, seq: 0, viewState: {} }, action) => {
  let newState = Object.assign({}, state);

  if(action.type === 'ADD_NODE') {
    newState.seq += 1;
    let newNode = createNode(newState.seq);

    if(action.parent) {
      newNode.parent = action.parent;
      newState[action.parent].children = newState[action.parent].children.slice().concat(newNode.seq);
    }
    else {
      newState.rootNode.children = newState.rootNode.children.slice().concat(newNode.seq);
    }

    newState[newNode.seq] = newNode;
  }

  if(action.type === 'HOVER_NODE') {
    console.log('HOVER');
    newState.viewState = Object.assign({}, newState.viewState, { hoverNode: action.seq || 'root' });
  }

  if(action.type === 'LEAVE_NODE') {
    console.log('LEAVE');
    newState.viewState = Object.assign({}, newState.viewState, { hoverNode: null });
  }

  return newState;
};

export { RootReducer };
