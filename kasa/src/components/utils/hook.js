import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
                }
                const contentType = response.headers.get("content-type");
                console.log('Content-Type:', contentType); // Déclaration de débogage
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Le contenu reçu n'est pas au format JSON");
                }
                const data = await response.json();
                console.log('Données reçues:', data); // Déclaration de débogage
                setData(data);
            } catch (err) {
                console.error('Erreur:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { isLoading, data, error };
}
