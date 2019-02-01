import * as React from 'react';
import { <%= uCamelCName %>Props, in<%= uCamelCName %>State, in<%= uCamelCName %>InitialState } from './StateAndProps';
import { ACTIONS } from './Actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';


export const STATE_KEY = '<%= lowerCName %>';

class <%= uCamelCName %> extends React.Component<<%= uCamelCName %>Props, in<%= uCamelCName %>State>{
    constructor(props:<%= uCamelCName %>Props) {
        super(props);
        this.state = in<%= uCamelCName %>InitialState;
    }

    componentDidMount(){
    }

    render() {
        let {props, state} = this;

        return (
            <div className="<%= kebabCName %>">
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        <%= lowerCName %>State: state.<%= lowerCName %>
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(<%= uCamelCName %>);