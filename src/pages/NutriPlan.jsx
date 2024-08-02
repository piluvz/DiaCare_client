import '../style/NutriPlan.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NutritionPlan = () => {
  const [nutritionPlan, setNutritionPlan] = useState({});
  const [products, setProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const location = useLocation();
  const { assistantOutput } = location.state || {};

  useEffect(() => {
    const fetchNutritionPlan = async () => {
      try {
        const response = await fetch('https://diacareserver-production.up.railway.app/api/nutrition-plan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ assistantOutput })
        });
        const data = await response.json();
        setNutritionPlan(data);

        const collectedIngredients = {};
        const productNames = new Set();
        Object.values(data).forEach(day => {
          Object.values(day).forEach(meal => {
            meal.Ингредиенты.forEach(ingredient => {
              if (collectedIngredients[ingredient.Название]) {
                const currentQuantity = parseFloat(collectedIngredients[ingredient.Название].Количество);
                const newQuantity = parseFloat(ingredient.Количество);
                const unit = ingredient.Количество.replace(/[0-9.]/g, '').trim();
                collectedIngredients[ingredient.Название].Количество = `${currentQuantity + newQuantity} ${unit}`;
              } else {
                collectedIngredients[ingredient.Название] = { ...ingredient };
                productNames.add(ingredient.Название);
              }
            });
          });
        });

        const uniqueIngredients = Object.values(collectedIngredients);
        setIngredients(uniqueIngredients);

        const productResponse = await fetch('https://diacareserver-production.up.railway.app/api/search-products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ productNames: Array.from(productNames) })
        });

        const productData = await productResponse.json();
        setProducts(productData);

        let total = 0;
        productData.forEach(product => {
          const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
          if (!isNaN(price)) {
            total += price;
          }
        });

        setTotalCost(total);
      } catch (error) {
        console.error('Error fetching nutrition plan:', error);
      }
    };

    if (assistantOutput) {
      fetchNutritionPlan();
    }
  }, [assistantOutput]);

  const renderMeals = (day) => {
    if (!nutritionPlan[day]) return "Loading...";

    const meals = [
      { type: 'Завтрак', meal: nutritionPlan[day]['Завтрак'] },
      { type: 'Перекус', meal: nutritionPlan[day]['Перекус'] },
      { type: 'Обед', meal: nutritionPlan[day]['Обед'] },
      { type: 'Ужин', meal: nutritionPlan[day]['Ужин'] },
    ];

    return meals.map((meal, index) => (
      <p key={index}><strong>{meal.type}:</strong> {meal.meal && meal.meal['Блюдо'] ? meal.meal['Блюдо'] : 'Нет данных'}</p>
    ));
  };

  const renderIngredients = () => {
    if (!ingredients.length) return null;

    return ingredients.map((ingredient, index) => {
      const product = products.find(p => p.title.includes(ingredient.Название.split(' ').slice(0, 2).join(' ')));
      return (
        <tr key={index}>
          <td>
            {product ? (
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                {ingredient.Название}
              </a>
            ) : (
              ingredient.Название
            )}
          </td>
          <td>{product ? `${product.price} тг` : 'Нет данных'}</td>
          <td>{ingredient.Количество}</td>
        </tr>
      );
    });
  };

  return (
    <div className="nutrition-plan">
      <div className="nutrition-plan-cont">
        <h1 className='plan-title'>Рацион питания по методу здоровой тарелки</h1>
        <div className='separator'></div>
        <section className="meal-plan">
          {Object.keys(nutritionPlan).map((day, index) => (
            <div className="day-card" key={index}>
              <h2>{day}</h2>
              {renderMeals(day)}
            </div>
          ))}
        </section>
        <section className="product-list">
          <h2>Список продуктов</h2>
          <table>
            <thead>
              <tr>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Нужно для готовки</th>
              </tr>
            </thead>
            <tbody>
              {renderIngredients()}
            </tbody>
          </table>
        </section>
        <section className="summary">
          <div className="total-cost">
            <h3>Общая стоимость</h3>
            <p>Общая стоимость продуктов: {totalCost} тг</p>
            <a href="https://arbuz.kz/#/"><button>ПЕРЕЙТИ В ARBUZ.KZ</button></a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NutritionPlan;
