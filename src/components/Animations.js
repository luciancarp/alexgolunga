import styled from 'styled-components'

export const TranslateDynamic = styled('div').attrs(
  ({
    state = true,
    duration = 'transform 0.2s',
    startX = 0,
    endX = 50,
    startY = 0,
    endY = 50,
  }) => ({
    style: {
      transition: duration,
      transform: `translate(${!state ? startX : endX}%, ${
        !state ? startY : endY
      }%)`,
    },
  })
)``

export const Translate = styled.div`
  -webkit-animation: translate 0.5s ease-in-out;
  -moz-animation: translate 0.5s ease-in-out;
  -ms-animation: translate 0.5s ease-in-out;
  -o-animation: translate 0.5s ease-in-out;
  animation: translate 0.5s ease-in-out;

  @keyframes translate {
    from {
      transform: translate(0, 2rem);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @-moz-keyframes translate {
    from {
      transform: translate(0, 2rem);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes translate {
    from {
      transform: translate(0, 2rem);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @-ms-keyframes translate {
    from {
      transform: translate(0, 2rem);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @-o-keyframes translate {
    from {
      transform: translate(0, 2rem);
    }
    to {
      transform: translate(0, 0);
    }
  }
`

export const OpacityDynamic = styled('div').attrs(
  ({ state = true, duration = 'opacity 0.2s', start = 100, end = 0 }) => ({
    style: {
      transition: duration,
      opacity: `${state ? end : start}%`,
    },
  })
)``

export const Opacity = styled.div`
  -webkit-animation: fadein 0.5s ease-in-out;
  -moz-animation: fadein 0.5s ease-in-out;
  -ms-animation: fadein 0.5s ease-in-out;
  -o-animation: fadein 0.5s ease-in-out;
  animation: fadein 0.5s ease-in-out;

  @keyframes fadein {
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

  @-webkit-keyframes fadein {
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
`

export const ScaleDynamic = styled('div').attrs(
  ({ state = true, duration = '0.2s', start = 1, end = 0.5 }) => ({
    style: {
      transition: duration,
      transform: `scale(${!state ? start : end})`,
    },
  })
)``
