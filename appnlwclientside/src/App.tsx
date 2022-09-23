import Logo from './assets/Logo.png';
import CompPost from './components/CompPost';

function App() {
  return (
    <>
      <section className="max-w-[1440px] mt-20 flex flex-col justify-center items-center relative overflow-x-hidden mx-auto">
        <div className="w-72 h-40">
          <img className="" src={Logo} alt="" />
        </div>

        <CompPost />
      </section>
    </>
  );
}

export default App;
