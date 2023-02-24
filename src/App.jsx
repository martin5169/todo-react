import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
export function App() {
   
  return (
    <main className="bg-zinc-900" >
      <div className="container min-h-screen" >
      <TaskForm/>
      <TaskList/>
      <Footer/>
      </div>
      
    </main>
  );
}
