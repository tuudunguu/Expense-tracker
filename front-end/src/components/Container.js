export const Container = ({ background, children, height }) => {
  return (
    <div className={`${background} w-screen ${height} `}>
      <div className=" w-full h-full m-auto lg:max-w-[1200px] ">{children}</div>
    </div>
  );
};
