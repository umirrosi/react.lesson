import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';

function Contact() {
  let data = "Contact Content";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Contact;