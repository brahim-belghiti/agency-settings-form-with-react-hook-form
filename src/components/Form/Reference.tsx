// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { HiMinusSm, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

// const Input = ({
//   label,
//   type,
//   placeholder,
//   errors,
//   name,
//   register,
//   unregister,
//   disabled = false,
//   showLabel = false,
//   showIcon = false,
//   icon,
//   onChange,
//   value,
//   className,
//   selectOptions,
//   onSelected,
//   selectValue,
//   registerSelect,
//   selectName,
//   onRemove,
//   removable,
// }: {
//   name: string;
//   errors?: any;
//   label?: string;
//   type: string;
//   placeholder: string;
//   register?: any;
//   unregister?: any;
//   disabled?: boolean;
//   showLabel?: boolean;
//   showIcon?: boolean;
//   icon?: any;
//   value?: string;
//   onChange?: <T>(e: React.ChangeEvent<HTMLInputElement>) => void;
//   className?: string;
//   selectOptions?: { value: string; label: string }[]; // Type definition for options
//   onSelected?: (value: string) => void;
//   selectValue?: string;
//   registerSelect?: any;
//   selectName?: string;
//   removable?: boolean;
//   onRemove?: () => void;
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   useEffect(() => {
//     if (selectName && registerSelect) {
//       registerSelect(selectName);
//     }
//     if (type && type !== "password") {
//       setShowPassword(false);
//     }
//     return () => {
//       if (unregister) {
//         unregister(name);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [name, selectName, type]);

//   const getDeepKey = (obj: any, key?: string) => {
//     if (!obj || !key) return;
//     const keys = key.split(".");
//     if (keys.length === 1) return obj[key];
//     let value = obj;
//     for (const k of keys) {
//       if (!value) return;
//       value = value[k];
//     }
//     return value;
//   };

//   return (
//     <div className="flex flex-col gap-2 relative w-full">
//       {showLabel && (
//         <label
//           htmlFor={label}
//           className="text-base text-start h-full z-10 text-black-off"
//         >
//           {label}
//         </label>
//       )}
//       <div className="relative w-full">
//         {showIcon && (
//           <div
//             className={`absolute
//              text-xl bottom-4`}
//           >
//             {icon}
//           </div>
//         )}
//         <input
//           disabled={disabled}
//           {...register}
//           value={value ? value : register?.value}
//           onChange={onChange ? onChange : register.onChange}
//           className={`justify-start w-full outline-none placeholder:text-black-off/40 items-center border-[1px] border-solid border-white-cool rounded-[8px] px-6 py-3
//         ${showIcon && `pl-[52px]`} ${className}`}
//           type={showPassword ? "text" : type}
//           placeholder={placeholder}
//           id={label}
//         />
//         <AnimatePresence mode="wait">
//           {removable && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.2 }}
//               className={`absolute rounded-2xl bg-brand-main text-white-main -top-2 cursor-pointer" +
//               `}
//               onClick={onRemove}
//             >
//               <HiMinusSm size={20} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {selectOptions?.length && (
//           <select
//             onChange={(e) => onSelected && onSelected(e.target.value)}
//             value={selectValue}
//             className="absolute rounded-2xl focus:outline-none px-4 py-2 rtl:left-6 ltr:right-6 top-[0.35rem] appearance-none bg-white-cool"
//           >
//             {selectOptions.map((option) => (
//               <option
//                 className="appearance-none"
//                 key={option.value}
//                 value={option.value}
//               >
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         )}

//         {type === "password" && (
//           <button
//             type="button"
//             onClick={toggleShowPassword}
//             className={`absolute text-xl top-1/2 transform -translate-y-1/2`}
//           >
//             {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
//           </button>
//         )}
//       </div>
//       {errors && getDeepKey(errors, name) && (
//         <span className="text-red-500 text-sm">
//           {getDeepKey(errors, name)?.message}
//         </span>
//       )}
//     </div>
//   );
// };

// export default Input;
