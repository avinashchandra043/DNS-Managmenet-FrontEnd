import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import Loader from "../../../Components/Loader/Loader";
import { theme } from "../../../Constants";

Chart.register(CategoryScale, LinearScale, BarElement);

const useStyles = createUseStyles({
  container: {
    marginTop: "50px",
    padding: "20px",
  },
});

const MetricsTab = ({ domainList }) => {
  const classes = useStyles();
  const chartRef = useRef(null);

  useEffect(() => {
    const currentChartRef = chartRef.current;
    return () => {
      if (currentChartRef && currentChartRef.destroy) {
        currentChartRef.destroy();
      }
    };
  }, []);

  const domains = domainList?.HostedZones || [];

  const domainNames = domains.map((domain) => domain.Name.replace(/\.$/, ""));
  const resourceRecordCounts = domains.map(
    (domain) => domain.ResourceRecordSetCount
  );

  const data = {
    labels: domainNames,
    datasets: [
      {
        label: "Resource Record Set Count",
        data: resourceRecordCounts,
        backgroundColor: `${theme.graphBackgroundColor}`,
        borderColor: `${theme.graphBorderColor}`,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      duration: 800,
      easing: "easeInOutQuad",
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Domain Names",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Resource Record Set Count",
        },
      },
    },
  };

  return (
    <div className={classes.container}>
      {!domainList ? (
        <Loader />
      ) : (
        <Bar data={data} options={options} ref={chartRef} />
      )}
    </div>
  );
};
const mapStateToProps = ({ dnsReducer }) => ({
  domainList: dnsReducer.domainList,
});

export default connect(mapStateToProps)(MetricsTab);
