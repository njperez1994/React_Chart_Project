import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import LinesChart from "./components/LinesChart";
import BarChart from "./components/BarChart";  // Importing BarChart
import PieChart from "./components/PieChart";  // Importing PieChart

function App() {
    return (
        <main className="bg-zinc-900 h-max">
            <div className="container mx-auto p-10">
                <TaskForm />
                <TaskList />
                <div className="mt-4">
                    <h1 className="bg-slate-800 text-center text-white">Charts Data</h1>
                    <div>
                        <p className="m-2 text-white"><b>Example #1: </b>Basic Line Chart</p>
                        <div className="bg-white mx-auto px-2 border" style={{width:"450px", height:"230px"}}>
                            <LinesChart />
                        </div>
                    </div>
                    <hr className="mt-3 mb-2"/>
                    <div>
                        <p className=" text-white m-2"><b>Example #2: </b>Bar chart</p>
                        <div className="bg-white mx-auto px-2 border" style={{width:"450px", height:"225px"}}>
                            <BarChart />  {/* Adding BarChart */}
                        </div>
                    </div>
                    <hr className="mt-3 mb-2"/>
                    <div>
                        <p className="text-white m-2"><b>Example #3: </b>Pie Chart</p>
                        <div className="bg-white mx-auto border" style={{width:"450px", height:"250px"}}>
                            <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                                <PieChart />  {/* Adding PieChart */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
