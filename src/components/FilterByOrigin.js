const FilterByOrigin = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "origin",
    });
  };
  const Origin = props.OriginList.map((user) => {
    return (
      <>
        <div className="checkbox">
          <label className="input">{user} </label>
          <input
            className=""
            onChange={handleChange}
            type="checkbox"
            name="origin"
            value={user}
          />
        </div>
      </>
    );
  });

  return <div className="origin__container">{Origin}</div>;
};

export default FilterByOrigin;
