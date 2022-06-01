import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoaderGif from '../../assets/img/loader.gif';
import "./FullPageLoader.css"

class FullPageLoader extends Component {
    state = {  }


    render() { 
        const {loading} = this.props;

        if(!loading) return null;

        return ( 
            <div class="loader-container">
                <div className="loader">
                    <img src={LoaderGif} />
                </div>
            </div>
         );
    }
}


const mapStateToProps = state => ({ loading: state.user.loading })

export default connect(mapStateToProps)(FullPageLoader);