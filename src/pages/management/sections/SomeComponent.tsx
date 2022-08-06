import React, {Component} from "react";
import {createSelectable, TSelectableItemProps} from "react-selectable-fast";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";
import Percentage from "src/graphic/size/percentage";
import {ReactSelectableComponentProps} from "react-selectable";

interface SelectableProps extends ReactSelectableComponentProps {
  selectableRef: any,
  isSelected: boolean,
  isSelecting: boolean,
  isMatching: boolean
  heightTimes ?: Percentage
  height: Pixel
}

function getBackgroundColor(isSelected: boolean) {
  if (isSelected) {
    return 'orange'
  }  else
    return 'white'
}

class SomeComponent extends Component<SelectableProps> {
  render() {
    const {selectableRef, isSelected, isMatching, heightTimes, height} = this.props



    const backgroundColor = getBackgroundColor(isSelected);

    return <div css={css({
      position: "relative",
      // width: this.width.toString(),
      height: height.toString(),
      // margin: "30px",
      backgroundColor: backgroundColor
    })} ref={selectableRef}>
      {this.props.children}
      {SomeComponent.getDiv(isMatching, height.multiply(heightTimes == null ? new Percentage(100) : heightTimes))}
    </div>;
  }

  private static getDiv(isMatching: boolean, height: Pixel) {

    if (isMatching) {

      return <div css={css({
        width: "100%",
        height: height.toString(),
        position: "absolute",
        top: 0,
        left: 0,
        // opacity: 0.7,
        background: "purple",
        zIndex: 9,
        margin: "2px"
      })}>
        kkkk
      </div>;
    }
  }
}

// <div css={css({
//   width: "100%",
//   height: "100%",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   opacity: 0.7,
//   background: "#009938",
//   zIndex: 9,
//   margin: "30px"
// })}>
//   hoho
// </div>

export default SomeComponent;


