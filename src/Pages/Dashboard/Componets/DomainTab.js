import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { listRecord } from "../../../Action/dnsAction";
const useStyle = createUseStyles({
  container: {
    overflow: "hidden",
  },
  filterContainer: {
    padding: "30px 0px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputCotainer: {
    width: "60%",
    "& input": {
      width: "100%",
      padding: "10px",
      border: "1px solid #9b9b9b",
      borderRadius: "6px",
      "&:focus-within": {
        outline: "none",
      },
    },
  },
  sortContainer: {
    "& button": {
      padding: "5px 10px",
    },
  },
  tableContainer: {
    textAlign: "center",
  },
  headRow: {
    display: "flex",
    fontWeight: "bold",
    background: "#f8f8f8",
    borderBottom: "1px solid #ccc",
    padding: "10px 0px",
  },
  row: {
    borderBottom: "1px solid #ccc",
    padding: "10px 0px",
    display: "flex",
    cursor: "pointer",
  },
  col1: {
    width: "20%",
  },
  col2: {
    width: "50%",
  },
  col3: {
    width: "30%",
    textOverflow: "ellipsis",
  },
  rowScroll: {
    maxHeight: "400px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f0f0f0",
    },
  },
});

const DomainTab = ({ domainList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [domains, setDomains] = useState(domainList?.HostedZones);
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    let filteredDomains;
    if (searchTerm === "") {
      filteredDomains = domainList?.HostedZones;
    } else {
      filteredDomains = domainList?.HostedZones?.filter((domain) =>
        domain.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    const sortedDomains = filteredDomains?.sort((a, b) => {
      if (sortAscending) {
        return a.Name.localeCompare(b.Name);
      } else {
        return b.Name.localeCompare(a.Name);
      }
    });
    setDomains(sortedDomains);
  }, [searchTerm, sortAscending, domainList]);

  useEffect(() => {
    setDomains(domainList?.HostedZones);
  }, [domainList]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortToggle = () => {
    setSortAscending((prevSortAscending) => !prevSortAscending);
  };

  const handleDomainClick = (id) => {
    const domainId = { HostedZoneId: `${id}` };
    listRecord(domainId);
    navigate(`/dashboard${id}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
        <div className={classes.inputCotainer}>
          <input
            type="text"
            placeholder="Search domains..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={classes.sortContainer}>
          <button onClick={handleSortToggle}>
            Sort by Name {sortAscending ? "⬆️" : "⬇️"}
          </button>
        </div>
      </div>
      <div className={classes.tableContainer}>
        <div className={classes.headRow}>
          <div className={classes.col1}>Sr. No.</div>
          <div className={classes.col2}>Domain Name</div>
          <div className={classes.col3}>
            Resource&nbsp;Record&nbsp;Set&nbsp;Count
          </div>
        </div>
        <div className={classes.rowScroll}>
          {domains?.map((domain, index) => (
            <div
              key={domain.Id}
              className={classes.row}
              onClick={() => handleDomainClick(domain.Id)}
            >
              <div className={classes.col1}>{index + 1}</div>
              <div className={classes.col2}>{domain.Name}</div>
              <div className={classes.col3}>
                {domain.ResourceRecordSetCount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ dnsReducer }) => ({
  domainList: dnsReducer.domainList,
});

export default connect(mapStateToProps)(DomainTab);
