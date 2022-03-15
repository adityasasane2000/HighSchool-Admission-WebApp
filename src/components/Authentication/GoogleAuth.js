import React from 'react';
import "../Authentication/GoogleAuth.css"
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'
class GoogleAuth extends React.Component
{

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
               clientId:'650215624391-23jfoq5gmjpd1f9u1qigd2nnl4mv93dl.apps.googleusercontent.com' ,
               scope:'email'
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }
    )}
    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }
    onSignOutClick = () =>{
        this.auth.signOut();
    }

    renderAuthButton(){

        if(this.props.isSignedIn === null){
            console.log("hello")
          return null;
        }else if (this.props.isSignedIn === true){
            return (
                <Button className='signout-button' variant="danger" onClick = { this.onSignOutClick}>
                    Sign Out
                </Button>
                
            );
        }else{
            return (
                <GoogleButton className='signin-button' onClick = {this.onSignInClick}
                />

                // <button className='signin-button' onClick = {this.onSignIn}>
                //     Sign In With Google
                // </button>
             
            );
        }
    }

    render() {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
