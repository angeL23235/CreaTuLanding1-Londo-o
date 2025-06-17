import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <Item key={item.id} item={item} /> // <-- corrección prop
      ))}
    </div>
  );
}

export default ItemList;
