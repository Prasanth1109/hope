import "./RotatingButton.css"

export default function RotatingButton() {
    const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className="absolute flex justify-center items-center h-full bg-transparent">
            {/* Circular Path Container */}
            <div className="relative w-10 h-10">
                {buttons.map((button, index) => (
                    <div
                        key={button}
                        className={`absolute w-full h-full top-0 left-0 transform rotate-${index * 45} animate-orbit`}
                        style={{
                            animationDelay: `${index * 0.5}s`,
                        }}
                    >
                        <button className="w-12 h-12 font-semibold text-white bg-blue-500 rounded-full">
                            {button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}