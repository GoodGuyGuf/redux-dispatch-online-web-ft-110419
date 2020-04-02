let state = {count: 0};
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
function render(){
    document.body.innerHTML = `<h1>${state.count}</h1>`
}
 
function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render()