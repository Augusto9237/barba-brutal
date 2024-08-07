'use client'
import Link from 'next/link'
import Logo from './Logo'
import MenuUsuario from './MenuUsuario'
import useUsuario from '@/data/hooks/useUsuario'

export default function MenuSuperior() {
    const { usuario } = useUsuario()

    return (
        <header className="flex justify-center items-center h-24 bg-black/60 absolute top-0 left-0 right-0 z-10 w-full">
            <nav className="flex items-center justify-between container">
                <Logo />
                <div className='z-50'>
                    {usuario ? (
                        <MenuUsuario usuario={usuario} />
                    ) : (
                        <Link href="/entrar">Entrar</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
