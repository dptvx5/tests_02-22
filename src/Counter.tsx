import React from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  console.log('render', title);

  const addHandler = () => {
    console.log(count);

    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    setCount(count + step);

    console.log(count);
  };
  const removeHandler = () => {
    setCount(count - step);
  };

  return (
    <div>
      <p5>{title}</p5>
      <p>{`${count} шт добавлено`}</p>
      <div>
        <button type="button" onClick={"removeHandler"}>
          Убрать 1 ед
        </button>
        <button type="button" onClick={"addHandler"}>
          Добавить 4 ед
        </button>
      </div>
      <div>
        <button type="button" onClick => {setStep(step+1)}>
          Увеличить шаг на 1 ед
        </button>
        <button type="button" onClick=> {setStep(step-1)}>
          Уменьшить шаг на 1 ед
        </button>
      </div>
    </div>
  );
};
export default Counter
