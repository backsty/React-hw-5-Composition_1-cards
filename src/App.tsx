import { Card } from '@components/Card';
import { Layout } from '@components/Layout';

import image1 from '@assets/img/image-1.jpg';
import image2 from '@assets/img/image-2.jpg';
import image3 from '@assets/img/image-3.jpeg';

function App() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card
            title="Природа"
            text="Красивый пейзаж природы с горами и озером"
            imageUrl={image1}
          />
        </div>

        <div className="col-md-4 mb-4">
          <Card title="Технологии" imageUrl={image2}>
            <p className="card-text">Современные технологии меняют мир вокруг нас</p>
            <a href="#" className="btn btn-primary">
              Подробнее
            </a>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
          <Card imageUrl={image3}>
            <h5 className="card-title">Архитектура</h5>
            <p className="card-text">Удивительные строения современности</p>
            <button className="btn btn-success">Исследовать</button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default App;
