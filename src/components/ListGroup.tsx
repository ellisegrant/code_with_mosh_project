function ListGroup() {
  const items = ["NewYork", "Accra", "Tema", "Sowutuom"];
  let selectedIndex = 0;

  //event handler

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          ></li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
