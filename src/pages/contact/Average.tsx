import React, {useCallback, useState} from "react";
import Container from "react-bootstrap/Container";

const Average: React.FC = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value)
  },[]);

  const onInsert = useCallback(() => {
    setNumber('');
    // @ts-ignore
    inputRef.current.focus();
  }, [number, list]);


  return (
    <div>
      <div>hiHi</div>
      <input ref={inputRef}
      />
    </div>
  );

};

export default Average;
