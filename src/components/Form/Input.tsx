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
