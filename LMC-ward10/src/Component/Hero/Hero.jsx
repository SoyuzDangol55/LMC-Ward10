import { useEffect, useState } from "react";
import { getSliders } from "../../services/api";

function Hero() {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSliders() {
      try {
        const data = await getSliders();
        
        setSliders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadSliders();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <h1>Hero Section</h1>

      {sliders.map((slider) => (
        <div key={slider.id}>
          <h2>{slider.title}</h2>
          <p>{slider.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Hero;