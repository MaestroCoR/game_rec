import React from "react";

const Info = () => {
  return (
    <div className="max-w-md mx-auto py-8 px-4">
      <h1 className="font-medium text-3xl text-center mb-6">
        Ласкаво просимо до сервісу рекомендацій ігор!
      </h1>
      <p className="text-lg mb-4">
        Ми вам допоможемо знайти нові цікаві ігри на основі ваших улюблених.
        Введіть ігри, які вам подобаються, і отримайте список рекомендованих
        ігор.
      </p>
      <h3 className="text-xl font-medium mb-2">Як користуватись веб-формою:</h3>
      <ol className="list-decimal ml-6 mb-4">
        <li>Спочатку напишіть назви улюблених ігор.</li>
        <li>Натисніть кнопку "Отримати рекомендації".</li>
        <li>
          Після цього справа ви побачите список ігор, які можуть вам
          сподобатись.
        </li>
      </ol>
    </div>
  );
};

export default Info;
