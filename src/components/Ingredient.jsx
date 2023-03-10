import { FaTimes } from 'react-icons/fa'

const ingredient = ({ data, onDelete, onUpdate }) => {
    return (
        <>
         {data.map((ing) => (
            <div key={ing.id} id='ingredient'>
                <input key={ing.id + "ingredient"} type="text" id='name' placeholder="Zutat" onChange={(e) => onUpdate(ing.id, e.target.value, 'ingredient')} />
                <input key={ing.id + "amount"} type="text" id='amount' placeholder="Menge" onChange={(e) => onUpdate(ing.id, e.target.value, 'amount')}/>
                <div key={ing.id} id='delte'> <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(ing.id)} /> </div>
            </div>
         ))}
        </>
    )
}

export default ingredient