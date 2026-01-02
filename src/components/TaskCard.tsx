interface TaskCardProps {
    title: string;
    time: string;
    // Atualizamos o contrato para bater com o App.tsx
    status: 'a fazer' | 'fazendo' | 'feito';
  }
  
  export function TaskCard({ title, time, status }: TaskCardProps) {
    const statusColors = {
      'a fazer': 'border-slate-500 bg-slate-800 opacity-70',
      'fazendo': 'border-yellow-500 bg-slate-800',
      'feito': 'border-green-500 bg-slate-900 opacity-50 line-through text-slate-500'
    };
  
    return (
      <div className={`p-4 rounded-lg shadow-lg border-l-4 flex justify-between items-center mb-3 ${statusColors[status]}`}>
        <div>
          <h3 className="font-semibold text-lg text-white">
            {title}
          </h3>
          <span className="text-sm text-slate-400 font-mono">
            {time}
          </span>
        </div>
        
        {}
        <div className={`w-3 h-3 rounded-full ${status === 'fazendo' ? 'bg-yellow-500 animate-pulse' : 'bg-slate-600'}`}></div>
      </div>
    )
  }