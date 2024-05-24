import './App.css';
import { useFetch } from "./components/utils/hook.js";
import Router from "./components/rooter/rooter.jsx";

const App = () => {
    const fetchData = useFetch('/app.json');

    if (fetchData.isLoading) {
        return <div>Chargement...</div>;
    }

    if (fetchData.error) {
        return <div>Erreur lors du chargement des données</div>;
    }

    return <Router fetchData={fetchData} />; // Passez fetchData complet
};

export default App;
