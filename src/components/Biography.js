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
    function standartSort () {
        console.table( biography.sort( (a, b) => a.date.year - b.date.year ) );
    }

    function myBubbleSort () {
        const sortedArray = {...biography};
        for (let i = 0; i < biography.length - 1; i++) {
            for (let j = 0; j < biography.length - 1 - i; j++) {
                if (sortedArray[j].date.year > sortedArray[j + 1].date.year) {
                    let temp = sortedArray[j + 1];
                    sortedArray[j + 1] = sortedArray[j];
                    sortedArray[j] = temp;
                }
            }
        }

        console.table(sortedArray);
    }

    function addElement () {
        biography.push({
            'date': {
                'year': 2021,
                'month': "february"
            },
            'description': "random description"
        });

        console.table(biography);
    }

    function removeLastElement() {
        biography.pop();

        console.table(biography);
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
            <button onClick = {standartSort}>
                sort array with standart sort function
                </button>
            <button onClick = {myBubbleSort}>
                sort array with custom bubble sort
            </button>
            <button onClick = {addElement}>
                add new element
            </button>
            <button onClick = {removeLastElement}>
                remove last element
            </button>
        </div>
    )
}

export default Biography;