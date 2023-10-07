import { ChangeEvent, FormEvent, useState } from "react";
import API from "../../lib/api";
import { IProducts } from "../../interfaces/Product";

export default function UseProductCreate() {
  const [coba, setCoba] = useState("");
  const [form, setForm] = useState<IProducts>({
    productName: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleCreateProduct();
  }

  async function handleCreateProduct() {
    const token = localStorage.getItem("token");

    console.log(token);
    try {
      const response = await API.post("/product/create", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCoba("serah");
      console.log("Selling Product Success", response);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    coba,
    form,
    handleChange,
    handleSubmit,
    handleCreateProduct,
  };
}
