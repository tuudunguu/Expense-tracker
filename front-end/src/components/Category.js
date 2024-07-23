export const Category = ({ content }) => {
  return (
    <div className="w-[250px] h-[32px] flex flex-row justify-between items-center">
      <div className="w-fit h-full flex flex-row justify-center items-center gap-x-2">
        <img src="/pictures/eye icon.png" className="w-5 h-5" />
        <h6>{content}</h6>
      </div>
      <img src="/pictures/next icon.png" className="w-5 h-5" />
    </div>
  );
};
