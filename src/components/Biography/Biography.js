import './css/Biography.css';
import React from 'react';

let biography = [
  {
    date: {
      year: 2020,
      month: 'may'
    },
    description: 'some information about 2020 year',
    active: false
  },
  {
    date: {
      year: 2010,
      month: 'october'
    },
    description: 'some information about 2010 year',
    active: false
  },
  {
    date: {
      year: 2000,
      month: 'june'
    },
    description: 'some information about 2000 year',
    active: false
  },
];

function standartSort(array) {
  return [...array].sort((a, b) => a.date.year - b.date.year);
}

function myBubbleSort(array) {
  const sortedArray = [...array];
  for (let i = 0; i < sortedArray.length - 1; i += 1) {
    for (let j = 0; j < sortedArray.length - 1 - i; j += 1) {
      if (sortedArray[j].date.year > sortedArray[j + 1].date.year) {
        const temp = sortedArray[j + 1];
        sortedArray[j + 1] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }

  return sortedArray;
}

function addElement(array) {
  return [
    ...array,
    {
      date: {
        year: 2021,
        month: 'february'
      },
      description: 'random description',
      active: false
    }
  ];
}

function removeLastElement(array) {
  const newArray = [...array];
  newArray.pop();

  return newArray;
}

function addElementToObject() {
  const modifiedBio = biography.map((object) => {
    return {
      ...object,
      newElement: 'some new data'
    };
  });

  biography = modifiedBio;

  console.table(biography);
}

function deleteElementFromObject() {
  biography.forEach((object) => {
    const obj = object;
    delete obj.newElement;
  });

  console.table(biography);
}

function getElementByKey() {
  const key = prompt('Enter key to find element in object');
  biography.forEach((object) => {
    console.log(`${key}: ${object[key]}`);
  });
}

function usingSpreadOperator() {
  const newRecord = { ...biography[0] };

  console.log(newRecord);
}

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateBiography: [...biography],
      highlighting: false,
      currentItem: undefined
    };
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      const { highling } = this.state;
      if (e.code === 'KeyR' && e.shiftKey === true) {
        this.setState({
          highlighting: highling
        });
      }
    });
  }

  handleClick = (e, item) => {
    biography.forEach((element) => {
      const el = element;
      el.active = false;
    });
    const clickedItem = item;
    clickedItem.active = true;
    this.setState((prevState) => ({ ...prevState }));
  }

  handleDrag = (e, item) => {
    e.preventDefault();
    this.setState({
      currentItem: item,
    });
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  handleDrop = (e, item) => {
    const { currentItem } = this.state;
    if (item === currentItem) {
      return;
    }
    const table = [];
    let prevOrNext = true;
    biography.forEach((element) => {
      if (element !== currentItem) {
        if (element === item) {
          if (prevOrNext) {
            table.push(currentItem);
            table.push(item);
          } else {
            table.push(item);
            table.push(currentItem);
          }
        } else {
          table.push(element);
        }
      } else {
        prevOrNext = false;
      }
    });
    biography = [...table];
    this.setState({
      stateBiography: [...biography]
    });
  }

  render() {
    const { highlighting } = this.state;
    const biographyList = biography.map((element) => {
      const classes = element.active && highlighting ? 'row active' : 'row';

      return (
        <li 
          className={classes}
          role="presentation"
          key={`${element.date.month}-${element.date.year}`}
          draggable
          onClick={(e) => this.handleClick(e, element)}
          onKeyDown={(e) => this.handleClick(e, element)}
          onDrag={(e) => this.handleDrag(e, element)}
          onDragOver={(e) => this.handleDragOver(e)}
          onDrop={(e) => this.handleDrop(e, element)}
        >
          <span className="date">{`${element.date.month}, ${element.date.year}`}</span>
          <span className="desc">{element.description}</span>
        </li>
      );
    });

    return (
      <div className="biography">
        <ul className="biographyTable">
          <li className="row">
            <span className="date">Date</span>
            <span className="desc">Description</span>
          </li>
          {biographyList}
        </ul>
        <button 
          type="button"
          onClick={() => {
            console.table(standartSort(biography));
            console.table(biography);
          }}
        >
          sort array with standart sort function
        </button>
        <button
          type="button" 
          onClick={() => {
            console.table(myBubbleSort(biography));
            console.table(biography);
          }}
        >
          sort array with custom bubble sort
        </button>
        <button
          type="button" 
          onClick={() => {
            console.table(addElement(biography));
            console.table(biography);
          }}
        >
          add new element to array
        </button>
        <button 
          type="button"
          onClick={() => {
            console.table(removeLastElement(biography));
            console.table(biography);
          }}
        >
          remove last element from array
        </button>
        <button 
          type="button"
          onClick={addElementToObject}
        >
          add new element to objects in array
        </button>
        <button 
          type="button"
          onClick={deleteElementFromObject}
        >
          delete new element from objects in array
        </button>
        <button 
          type="button"
          onClick={getElementByKey}
        >
          get element from object by key
        </button>
        <button 
          type="button"
          onClick={usingSpreadOperator}
        >
          create copy of first element in array using spread operator
        </button>
      </div>
    );
  }
}

export default Biography;