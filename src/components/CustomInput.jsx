import ErrorMessage from './ErrorMessage';

export function CustomInput({ icon: Icon, type, name, errorMessage, register, rules, darkMode, placeholder }) {

    return (
        <>
            <div className="relative">
                {Icon && <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />}
                <input {...register(name, rules)} className={`pl-10 w-full rounded-lg ${darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    } border p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
            {errorMessage && <ErrorMessage message={errorMessage} />}
        </>
    )
}
