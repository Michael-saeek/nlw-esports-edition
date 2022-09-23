import Carrousel from './Carrousel';
import CreateAdModal from './CreateAdModal';
import * as Dialog from '@radix-ui/react-dialog';

const CompPost = () => {
  return (
    <section className="relative w-5/6 mx-auto">
      <h1 className="text-6xl font-bold my-8 text-center text-white">
        {' '}
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.{' '}
      </h1>

      <Carrousel />

      <Dialog.Root>
        <CreateAdModal />
      </Dialog.Root>
    </section>
  );
};

export default CompPost;
