import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { firstName, lastName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  const mainHandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  return (
    <div role="presentation" onClick={mainHandler} className="name_wpapper">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button onClick={handler}>CLICK ME</button>
    </div>
  );
};

export default NameComponent;

//const sum(a, b) => a+b;
//sum(1,2)

//const a = 0;
//const sum = (b) => {
//a += 1;
//a + b;
//};
//sum(1, 2);
//sum(2, 5);
//не чистая функция
