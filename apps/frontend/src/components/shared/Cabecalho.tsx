import Image from 'next/image'
import MenuSuperior from '@/components/shared/MenuSuperior'

export interface CabecalhoProps {
    titulo: string
    descricao: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className="relative h-[180px] bg-[url('/banners/principal.webp')] overflow-hidden">
            <div
                className="
                    flex flex-col items-center
                    absolute top-0 left-0 right-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
            >
                <div className="container flex-1 flex flex-col justify-center items-center mt-24">
                    <h1 className="text-3xl max-sm:text-base font-black text-white/70">{props.titulo}</h1>
                    <p className="text-xs font-light text-white/60">{props.descricao}</p>
                </div>
            </div>
        </div>
    )
}
