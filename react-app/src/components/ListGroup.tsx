import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  // To change class to className: select a word, then command + D
  // To wrap: View > Command Pallete > Wrap with avviation > div
    const items = [
        {name: 'Austin', rate: 95},
        {name: 'Perth', rate: 88},
        {name: 'Honolulu', rate: 87},
        {name: 'Calgary', rate: 80},
    ];

    // items.map(item => <li>{item}</li>) To display

    if (items.length === 0)
        return (
            <>
                <h1>List</h1>
                <p>No item found</p>
            </>
        );
    
    // Event handler
    const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <div>
        <h1>List</h1>
        <ul className="list-group">
          {/* <li className="list-group-item active">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li> */}
          {items.map((item, index) => 
            <li className="list-group-item" key={item.name} onClick={() => console.log(item, index)}>Name: {item.name}, Rate: {item.rate}</li>)}
        </ul>
    </div>
  );
}

export default ListGroup;
