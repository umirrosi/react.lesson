import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>This is home content</h1>
      <p>{prop.data}</p>
    </section>
  );
}

export default Content;