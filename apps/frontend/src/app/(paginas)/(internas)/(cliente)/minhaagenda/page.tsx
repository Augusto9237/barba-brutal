'use client'
import { IconCalendarCancel } from '@tabler/icons-react'
import useProfissionalAgenda from '@/data/hooks/useProfissionalAgenda'
import DiaInput from '@/components/agendamento/DiaInput'
import Cabecalho from '@/components/shared/Cabecalho'
import AgendaCustomerItem from '@/components/agendamento/AgendaCustomerItem'

export default function PaginaAgenda() {
    const { data, agendamentos, agendamento : meusagendamentos, alterarData, excluirAgendamento } = useProfissionalAgenda()

    return (
        <div className="flex flex-col bg-zinc-900 flex-1 sm:min-h-[72.4vh]">
            <Cabecalho titulo="Minha Agenda" descricao="Veja e gerencie seus agendamentos." />
            <div className="container flex flex-col gap-10 py-16 max-sm:py-8 max-sm:min-h-[230px]">
                {meusagendamentos.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {meusagendamentos.map((agendamento) => (
                            <AgendaCustomerItem
                                key={agendamento.id}
                                agendamento={agendamento}
                                excluir={excluirAgendamento}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <IconCalendarCancel size={150} stroke={0.5} className="text-zinc-400" />
                        <span className="text-xl text-zinc-500 font-extralight w-64 text-center">
                            Nenhum agendamento para esta data.
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
