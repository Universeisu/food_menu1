import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './component/Category'
import Menu from './component/Menu'
import data from './data.js'

function App() {
  const [menuItem, setMenuItem] = useState(data)
  const allcategories = [
    "All",
    ... new Set(
      data.map((item) => {
      return item.category;
  })
  ),
  ];
  const filterItems = (category) =>{
    if(category === "All"){
      setMenuItems(data)
    }else{
      const newItem = data.filter(
        (item) => item.category === category
      );
      setMenuItems(newItem)
    }
  }

  return (
    <div>
      <h2>workshop 2: Food Menu</h2>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
            <Category allcategories={allcategories}
            filterItems={filterItems}/>
            <Menu items = {menuItem}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App