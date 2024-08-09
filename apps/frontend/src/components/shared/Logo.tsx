import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center h-14">
            <Image src="/logo.png" alt="Logo" width={65} height={65} className="hidden sm:block" />
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="block sm:hidden" />
            <div className="flex flex-col justify-center h-full">
                <span className="max-sm:text-sm sm:text-base font-extralight leading-6 tracking-widest text-gradient">
                    Barber
                </span>
                <span className="text-base sm:text-[24px] font-bold leading-6 pl-px text-gradient">
                    Legends
                </span>
            </div>
        </Link>
    )
}
