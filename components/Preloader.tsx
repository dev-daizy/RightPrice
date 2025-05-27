const Preloader = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex gap-3">
          <div className="h-5 w-5 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]" />
          <div className="h-5 w-5 rounded-full bg-yellow-400 animate-bounce [animation-delay:-0.15s]" />
          <div className="h-5 w-5 rounded-full bg-red-500 animate-bounce" />
        </div>
      </div>
    );
  };
  
  export default Preloader;
  