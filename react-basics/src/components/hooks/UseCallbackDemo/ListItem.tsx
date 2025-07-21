import { memo } from "react";
import "./ListItem.scss"

type ItemProps = {
  item: string;
  onRemove: (item: string) => void;
};

const ListItem = memo(({ item, onRemove }: ItemProps) => {
  console.log(`ListItem rendered: ${item}`);
  return (
    <div className="list-item">
      <div className="item">{item}</div>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
});

export default ListItem;
