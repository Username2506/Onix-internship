import "./Biography.css"

const biography = [
    {
        'date': {
            'year': 2020,
            'month': 'may'
        },
        'description': "some information about 2020 year"
    },
    {
        'date': {
            'year': 2010,
            'month': 'october'
        },
        'description': "some information about 2010 year"
    },
    {
        'date': {
            'year': 2000,
            'month': 'june'
        },
        'description': "some information about 2000 year"
    },
];

function Biography() {
    function standartSort (array) {
        return [...array].sort( (a, b) => a.date.year - b.date.year );
    }

    function myBubbleSort (array) {
        const sortedArray = [...biography];
        for (let i = 0; i < sortedArray.length - 1; i++) {
            for (let j = 0; j < sortedArray.length - 1 - i; j++) {
                if (sortedArray[j].date.year > sortedArray[j + 1].date.year) {
                    let temp = sortedArray[j + 1];
                    sortedArray[j + 1] = sortedArray[j];
                    sortedArray[j] = temp;
                }
            }
        }

        return(sortedArray);
    }

    function addElement (array) {
        const newArray = [...array];
        newArray.push({
            'date': {
                'year': 2021,
                'month': "february"
            },
            'description': "random description"
        });

        return newArray;
    }

    function removeLastElement(array) {
        const newArray = [...array];
        newArray.pop();
        
        return newArray;
    }

    function addElementToObject() {
        biography.forEach( (object) => {
            object.newElement = "some new data";
        })

        console.table(biography);
    }

    function deleteElementFromObject() {
        biography.forEach( (object) => {
            delete object.newElement;
        })

        console.table(biography);
    }
    
    function getElementByKey() {
        let key = prompt("Enter key to find element in object");
        biography.forEach( (object) => {
            console.log( key + ": " + object[key] );
        })
    }

    function usingSpreadOperator() {
        let newRecord = {...biography[0]};

        console.log(newRecord);
    }

    return (
        <div className = "biography">
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {biography.map( (element) => [
                        <tr key = {element.date.month + "-" + element.date.year}>
                            <td>{element.date.month + ", " + element.date.year}</td>
                            <td>{element.description}</td>
                        </tr>
                    ])}
                </tbody>
            </table>
            <button onClick = {() => { 
                    console.table( standartSort(biography) );
                    console.table(biography);
                }}>
                sort array with standart sort function
            </button>
            <button onClick = {() => { 
                    console.table( myBubbleSort(biography) );
                    console.table(biography);
                }}>
                sort array with custom bubble sort
            </button>
            <button onClick = {() => { 
                    console.table( addElement(biography) );
                    console.table(biography);
                }}>
                add new element to array
            </button>
            <button onClick = {() => { 
                    console.table( removeLastElement(biography) );
                    console.table(biography);
                }}>
                remove last element from array
            </button>
            <button onClick = {addElementToObject}>
                add new element to objects in array
            </button>
            <button onClick = {deleteElementFromObject}>
                delete new element from objects in array
            </button>
            <button onClick = {getElementByKey}>
                get element from object by key
            </button>
            <button onClick = {usingSpreadOperator}>
                create copy of first element in array using spread operator
            </button>
        </div>
    )
}

export default Biography;