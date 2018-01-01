import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { TextField, List, ListItem, Divider } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const ENTER_KEY = 13

class Colors extends Component {
    handleKeyDown = event => {
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault()
            this.props.search(this.props.colors.query)
        }
    }

    handleQueryChange = (event, query) => {
        this.props.updateQuery(query)
    }

    renderListItems = () => this.props.colors.results.map((color, index) => (
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
                        value={this.props.colors.query}
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

export default Colors
