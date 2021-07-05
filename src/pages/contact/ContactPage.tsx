import React, {useCallback, useMemo, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';


function getAverage(numbers: number[]) {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}


const ContactPage: React.FC = () => {

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState('');
  const inputElement = useRef<HTMLDivElement>(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value)
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));

    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);


  return <Container>
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>

  </Container>
};


export default ContactPage
