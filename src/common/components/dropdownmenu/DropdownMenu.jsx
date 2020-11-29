import React from 'react';
import FontAwesome from '../fontawesome/FontAwesome';
import './DropdownMenu.css';

/**
 * A dropdown menu that takes in a list of tuples <text, link>(string, string) as props.
 * props = {
 *  list: <<string, string>[text, link]>[]
 * }
 */
class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
    };
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen } = this.state;
    return (
      <div className="DropdownMenuWrapper">
        <div className="DropdownMenuButton" onClick={() => this.toggleList()}>
          <FontAwesome name="bars" size="2x" />
        </div>
        {
          listOpen && <ul className="DropdownMenuList">
            {list.map((item) => (
              <a href={`${item.link}`}><li className="DropdownMenuListItem" key={item.id}>{item.text}</li></a>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default DropdownMenu;