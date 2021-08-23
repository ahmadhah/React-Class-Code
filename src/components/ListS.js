import ListItem from './listItem/listItem'

const List = () => {

    const list = ['Lahore', 'Islamabad', 'Fsd', 'Sheikhupura']
    const filteredList = list.filter((city) => city.length > 5)
    // console.log('props :', p);

    return (
        <div style={{backgroundColor: 'grey', padding: '10px', margin: '5px'}}>
            {filteredList.map((city, i) =><ListItem city={city} key={i}/>)}
        </div>
    )
}

export default List;