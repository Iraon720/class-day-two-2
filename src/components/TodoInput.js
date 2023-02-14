import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      status: "PENDING",
      id: props.todoAmount + 1,
    };
    this.handlerTitleChange = this.handlerTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  resetState = () => this.setState({
    description: "",
    title: "",
    status: "PENDING",
    id: this.props.todoAmount + 1,
  })

  handlerTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleStatusChange(e) {
    this.setState({ status: e.target.value });
  }

  handleSave(e){
    e.preventDefault()
    const payload = {
        description: this.state.description,
        title: this.state.title,
        status: this.state.status,
        id: this.state.id
    }
    this.props.handleSaveClick(payload);
    this.resetState()
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handlerTitleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={this.state.status}
          onChange={this.handleStatusChange}
        >
          <option value="PENDING">Pending</option>
          <option value="ACTIVE">Active</option>
          <option value="DONE">Done</option>
        </select>
        <button onClick={this.handleSave}>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default TodoInput;
