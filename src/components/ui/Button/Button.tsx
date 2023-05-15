

interface IProps {
  text: string,
  onClick: () => void
}

const Button: React.FC<IProps> = ({
  text,
  onClick
}) => {

  return (
    <button
      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-green-400 hover:bg-green-500 text-white focus:outline-none focus-visible:ring-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;