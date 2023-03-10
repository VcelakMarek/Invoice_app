type Props = {
  options: string[];
};

const DropDownMenu = ({ options }: Props) => {
  return (
    <div className="absolute right-[340px] top-28 z-10 h-32 w-48 rounded-lg bg-[#FFF] drop-shadow-lg">
      {options.map((option) => (
        <div className="ml-6 first:mt-6 last:mb-6" key={option}>
          <div className="flex">
            <input
              id={option}
              type="checkbox"
              className="mr-3 mb-2 h-4 w-4 border border-purple bg-purple"
            />
            {/* <img
              className="text-blue-600 h-3 w-3 fill-current"
              src="/Invoice_app/assets/icon-check.svg"
              alt="icon-check"
            /> */}

            <div className="mb-2">
              <label
                htmlFor={option}
                className="text-center text-xs font-bold tracking-wider text-black"
              >
                {option}
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
