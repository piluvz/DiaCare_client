import React from 'react';
import '../style/MainPage.css';
import {Link} from 'react-router-dom';

const MainPage = () => {
  return (
    <>
    
    <main className="main">
      <div className="main-container">
        <div className="text-content">
          <h1>Your Partner in Diabetes Management</h1>
          <p>
            DiaCare — инновационное решение для людей с диабетом и тех, кто стремится предотвратить развитие этого заболевания. Мы предлагаем инструменты для мониторинга уровня глюкозы в крови и подбора диеты.
          </p>
          <Link to="/nutri-plan"><button className="btn get-started">Get Started</button></Link>
          
          <p>
            Введите свои данные и получите персонализированный рацион
          </p>
        </div>
        <div className="image-content">
          <img src="image_mainPage.png" alt="Diabetes Management" />
        </div>
      </div>
    </main>

    <div className='transition-div'>
      <img src="arrow.png" alt="arrow" />
    </div>

    <section className="lower-block">
      <div className="card-container">
        <div className="card">
          <div className='card-title'>
            <h3>Персонализированная диета и заказ продуктов</h3>
            <img src="Ellipse purple.png" alt="" />
          </div>
          <p>Составьте индивидуальный план питания с учетом ваших потребностей и заказывайте продукты онлайн. Получайте рекомендации по здоровому питанию и оптимальным порциям, не выходя из дома.</p>
          <Link to="/nutri-plan"><button className="btn card-btn purple">ПЕРЕЙТИ</button></Link>
        </div>
        <div className="card">
          <div className='card-title'>
            <h3>Расширение Chrome для сайта arbuz.kz</h3>
            <img src="Ellipse green.png" alt="" />
          </div>
          <p>Расширение для Arbuz.kz помогает людям с диабетом сделать правильный выбор продуктов и рассчитать допустимые порции. Наведите на продукт, чтобы узнать, можно ли его употреблять и в каком количестве.</p>
          <Link to="/"><button className="btn card-btn green">ПЕРЕЙТИ</button></Link>
        </div>
    <div className="card">
      <div className='card-title'>
        <h3>Сканер-помощник для еды</h3>
        <img src="Ellipse purple.png" alt="" />
      </div>
      <p>Сфотографируйте продукт или блюдо, и наш ИИ подскажет, можно ли его употреблять при диабете. Ведите учет съеденного в течение дня, отслеживайте уровень сахара, а также получите прогнозы для вашего здоровья.</p>
      <Link to="/nutri-plan"><button className="btn card-btn purple">ПЕРЕЙТИ</button></Link>
    </div>
  </div>
</section>


    </>
  );
};

export default MainPage;
