import React from "react";
import {Button as BootstrapButton} from "react-bootstrap";

interface ButtonComponentProps {
  name: string;
  backgroundColor: string;
  defaultTextColor: string;

}

//todo: customize 를 스트링으로 하다보니, 아쉬움. 스트링 대신 다른 방법 찾아보기.
const ButtonComponent: React.FC<ButtonComponentProps> = ({
                                                           name, backgroundColor, defaultTextColor
                                                         }: ButtonComponentProps) => {
  //todo: refac - 클릭했을 시 글씨 색상 주황색으로 바꾸기.
  return <>
    <style type="text/css"> {`
            .btn-${name} {
              background-color: ${backgroundColor};
              color: ${defaultTextColor};
            }
          `}
    </style>
    <BootstrapButton variant={"join"}>Join</BootstrapButton>
  </>
};

export default ButtonComponent;
