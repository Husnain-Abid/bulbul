import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export default function TimeGraph() {
    // Generate sample data - including time in HH:MM format
    const generateData = () => {
        const times = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        const data = [];
        let temp = 100; // Starting temperature
        for (let i = 0; i < times.length; i++) {
            temp += Math.random() * 20 - 10; // Add some random variation
            temp = Math.min(Math.max(temp, 0), 200); // Clamp temp between 0 and 200
            data.push({
                time: times[i], // Time in HH:MM format
                temperature: temp,
            });
        }
        return data;
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(generateData());
    }, []);

    return (
        <div className="w-full h-[300px] p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    {/* Hide vertical grid lines */}
                    <CartesianGrid horizontal={true} vertical={false} stroke="#D5DCDF" />

                    {/* X-Axis: Time in HH:MM */}
                    <XAxis
                        dataKey="time" // Match data key for time
                        stroke="#798388"
                        tick={{ fill: "#798388" }}
                        tickLine={{ stroke: "#798388" }}
                        ticks={["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]} // Explicit ticks
                    />

                    {/* Y-Axis: Temperature */}
                    <YAxis
                        stroke="#798388"
                        tick={{ fill: "#798388" }}
                        tickLine={{ stroke: "#798388" }}
                        domain={[0, 200]}
                        ticks={[0, 50, 100, 150, 200]} // Explicitly show ticks
                        axisLine={false} // Hides the vertical axis line
                    />

                    {/* Add Tooltip to show value on hover */}
                    <Tooltip
                        contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)" }}
                        labelStyle={{ color: "#555" }}
                        itemStyle={{ color: "#F4BE37" }}
                        formatter={(value) => [`Temperature: ${value.toFixed(2)}°C`]} // Format value to 2 decimal places
                    />

                    {/* Add the temperature line */}
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#F4BE37"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
