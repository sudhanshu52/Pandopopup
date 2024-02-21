import './App.css'
import MyComponent from './MyComponent'
import  {MyContext}from './MyContext'

function App() {
  
  return (
    <>
   
       {/* <Increment/> */}
       <MyContext>
        <MyComponent/>
       </MyContext>
       
      
    </>
  )
}

export default App
