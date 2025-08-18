const ShinyText = ({ text, disabled = false, speed = 7, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={ `text-[#b5b5b5a4] shine bg-clip-text  ${disabled ? '' : 'animate-shine'} ${className}` }
            style={ {
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.43) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.43) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            } }
        >
            { text }
        </div>
    );
};

export default ShinyText;
