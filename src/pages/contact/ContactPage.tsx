import React, {useCallback, useLayoutEffect, useMemo, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';


function getAverage(numbers: number[]) {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}


const ContactPage: React.FC = () => {

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    console.log(inputRef);
  });

  const callback = useCallback(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(() => {
    // @ts-ignore
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // @ts-ignore
    inputRef.current.focus();
  }, [number, list]); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <Container>
      <div>hiHi</div>
      <input value={number} ref={inputRef}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </Container>
  )
};


export default ContactPage
