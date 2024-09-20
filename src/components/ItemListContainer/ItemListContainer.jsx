import { GridItem } from "@chakra-ui/react"

const ItemListContainer = ({greeting}) => {
return(
    <div style={{fontSize:"2rem", fontWeight: "bold", height:"90vh", display:"flex",alignItems:"center", justifyContent:"center"}}>{greeting}</div>
)
}
export default ItemListContainer