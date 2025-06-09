import Button from './components/Button'
import ProductCard from './components/ProductCard'

function App() {
   return (
      <div>
         <h1>React</h1>
         {/* <Button
            title='Save'
            bgColor='#2e3cff'
            color='#f9f9f9'
         />
         <Button
            title='Send'
            bgColor='#4d7c0f'
            color='#f9f9f9'
         />
         <Button
            title='Delete'
            bgColor='#be123c'
            color='#f9f9f9'
         />
         <Button
            title='Edit'
            bgColor='#f59e0b'
            color='#f9f9f9'
         />
         <Button
            title='Approve'
            bgColor='#0d9488'
            color='#f9f9f9'
         /> */}

         <div className='product-container'>
            <ProductCard
               title='Coffee Mug'
               desc='Lorem ipsum dolor sit amet '
               price='99.9'
               image='https://images.unsplash.com/photo-1527784281695-866fa715d9d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <ProductCard
               title='Mocka Latte'
               desc='Lorem ipsum dolor sit amet '
               price='18.99'
               image='https://images.unsplash.com/photo-1499961524705-bfd103e65a6d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <ProductCard
               title='Large Mochachinno'
               desc='Lorem ipsum dolor sit amet '
               price='24.99'
               image='https://images.unsplash.com/photo-1461914756888-80f9821f5d17?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
         </div>
      </div>
   )
}

export default App
