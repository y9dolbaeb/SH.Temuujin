import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const result1 = await response1.json();
                
                const response2 = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
                const result2 = await response2.json();
                
                const response3 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
                const result3 = await response3.json();
                
                const response4 = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const result4 = await response4.json();
                
                setData({ 
                    clothes: result1.clothes, 
                    touristAttractions: result2.touristAttractions, 
                    ethnicGroups: result3.getEthnicGroups, 
                    instruments: result4.instruments
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-300 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6 text-green-600">Mongolian Culture</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {data?.clothes?.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 bg-green-400 hover:shadow-xl">
                        {item.images && (
                            <img src={item.images} alt={item.name} className="w-full h-48 object-cover" />
                        )}
                        <h2 className="text-xl font-semibold text-green-700">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        {item.materials && (
                            <p className="text-green-700">
                                <strong className="text-green-400">Materials:</strong> {item.materials}
                            </p>
                        )}
                        {item.timePeriod && (
                            <p className="text-green-700">
                                <strong className="text-green-400">Time Period:</strong> {item.timePeriod}
                            </p>
                        )}
                    </div>
                ))}
                {data?.touristAttractions?.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 bg-blue-400 hover:shadow-xl">
                        {item.images && (
                            <img 
                                src={item.images} 
                                alt={item.name} 
                                className="w-full h-48 object-cover" 
                            />
                        )}
                        <h2 className="text-xl font-semibold text-blue-700">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        {item.address && (
                            <p className="text-blue-700">
                                <strong className="text-blue-400">Address:</strong> {`${item.address.street}, ${item.address.city}, ${item.address.country}, ${item.address.postalCode}`}
                            </p>
                        )}
                    </div>
                ))}
                {data?.ethnicGroups?.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 bg-yellow-400 hover:shadow-xl">
                        {item.images && item.images.length > 0 && (
                            <img 
                                src={item.images[0]} 
                                alt={item.name} 
                                className="w-full h-48 object-cover" 
                            />
                        )}
                        <h2 className="text-xl font-semibold text-yellow-700">{item.name}</h2>
                        <p className="text-yellow-700">
                            <strong className="text-white">Linguistic:</strong> {item.linguistic}
                        </p>
                        <p className="text-yellow-700">
                            <strong className="text-white">Population:</strong> {item.population}
                        </p>
                    </div>
                ))}
                {data?.instruments?.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 bg-white hover:shadow-xl">
                        {item.images && (
                            <img 
                                src={item.images} 
                                alt={item.name} 
                                className="w-full h-48 object-cover" 
                            />
                        )}
                        <h2 className="text-xl font-semibold text-red-700">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}