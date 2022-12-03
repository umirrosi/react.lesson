import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Profile() {
  let data = "this is company profiles";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Profile;