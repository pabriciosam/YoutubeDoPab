import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { buscaVideo } from '../store/actions/buscaVideo'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.props.buscaVideo('Futebol')
    }

    pesquisaTermo = e => {
        if (e.keyCode === 13) {
            const termo = e.target.value

            console.log(termo)

            this.props.buscaVideo(termo)
        }
    }

    render() {
        return (
            <div className='searchBar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Buscar...'
                        onKeyDown={(e) => this.pesquisaTermo(e)}></Input>
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)