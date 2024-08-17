export default function SearchableList({items}){
    return (
        <div className="searchable-list">
            <input type="search" placeholder='Search' />
            {items.map( (item,index) => (
                <li key={index}>{item.toString()}</li>
            ))}

        </div>
    );
}