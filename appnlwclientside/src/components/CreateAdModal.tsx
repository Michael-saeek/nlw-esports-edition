import Boxpublicar from './Boxpublicar';
import * as Dialog from '@radix-ui/react-dialog';
import InputWithTitle from './InputWithTitle';

const CreateAdModal = () => {
  return (
    <>
      <Boxpublicar />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="w-[480px] fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <Dialog.Title className="text-3xl font-bold mb-5">
            {' '}
            Publique um anúncio{' '}
          </Dialog.Title>

          <form action="">
            <InputWithTitle
              id={'game'}
              title={'Qual é o game?'}
              placeholder={'Seleccione o game que deseja jogar'}
              width={'w-full'}
              type="text"
            />
            <InputWithTitle
              id={'name'}
              title={'Seu nome (ou nickname)'}
              placeholder={'Como te chamam dentro do game?'}
              width={'w-full'}
              type="text"
            />

            <div className="flex ">
              <InputWithTitle
                id={'yearsPlaying'}
                title={'Joga há quantos anos?'}
                placeholder={'Tudo bem ser ZERO'}
                width={'w-2/4'}
                type="number"
              />
              <InputWithTitle
                id={'discord'}
                title={'Qual é seu Discord?'}
                placeholder={'Usuario#0000'}
                width={'w-2/4'}
                type="text"
              />
            </div>

            <div className="flex ">
              <div className="`flex">
                <label className="text-sm mb-2" htmlFor="weekDays">
                  Quando costuma jogar?{' '}
                </label>
                <div className="flex flex-row my-2">
                  <button className="px-3 py-3 my-2 rounded-lg bg-slate-900 duration-300 hover:bg-[#8B5CF6] mr-1">
                    {' '}
                    S{' '}
                  </button>
                  <button className="px-3 py-3 my-2 rounded-lg bg-slate-900 duration-300 hover:bg-[#8B5CF6] mr-1">
                    {' '}
                    T{' '}
                  </button>
                  <button className="px-3 py-3 my-2 rounded-lg bg-slate-900 duration-300 hover:bg-[#8B5CF6] mr-1">
                    {' '}
                    Q{' '}
                  </button>
                  <button className="px-3 py-3 my-2 rounded-lg bg-slate-900 duration-300 hover:bg-[#8B5CF6] mr-1">
                    {' '}
                    Q{' '}
                  </button>
                  <button className="px-3 py-3 my-2 rounded-lg bg-slate-900 duration-300 hover:bg-[#8B5CF6] mr-1">
                    {' '}
                    S{' '}
                  </button>
                </div>
              </div>

              <div className="">
                <label className="text-sm mb-1" htmlFor="hourStart">
                  Qual horário do dia?{' '}
                </label>

                <div className="flex flex-row">
                  <InputWithTitle
                    id={'hourStart'}
                    title={''}
                    placeholder={'De'}
                    width={'w-[2/4]'}
                    type="time"
                  />

                  <InputWithTitle
                    id={'hourEnd'}
                    title={''}
                    placeholder={'Até'}
                    width={'w-[2/4]'}
                    type="time"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <input type="checkbox" className="" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className="flex justify-end my-2">
              <div>
                <button className="cursor-pointer bg-zinc-500 text-white py-4 px-8 rounded-lg duration-300 hover:bg-zinc-300 mr-4">
                  {' '}
                  Cancelar{' '}
                </button>

                <button className="cursor-pointer bg-[#8B5CF6] text-white py-4 px-8 rounded-lg duration-300 hover:bg-[#9473e2]">
                  {' '}
                  Encontrar duo{' '}
                </button>
              </div>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};

export default CreateAdModal;
