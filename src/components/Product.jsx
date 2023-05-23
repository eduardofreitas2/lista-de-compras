export function Product(props) {
  return (
    <div className="flex gap-2 bg-gray-200 my-1 p-3 rounded w-full">
      <b>{props.qtde}</b>
      <h2>{props.item}</h2>
    </div>
  );
}
