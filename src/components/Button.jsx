function Button({ title, bgColor, color }) {
   return (
      <div
         className='button-element'
         style={{ backgroundColor: bgColor, color: color }}>
         {title}
      </div>
   )
}

export default Button
