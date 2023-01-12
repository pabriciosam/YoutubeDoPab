import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = props => {
    return (
        <div className='videoPlayer'>
            {
                !props.video.id && (
                    <Advertisement style={{ 'height': '433px' }} unit='top banner' test='Selecione um vídeo ao lado'></Advertisement>
                )
            }
            {
                props.video.id && (
                    <div>
                        <Embed id={props.video.id.videoId} source='youtube' placeholder=''></Embed>
                        <p className='videoTitulo'>{props.video.snippet.title}</p>
                        <p className='videoDescricao'>{props.video.snippet.description}</p>
                    </div>
                )
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)