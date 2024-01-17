import Link from 'next/link'
import Proveedores from '@/components/Proveedores'
import { getProveedores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedores = await getProveedores()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new"> Nuevo proveedor </Link>
            {
                proveedores.map((proveedor) => (
                    <Proveedores key={proveedor.id} proveedor={proveedor} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/edit', query: { id: proveedor.id } }}>
                            Editar proveedor
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/delete', query: { id: proveedor.id } }}>
                            Eliminar proveedor
                        </Link>
                    </Proveedores>
                ))
            }
        </div>
    )
}
