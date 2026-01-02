import { useState } from 'react';
import { TaskCard } from './components/TaskCard';
import { Header } from './components/Header';

interface Task {
  id: number;
  title: string;
  time: string;
  status: 'a fazer' | 'fazendo' | 'feito';
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Teste a fazer", time: "07:00", status: "a fazer" },
    { id: 2, title: "Teste fazendo", time: "20:00", status: "fazendo" },
    {id: 3, title: "Teste feito", time: "22:00", status: "feito"},
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
    if (newTaskTitle.trim() === "") return;


    const newTask: Task = {
      id: Math.random(),
      title: newTaskTitle,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: 'a fazer'
    };

    setTasks([...tasks, newTask]);

    setNewTaskTitle("");
  }
  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-10">
      <Header />
      
      <div className="mb-10 flex gap-2 max-w-md mx-auto">
        <input 
          type="text" 
          className="bg-slate-800 text-white p-3 rounded w-full border border-slate-700 outline-none focus:border-blue-500"
          placeholder="Nova tarefa..."
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAddTask(); }}
        />
        <button 
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-6 rounded hover:bg-blue-500 font-bold"
        >
          +
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-slate-400 font-bold mb-4 uppercase text-sm tracking-wider">A Fazer</h2>
          <div className="space-y-3">
            {tasks
              .filter(task => task.status === 'a fazer')
              .map((task) => (
                <TaskCard 
                  key={task.id} 
                  title={task.title} 
                  time={task.time} 
                  status={task.status} 
                />
            ))}
            {tasks.filter(t => t.status === 'a fazer').length === 0 && (
              <p className="text-slate-600 text-sm text-center py-4 border border-dashed border-slate-800 rounded">Vazio por enquanto...</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-yellow-500 font-bold mb-4 uppercase text-sm tracking-wider">Fazendo</h2>
          <div className="space-y-3">
            {tasks
              .filter(task => task.status === 'fazendo')
              .map((task) => (
                <TaskCard key={task.id} title={task.title} time={task.time} status={task.status} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-green-500 font-bold mb-4 uppercase text-sm tracking-wider">Feito</h2>
          <div className="space-y-3">
            {tasks
              .filter(task => task.status === 'feito')
              .map((task) => (
                <TaskCard key={task.id} title={task.title} time={task.time} status={task.status} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App