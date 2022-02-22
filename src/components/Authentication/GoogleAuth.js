import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn : null};

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
               clientId:'650215624391-23jfoq5gmjpd1f9u1qigd2nnl4mv93dl.apps.googleusercontent.com' ,
               scope:'email'
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }
    )}
    onAuthChange = ()=>{
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    }

    onSignIn = () =>{
        this.auth.signIn();
    }
    onSignOut = () =>{
        this.auth.signOut();
    }

    renderAuthButton(){

        if(this.state.isSignedIn === null){
            return null;
        }else if (this.state.isSignedIn === true){
            return (
                <button onClick = { this.onSignOut}>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button onClick = {this.onSignIn}>
                    Sign In With Google
                </button>
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

export default GoogleAuth;