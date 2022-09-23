
interface InputProps {
    id: string;
    title: string;
    placeholder: string;
    width: string;
    type: any;
}

const InputWithTitle = (props: InputProps) => {
  return (
    <div className={`flex flex-col my-2 pl-1 ${props.width}`}>
      <label className="text-sm mb-2" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className="bg-slate-900 text-gray-600 p-3 rounded-lg"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputWithTitle;
