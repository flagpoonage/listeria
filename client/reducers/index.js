let emptyNode = { name: 'New Node', children: [] };

const createNode = (seq) => (
  Object.assign({}, { seq: seq, name: 'New Node', children: [] }));

const RootReducer = (state = { rootNode: emptyNode, seq: 0 }, action) => {
  let newState = Object.assign({}, state);

  if(action.type === 'ADD_NODE') {
    newState.seq += 1;
    let newNode = createNode(newState.seq);

    if(action.parent) {
      newState[action.parent].children = newState[action.parent].children.slice().concat(newNode.seq);
    }
    else {
      newState.rootNode.children = newState.rootNode.children.slice().concat(newNode.seq);
    }

    newState[newNode.seq] = newNode;
  }

  return newState;
};

export { RootReducer };
