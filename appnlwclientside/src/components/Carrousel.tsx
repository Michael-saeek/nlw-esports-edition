import { useState, useEffect } from 'react';
import Card from './Card';
//import { useFetchData } from '../hooks/useFetchData';

interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

const Carrousel = () => {
  const [gamesData, setgamesdata] = useState<Games[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.6:3000/games').then((res) =>
      res.json().then((dataFetch) => {
        setgamesdata(dataFetch);
      })
    );
  }, []);

  console.log(gamesData);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {gamesData.map((game) => {
        return (
          <Card
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        );
      })}
    </div>
  );
};

export default Carrousel;
