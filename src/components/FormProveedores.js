import Button from '@/components/Button'
 
function Form({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus ></input>
                <label htmlFor='telefono'>Teléfono</label>
                <input type='number' id='telefono' name='telefono'
                    placeholder='Teléfono'
                    defaultValue={proveedor?.telefono} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default Form