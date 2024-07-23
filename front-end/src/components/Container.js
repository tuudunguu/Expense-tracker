export const Container = ({ background, children }) => {
  return (
    <div className={`${background} w-screen `}>
      <div className=" w-full h-full m-auto lg:max-w-[1200px]">{children}</div>
    </div>
  );
};
