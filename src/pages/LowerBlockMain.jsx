import React from 'react';
import '../styles/lowerBlock.css'; // Adjust the path if necessary

const LowerBlock = () => {
  return (
    <section className="lower-block">
      <div className="card-container">
        <div className="card">
          <h3>Персонализированная диета и заказ продуктов</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur et eros et eleifend. Nunc lobortis dui sed sapien hendrerit lobortis. Mauris mollis enim ut purus hendrerit, et sodales nisi ornare. Ut eget mi ne nunc aliquam congue.</p>
          <button className="btn card-btn">ПЕРЕЙТИ</button>
        </div>
        <div className="card">
          <h3>Расширение Chrome для сайта arbuz.kz</h3>
          <p>Расширение для Arbuz.kz помогает людям с диабетом сделать правильный выбор продуктов и рассчитать допустимые порции. Наведите на продукт, чтобы узнать, можно ли его употреблять и в каком количестве.</p>
          <button className="btn card-btn green">ПЕРЕЙТИ</button>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 DiaCare</p>
      </footer>
    </section>
  );
};

export default LowerBlock;
