// RFC Command
export default function ProductCard({ title, image, price, desc }) {
   return (
      <div className='product-card'>
         <img
            src={image}
            alt=''
         />
         <div className='container'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <h2>{price}</h2>
         </div>
      </div>
   )
}

// RFCE
// function ProductCard() {
//    return <div>ProductCard</div>
// }

// export default ProductCard

// rafc
// export const ProductCard = () => {
//   return (
//     <div>ProductCard</div>
//   )
// }

// rafce
// const ProductCard = () => {
//   return (
//     <div>ProductCard</div>
//   )
// }

// export default ProductCard
