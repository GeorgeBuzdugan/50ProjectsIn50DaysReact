import Animate from './Animate';

export default function ScrollAnimation() {
  return (
    <>
      {Array(40)
        .fill(true)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Animate key={`${i}`}>Hello World</Animate>
        ))}
    </>
  );
}
