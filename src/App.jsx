import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Features, Home, Layout } from "./pages";

const App = () => {
    const characteristic = useSelector((state) => state.global.characteristic);
    console.log("🚀", characteristic);

    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                </Route>
            </Routes>
        </div>
    )
};

export default App;
