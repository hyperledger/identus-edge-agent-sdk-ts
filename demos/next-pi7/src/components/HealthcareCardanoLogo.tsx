import React from "react";


export const HealthcareCardanoLogo: React.FC<{ className?: string }> = ({
    className,
}) => {
    // Circle arrangement based on the Cardano logo
    const circleConfig = [
        { count: 12, radius: 40 },
        { count: 11, radius: 32 },
        { count: 8, radius: 25 },
        { count: 6, radius: 17 },
        { count: 4, radius: 10 },
        // Center circle(s) omitted since the cross covers it
    ];
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Circles pattern matching the Cardano logo */}
            {circleConfig.map((ring, ringIndex) => {
                const { count, radius } = ring;
                return (
                    <g key={"circle" + ringIndex}>
                        {Array.from({ length: count }).map((_, circleIndex) => {
                            const angle = (circleIndex / count) * 2 * Math.PI;
                            const x = 50 + radius * Math.cos(angle);
                            const y = 50 + radius * Math.sin(angle);
                            return (
                                <circle
                                    key={"circle-sub-" + circleIndex}
                                    cx={x}
                                    cy={y}
                                    r="2.5"
                                    fill="#1E3A8A"
                                />
                            );
                        })}
                    </g>
                );
            })}

            {/* Central healthcare symbol (thicker cross on top of circles) */}
            <g transform="translate(50, 50)">
                <rect x="-15" y="-37.5" width="30" height="75" fill="#fc3a3a" />
                <rect x="-37.5" y="-15" width="75" height="30" fill="#fc3a3a" />
            </g>
        </svg>
    );
};