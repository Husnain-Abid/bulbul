import { useState, useEffect } from "react";
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    ResponsiveContainer, 
    Tooltip 
} from "recharts";

export default function TempGraph() {
    // Generate sample data - in real app, this would come from your API/database
    const generateData = () => {
        const data = [];
        let temp = 30; // Starting temperature
        for (let i = 1; i <= 100; i++) {
            temp += Math.random() - 0.5; // Add some random variation
            temp = Math.min(Math.max(temp, 30), 36); // Clamp temp between 30 and 36
            data.push({
                time: i, // Time in seconds
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
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 20, bottom: 30, left: 10, // Add extra bottom margin
                    }}
                >
                    {/* Add CartesianGrid for X-axis only */}
                    <CartesianGrid horizontal={true} vertical={false} stroke="#D5DCDF" />

                    {/* X-Axis: Time in Seconds */}
                    <XAxis
                        dataKey="time"
                        stroke="#798388"
                        tick={{ fill: "#798388" }}
                        tickLine={{ stroke: "#798388" }}
                        domain={[1, 100]}
                        ticks={[1, 15, 30, 45, 60, 75, 100]} // Custom ticks
                        label={{
                            value: "Time (seconds)",
                            position: "bottom", // Place label outside the chart
                            offset: 10, // Fine-tune the position
                            fill: "#00000",
                        }}
                    />

                    {/* Y-Axis: Temperature (30 to 36°C) */}
                    <YAxis
                        stroke="#798388"
                        tick={{ fill: "#798388" }}
                        tickLine={{ stroke: "#798388" }}
                        domain={[30, 36]}
                        ticks={[30, 31, 32, 33, 34, 35, 36]} // Explicitly show ticks
                        label={{
                            value: "Temperature (°C)",
                            angle: -90,
                            position: "insideLeft",
                            offset: 0,
                            fill: "#00000",
                            style: { textAnchor: "middle" },
                        }}
                    />

                    {/* Tooltip: Show value on hover */}
                    <Tooltip
                        contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)" }}
                        labelStyle={{ color: "#555" }}
                        itemStyle={{ color: "#E23744" }}
                        formatter={(value) => [`Temperature: ${value.toFixed(2)}°C`]} // Format value to 2 decimal places
                    />

                    {/* Add the temperature line */}
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#E23744"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
