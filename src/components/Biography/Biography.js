import './css/Biography.css';
import React, { useEffect, useState } from 'react';

const Biography = () => {
  const [biography, setBiography] = useState([
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
    }
  ]);
  const [highlighting, setHighlighting] = useState(false);
  const [currentItem, setCurrentItem] = useState(undefined);

  useEffect(
    () => {
      document.addEventListener('keypress', (e) => {
        if (e.code === 'KeyR' && e.shiftKey === true) {
          setHighlighting((prev) => (!prev));
        }
      });
    },
    []
  );

  const standartSort = (array) => {
    setBiography([...array].sort((a, b) => a.date.year - b.date.year));
  };
  
  const myBubbleSort = (array) => {
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

    setBiography(sortedArray);
  };
  
  const addElement = () => {
    setBiography((prevBio) => ([
      ...prevBio,
      {
        date: {
          year: 2021,
          month: 'february'
        },
        description: 'random description',
        active: false
      }
    ]));
  };
  
  const removeLastElement = () => {
    setBiography((prevBio) => ([...prevBio].pop()));
  };
  
  const addElementToObject = (array) => {
    const modifiedBio = array.map((object) => ({
      ...object,
      newElement: 'some new data'
    }));
  
    console.table(modifiedBio);
  };
  
  const deleteElementFromObject = (array) => {
    const newBio = [...array];
    newBio.forEach((object) => {
      const obj = { ...object };
      delete obj.newElement;
    });
  
    console.table(newBio);
  };
  
  const getElementByKey = (array) => {
    const key = prompt('Enter key to find element in object');
    array.forEach((object) => {
      console.log(`${key}: ${object[key]}`);
    });
  };
  
  const usingSpreadOperator = (array) => {
    const newRecord = { ...array[0] };
  
    console.log(newRecord);
  };

  const handleClick = (e, item) => {
    const newBio = biography.map((element) => ({
      ...element,
      active: element === item
    }));
    
    setBiography(newBio);
  };

  const handleDrag = (e, item) => {
    e.preventDefault();
    setCurrentItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, item) => {
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

    setBiography(table);
  };

  const biographyList = biography.map((element) => (
    <li 
      className={element.active && highlighting ? 'row active' : 'row'}
      role="presentation"
      key={`${element.date.month}-${element.date.year}`}
      draggable
      onClick={(e) => handleClick(e, element)}
      onKeyDown={(e) => handleClick(e, element)}
      onDrag={(e) => handleDrag(e, element)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, element)}
    >
      <span className="date">{`${element.date.month}, ${element.date.year}`}</span>
      <span className="desc">{element.description}</span>
    </li>
  ));

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
        onClick={() => standartSort(biography)}
      >
        sort array with standart sort function
      </button>
      <button
        type="button" 
        onClick={() => myBubbleSort(biography)}
      >
        sort array with custom bubble sort
      </button>
      <button
        type="button" 
        onClick={() => addElement()}
      >
        add new element to array
      </button>
      <button 
        type="button"
        onClick={() => removeLastElement()}
      >
        remove last element from array
      </button>
      <button 
        type="button"
        onClick={() => addElementToObject(biography)}
      >
        add new element to objects in array
      </button>
      <button 
        type="button"
        onClick={() => deleteElementFromObject(biography)}
      >
        delete new element from objects in array
      </button>
      <button 
        type="button"
        onClick={() => getElementByKey(biography)}
      >
        get element from object by key
      </button>
      <button 
        type="button"
        onClick={() => usingSpreadOperator(biography)}
      >
        create copy of first element in array using spread operator
      </button>
    </div>
  );
};

export default Biography;
