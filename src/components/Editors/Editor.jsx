const Editor = () => {
    return (
        <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center justify-between px-2 mb-4">
            <div className="bg-emerald-600 w-10 h-10 rounded-full flex text-center justify-center items-center">
                <p>FD</p>
            </div>
            <div>
                <h1 className="font-bold">Mo.3amer</h1>
                <p className="text-xs text-gray-500">5616168</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10.5" stroke="#FF0000"/>
                <path d="M4.3999 11H16.8666" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>
    );
};

export default Editor;
