interface Cards {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

const card = (props: Cards) => {
  return (
    <div className="relative mx-2 w-44 h-60 flex flex-col justify-end cursor-pointer rounded-xl overflow-hidden mb-2">
      <img className="w-full h-full bg-cover duration-300 transform hover:-translate-y-5" src={props.bannerUrl} alt={props.title} />

      <div className="absolute w-full text-white p-4 bg-gameGradient">
        {' '}
        <p className="font-bold"> {props.title} </p>
        <span className="font-extralight text-xs"> {props.adsCount} Anuncio(s) </span>{' '}
      </div>
    </div>
  );
};

export default card;
