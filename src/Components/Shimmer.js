const Shimmer = () => {
    return (
        <div className="res-container">
            {Array(20)
                .fill("")
                .map((_, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer-img"></div>

                        <div className="shimmer-title"></div>

                        <div className="shimmer-text"></div>

                        <div className="shimmer-rating"></div>

                        <div className="shimmer-time"></div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;