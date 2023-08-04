type InputProps = {
  label?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({ label, type, placeholder, value, onChange }: InputProps) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        type={type}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

// type TInputProps = {
//   label: string;
//   type: string;
//   name: string;
//   placeholder: string;
//   value?: string;
//   register: any;
//   error?: any;
// };

// const Input2 = ({
//   label,
//   type,
//   name,
//   placeholder,
//   value,
//   register,
//   error,
// }: TInputProps) => {

//   console.log(error);
//   const min = type === "number" ? 0 : undefined;
//   return (
//     <div className="flex flex-col">
//       <label
//         htmlFor={name}
//         className="font-sans block mb-2 text-sm font-medium text-gray"
//       >
//         {label}
//       </label>
    
//         <input
//           type={type}
//           placeholder={placeholder}
//           id={label}
//           value={value}
//           min={min}
//           {...register}
//           className="font-sans block w-full p-2.5 border border-gray rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
//         />
     
//       {error && <span className="text-red-400 text-sm">{error}</span>}
//     </div>
//   );
// };

// export { Input2 };