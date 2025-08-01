import { useEffect, useState } from "react"
import { hadleaddproduct } from "../Configuration/Configuration"

const AddProduct = () => {

  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")
  const [image, setimage] = useState(null)
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const responses= new FormData();
    responses.append('name',name);
    responses.append('price',price);
    responses.append('description',description);
    responses.append('image',image);
    hadleaddproduct(responses);
  }
  return (
    <>
      <section>
        <form onSubmit={handlesubmit}>
          <div>
            <div className="div-name">
              <label htmlFor="name">Name of Product</label>
              <input type="text"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="div-price">
              <label htmlFor="name">price of Product</label>
              <input type="number"
                name="price"
                value={price}
                onChange={(e) => setprice(e.target.value)} />
            </div>
            <div className="div-description">
              <label htmlFor="description">Name of Product</label>
              <input type="text"
                name="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div className="div-name">
              <label htmlFor="iamge">Add Image</label>
              <input type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setimage(e.target.files[0])} />
            </div>
    <button type="submit">submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddProduct
