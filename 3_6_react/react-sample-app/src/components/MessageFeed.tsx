import * as React from 'react';
import { fetchMessages, Message } from '../client';
import { Segment, Image, Comment, Header } from 'semantic-ui-react';
import { Dimmer, Loader} from 'semantic-ui-react';
import Axios, { CancelTokenSource } from 'axios';

interface MessageFeedProps {
    channelName: string;
    shouldReload: boolean;
    setShouldReload: (shouldReload: boolean) => void;
}

interface MessageFeedState {
    messages: Message[];
    isLoading?: boolean;
}

export class MessageFeed extends React.Component<MessageFeedProps, MessageFeedState> {

    private cancelTokenSource: CancelTokenSource;

    constructor(props: MessageFeedProps) {
        super(props);
        this.state = {
            messages: [],
            isLoading: false
        };
        // this.cancelTokenSource = null;
    }

    public render() {
        if (this.state.isLoading) {
            return (
                <Dimmer active>
                    <Loader />
                </Dimmer>
            )
        }
        return (
            <Comment.Group>
                <Header as='h3' dividing>{this.props.channelName}</Header>
                {this.state.messages.slice().reverse().map(message=>
                    <Comment key={message.id}>
                        <Comment.Avatar src={message.user.avatar || '/img/avatar.png'} />
                        <Comment.Content>
                            <Comment.Author as='a'>{message.user.name}</Comment.Author>
                            <Comment.Metadata>
                                <div>{message.date}</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                {message.body}
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                )}
            </Comment.Group>
        );
    }
    
    private fetchMessages = (channelName: string) => {
        this.props.setShouldReload(false);

        this.setState({ isLoading: true });
        
        this.cancelTokenSource = Axios.CancelToken.source();
        fetchMessages(channelName, {}, this.cancelTokenSource.token)
        .then(response => {
            this.setState({ 
                messages: response.data.messages, 
                isLoading: false 
            });
        })
        .catch(err => {
            if (Axios.isCancel(err)) {
                console.log(err);
            } else {
                console.log(err);
                this.setState({
                    isLoading: false
                });
            }
        });
    }
    
    public componentWillUnmount() {
        if (this.cancelTokenSource) {
            this.cancelTokenSource.cancel('This component has been unmounted');
        }
    }

    public componentDidMount() {
        this.fetchMessages(this.props.channelName);
    }
    
    public componentDidUpdate(prevProps: MessageFeedProps) {
        if (prevProps.channelName !== this.props.channelName ||
            !prevProps.shouldReload && this.props.shouldReload) {
            this.fetchMessages(this.props.channelName);
        }
    }

    
}

