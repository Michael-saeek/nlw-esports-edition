import * as Dialog from '@radix-ui/react-dialog';

const Boxpublicar = () => {
  return (
    <div className="flex flex-wrap justify-between w-full rounded-lg bg-color-box text-white relative overflow-hidden my-8">
      <div className="bg-nlw-gradient w-full h-1 relative top-0"> </div>

      <div className="px-6 py-6">
        <span className="text-lg font-bold">Não encontrou seu duo?</span>
        <p className="font-extralight text-sm text-gray-300">
          {' '}
          Publique um anuncio para encontrar players !
        </p>
      </div>

      <div className="flex items-center px-6">
        <Dialog.Trigger>
          <button className="flex  justify-center items-center px-3 py-4 bg-violet-500 hover:bg-violet-700 rounded-lg duration-300 transition-all">
            Publicar anuncio
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default Boxpublicar;
