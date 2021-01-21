import styled from 'styled-components'

export const TranslateDynamic = styled('div').attrs(
  ({
    state = true,
    duration = 'transform 0.2s',
    startX = 0,
    endX = 0,
    startY = 0,
    endY = 0,
  }) => ({
    style: {
      WebkitTransition: duration,
      transition: duration,
      WebkitTransform: `translate(${!state ? startX : endX}rem, ${
        !state ? startY : endY
      }rem)`,
      transform: `translate(${!state ? startX : endX}rem, ${
        !state ? startY : endY
      }rem)`,
    },
  })
)``

export const Translate = styled.div`
  -webkit-animation: translate 0.5s ease-in-out;
  -moz-animation: translate 0.5s ease-in-out;
  -ms-animation: translate 0.5s ease-in-out;
  -o-animation: translate 0.5s ease-in-out;
  animation: translate 0.5s ease-in-out;

  @-webkit-keyframes translate {
    from {
      -webkit-transform: translate(0, 2rem);
      -moz-transform: translate(0, 2rem);
      -ms-transform: translate(0, 2rem);
      -o-transform: translate(0, 2rem);
      transform: translate(0, 2rem);
    }
    to {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-moz-keyframes translate {
    from {
      -webkit-transform: translate(0, 2rem);
      -moz-transform: translate(0, 2rem);
      -ms-transform: translate(0, 2rem);
      -o-transform: translate(0, 2rem);
      transform: translate(0, 2rem);
    }
    to {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-ms-keyframes translate {
    from {
      -webkit-transform: translate(0, 2rem);
      -moz-transform: translate(0, 2rem);
      -ms-transform: translate(0, 2rem);
      -o-transform: translate(0, 2rem);
      transform: translate(0, 2rem);
    }
    to {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-o-keyframes translate {
    from {
      -webkit-transform: translate(0, 2rem);
      -moz-transform: translate(0, 2rem);
      -ms-transform: translate(0, 2rem);
      -o-transform: translate(0, 2rem);
      transform: translate(0, 2rem);
    }
    to {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes translate {
    from {
      -webkit-transform: translate(0, 2rem);
      -moz-transform: translate(0, 2rem);
      -ms-transform: translate(0, 2rem);
      -o-transform: translate(0, 2rem);
      transform: translate(0, 2rem);
    }
    to {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
`

export const OpacityDynamic = styled('div').attrs(
  ({ state = true, duration = 'opacity 0.2s', start = 1, end = 0 }) => ({
    style: {
      WebkitTransition: duration,
      transition: duration,
      opacity: `${state ? end : start}`,
    },
  })
)``

export const Opacity = styled.div`
  -webkit-animation: fadein 0.5s ease-in-out;
  -moz-animation: fadein 0.5s ease-in-out;
  -ms-animation: fadein 0.5s ease-in-out;
  -o-animation: fadein 0.5s ease-in-out;
  animation: fadein 0.5s ease-in-out;

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ScaleDynamic = styled('div').attrs(
  ({ state = true, duration = '0.2s', start = 1, end = 0.5 }) => ({
    style: {
      WebkitTransition: duration,
      transition: duration,
      WebkitTransform: `scale(${!state ? start : end})`,
      transform: `scale(${!state ? start : end})`,
    },
  })
)``
