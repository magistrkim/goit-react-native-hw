import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <AnimatedLoader
      visible
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={{
        width: 40,
        height: 40,
      }}
      speed={1}
      ariaLabel="loading"
    />
  );
};

export default Loader;
