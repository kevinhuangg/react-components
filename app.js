class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bought: false , hover: false } 
  }
  onListItemClick() {
    this.setState({
      bought: !this.state.bought
    });
    //console.log(this.state.done)
  }
  onListItemHover() {
    this.setState({
      hover: true
    });
  }

  render() {
    var style = {
      textDecoration: this.state.bought ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'none' 
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onmouseover={this.onListItemHover.bind(this)}>
        {this.props.items}
      </li>
    );
  }
  
}
  // <ul>
  //   <li>{props.items[0]}</li>
  //   <li>{props.items[1]}</li>
  //   <li>{props.items[2]}</li>
  // </ul>


var GroceryList = (props) => (
  <div>
    <h2>My Grocery Items</h2>
    <ul>
      {props.items.map(item =>
        <GroceryListItem items= {item}/>
      )}
    </ul>
  </div>
);

var groceryData = ['apple','bannana','orange']
var groceryData1 = ['kiwi','strawberry','chocolate']

  ReactDOM.render(<GroceryList items={groceryData}/>, document.getElementById('app'))


