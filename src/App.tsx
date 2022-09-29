import Container from 'components/Container'
import {
  useAddProductMutation,
  useDelProductMutation,
  useGetGoodsQuery
} from 'store'

import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState('')
  const {isLoading, data = []} = useGetGoodsQuery(count)
  const [addProduct, {error: errorAdd}] = useAddProductMutation()
  const [delProduct] = useDelProductMutation()
  const [input, setInput] = useState('')



  const handleAddProduct = async () => {
    if (input) {
      await addProduct({name: input})
    }
  }
  const handlerDelProduct = async (id: number) => {
    await delProduct(id)
  }

  if (isLoading) {
    return <div>Загрузка...</div>
  }
  if (errorAdd) {
    return <div>123</div>
  }

  return (
    <Container>
      <div>
        <div>
          <input type="text" onChange={e => setInput(e.target.value)} />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <select value={count} onChange={e => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div>
          {data.map(el => (
            <div key={el.id}>
              <div>{el.name}</div>
              <button onClick={() => handlerDelProduct(el.id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default App
