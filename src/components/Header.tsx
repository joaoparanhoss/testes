import { useState, useEffect } from 'react';

const logo = '/src/assets/logo.png';
function Header() {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setData(new Date());
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const dataFormatada = data.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    const horaFormatada = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <header className="bg-slate-800 p-4 rounded-lg shadow-lg flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-white font-bold text-3xl">Routine Flow</h1>
            </div>
            <h1 className="text-white font-bold text-3xl">
                {dataFormatada} - {horaFormatada}
            </h1>
        </header>
    )
}

export { Header };