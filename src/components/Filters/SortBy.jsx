import React from "react";
import PropTypes from "prop-types";

export default class SortBy extends React.Component {
  static propTypes = {
    sort_by: PropTypes.string.isRequired,
    onChangeFilters: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: [
      {
        label: "Популярні по спаданні",
        value: "popularity.desc",
        image: "/lol.jpg"
      },
      {
        label: "Популярні по зростанні",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по спаданні",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по зростанні",
        value: "vote_average.asc"
      }
    ]
  };

  render() {
    const { sort_by, onChangeFilters, options } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="sort_by">Сортувати по:</label>
        <select
          id="sort_by"
          className="form-control"
          name="sort_by"
          value={sort_by}
          onChange={onChangeFilters}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}