export const Scrollbar = {
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
    marginLeft: '3rem',
  },
  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 10px 10px #E2E8F0',
    border: 'solid 1px transparent',
    borderRadius: '2.4rem',
  },
  '::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px #FEC93E',
    background: 'brand.500',
    borderRadius: '2.4rem',
  },
  scrollbarColor: '#FEC93E',
};