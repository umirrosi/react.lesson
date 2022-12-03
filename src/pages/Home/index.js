import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './style.css';

function Home() {
  let data = "Home Content";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;