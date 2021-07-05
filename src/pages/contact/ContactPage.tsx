import React, {useCallback, useLayoutEffect, useMemo, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';


function getAverage(numbers: number[]) {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}


const ContactPage: React.FC = () => {

  const divRef = React.useRef<HTMLDivElement>(null);

  const inputRef = React.useRef<HTMLInputElement>(null);

  console.log(divRef);  // { current: null }
  console.log(inputRef);

  useLayoutEffect(() => {
    console.log(divRef); // { current: <h1_object> }
    console.log(inputRef);
  });

  const callback = useCallback(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);

  const onInsert = () => {
    // @ts-ignore
    inputRef.current.focus();
  };


  return (
    <Container>
      <div ref={divRef}>hiHi</div>
      <input ref={inputRef}
      />
    </Container>
  )
};


export default ContactPage
