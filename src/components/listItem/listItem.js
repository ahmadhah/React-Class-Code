import './style.css';

const ListItem = ({city}) => {
    // const {city} = props;
    // const {data:city} = props;
    return (
        <div className="list">
            <li>{city}</li>
        </div>
    )
}

export default ListItem
