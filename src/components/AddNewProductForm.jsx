import { useState } from "react";

export function AddNewProductForm({handleAddNewProduct}) {
  const [formData, setFormData] = useState({
    item: "",
    qtde: "",
  });

  const submit = (event) => {
    event.preventDefault();

    if(!formData.item || !formData.qtde) {
      return alert("Preencha todos os campos.")
    }

    handleAddNewProduct(formData)
  };

  return (
    <form className="flex gap-2 w-full justify-center" method="post" onSubmit={submit}>
        <input
          type="text"
          id="item"
          placeholder="Novo item"
          className="border-2 w-8/12 p-2 rounded"
          value={formData.item}
          onChange={(event) =>
            setFormData({ ...formData, item: event.target.value })
          }
        />
        <input
          type="number"
          id="qtde"
          placeholder="Qtde"
          className="border-2 w-2/12 p-2 rounded"
          value={formData.qtde}
          onChange={(event) =>
            setFormData({ ...formData, qtde: event.target.value })
          }
        />
        <button className="bg-lime-600 w-2/12 p-2 rounded text-white">Adicionar +</button>
    </form>
  );
}
