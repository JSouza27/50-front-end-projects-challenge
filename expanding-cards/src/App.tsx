import { useEffect, useState } from 'react'

import Card from './components/Card'
import Layout from './components/Layout'
import data from './utils/data'

function App() {
  const [selected, setSelected] = useState<string>()

  useEffect(() => {
    data.length && setSelected(data[0].id)
  }, [])

  return (
    <Layout>
      {data.map(({ id, image, title }) => (
        <Card
          key={`${title}-${id}`}
          title={title}
          image={image}
          handleChange={() => setSelected(id)}
          isActive={id === selected}
        />
      ))}
    </Layout>
  )
}

export default App
