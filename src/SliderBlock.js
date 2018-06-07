import React from "react";

export default class SliderBlock extends React.Component {
  render() {
    if (this.props.number === 0) {
      return <span className="slider-block slider-block_zero" />;
    }
    const classNames = `slider-block slider-block-${this.props.number}`;
    const imgSrc = `/wp-content/plugins/rising-heroes/library/slider-puzzle-master/images/slide_puzzle_${
      this.props.number
    }.png`;
    return (
      <span
        className={classNames}
        onClick={() => this.props.onClick(this.props.number)}
      >
        <img class="slider-image" src={imgSrc} alt={this.props.number} />
      </span>
    );
  }
}

SliderBlock.propTypes = {
  number: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};
