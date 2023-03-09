import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{display: 'flex',
    justifyContent: 'center',}}>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#004e64', '#00a5cf', '#9fffcb', '#25a18e', '#7ae582']}
    />
  </div>
);