import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Paper, Typography } from "@mui/material";

export const CryptoChart = () => {
  const [chartData, setChartData] = useState<any>({
    series: [{ name: "Price", data: [] }],
    options: {
      chart: { id: "crypto-chart", toolbar: { show: false } },
      xaxis: { categories: [] },
      stroke: { curve: "smooth" },
      dataLabels: { enabled: false },
      tooltip: { theme: "dark" },
    },
  });

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        const categories = data.map((coin: any) => coin.name);
        const prices = data.map((coin: any) => coin.current_price);
        setChartData({
          series: [{ name: "Price (USD)", data: prices }],
          options: {
            chart: { id: "crypto-chart", toolbar: { show: false } },
            xaxis: { categories },
            stroke: { curve: "smooth" },
            dataLabels: { enabled: false },
            tooltip: { theme: "dark" },
            title: {
              text: "Top 30 Cryptos",
              align: "left",
              style: { color: "#fff" },
            },
            yaxis: { labels: { formatter: (val: any) => `$${val}` } },
            grid: { borderColor: "rgba(255,255,255,0.1)" },
            theme: { mode: "dark" },
          },
        });
      });
  }, []);

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3, backgroundColor: "#1e1e2f" }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
        Crypto Prices (USD)
      </Typography>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={300}
      />
    </Paper>
  );
};
