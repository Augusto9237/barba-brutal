import Link from 'next/link'

export default function TituloSlogan() {
    return (
        <div className="relative h-screen bg-[url('/banners/principal.webp')] overflow-hidden">
            <div
                className="
                    flex flex-1 flex-col items-center w-full h-full
                    absolute inset-0
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
            >
               
                <div className="container flex-1 flex flex-col justify-center items-center gap-5">
                    <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider">
                            Transformações
                        </span>
                        <span className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black pb-2">
                            Lendárias
                        </span>
                    </h1>
                    <p className="w-96 text-center text-zinc-400 text-base sm:text-lg font-extralight">
                        🤘 Seu estilo é o nosso rock! 🤘
                    </p>
                    <Link
                        href="/agendamento"
                        className="button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    >
                        Agendar Agora
                    </Link>
                </div>
            </div>
        </div>
    )
}
