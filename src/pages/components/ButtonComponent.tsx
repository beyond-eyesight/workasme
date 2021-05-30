import React from "react";
import Colors from "src/constants/Colors";
import {Button as BootstrapButton} from "react-bootstrap";

interface ButtonComponentProps {
  name: string;

}

const ButtonComponent: React.FC = () => {
  //todo: refac - 클릭했을 시 글씨 색상 주황색으로 바꾸기.
  return <>
    <style type="text/css"> {`
            .btn-join {
              background-color: ${Colors.theme.main.orgasme};
              color: ${Colors.theme.text.button.default};
            }
          `}
    </style>
    <BootstrapButton variant={"join"}>Join</BootstrapButton>
  </>
};

export default ButtonComponent;
