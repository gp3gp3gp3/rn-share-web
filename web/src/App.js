import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { TextField, List, ListItem, Divider } from 'material-ui'
import crayola from './resources/crayola.json'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const ENTER_KEY = 13

class App extends Component {
  constructor () {
    super()
    this.state = {
      colors: [],
      query: ''
    }
  }

  search = () => {
    const colors = crayola.filter(({ name }) =>  name.toLowerCase().includes(this.state.query.toLowerCase()))
    this.setState({ colors })
  }

  handleKeyDown = event => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault()
      this.search()
    }
  }

  handleQueryChange = (event, query) => {
    this.setState({ query })
  }

  renderListItems = () => this.state.colors.map((color, index) => (
    <div
      key={`color-${index}`}
    >
      <ListItem
        primaryText={color.name}
        style={{ backgroundColor: color.hex }}
      />
      <Divider />
    </div>
  ))
  
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            hintText='Search...'
            floatingLabelFixed
            fullWidth
            value={this.state.query}
            onChange={this.handleQueryChange}
            onKeyDown={this.handleKeyDown}
          />
          <List>
            {this.renderListItems()}
          </List>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
