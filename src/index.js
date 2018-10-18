import * as React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

export class ScrollableWithCollapsibleHeader extends React.Component {

  constructor(props) {
    super(props);
    this.headerY = Animated.multiply(Animated.diffClamp(this.positiveScroll, 0, props.headerHeight), -1);
  }

  scroll = new Animated.Value(0);
  headerY;

  positiveScroll = this.scroll.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolateLeft: 'clamp',
  });

  listOnScrollHandler = (event) => {
    const { nativeEvent } = event;
    const scrollPosition = nativeEvent.contentOffset.y;
    const layoutHeight = nativeEvent.layoutMeasurement.height;
    const contentHeight = nativeEvent.contentSize.height;

    if (scrollPosition < contentHeight - layoutHeight) {
      Animated.event([
        { nativeEvent: { contentOffset: { y: this.scroll } } },
      ])(event);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Animated.View
          style={{
            width: '100%',
            position: 'absolute',
            transform: [{
              translateY: this.headerY,
            }],
            elevation: 0,
            flex: 1,
            zIndex: 1,
          }}
        >
          {this.props.headerComponent()}
        </Animated.View>
        {this.props.listComponent({
          style: {
            paddingTop: Animated.add(this.props.headerHeight, this.headerY),
            flex: 1,
          },
          onScroll: this.listOnScrollHandler,
          scrollEventThrottle: 16,
        })}
      </React.Fragment>
    );
  }

}

ScrollableWithCollapsibleHeader.propTypes = {
  headerComponent: PropTypes.func.isRequired,
  listComponent: PropTypes.func.isRequired,
  headerHeight: PropTypes.number,
};
