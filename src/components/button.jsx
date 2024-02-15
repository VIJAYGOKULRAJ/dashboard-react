export  const Button = ({name , color , handleClick}) => {
return (
    <div>
        <button className={color} onClick={handleClick}>{name}</button>
    </div>
)
}