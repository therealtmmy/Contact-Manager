import React from "react"

class AddContact extends React.Component {
    state = {
        image: "",
        name: "",
        email: "",
        phoneNumber: "",
        address: ""
    }

    handleImage = (e) => {
            const imageFile = e.target.files[0];
            if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            this.setState({
                image: imageUrl,
            }); 

            
            }
   
        }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!")
            return
        } 

        this.props.addContactHandler(this.state);
        this.setState({image: "", name: "", email: "", phoneNumber: "", address: ""})
        
    }

    render() {
        const {image} = this.setState

        return (
            <>
            <div className="ui main">
                <h2 style={{marginTop: "50px"}}>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                     <div className="field">
                        <label>Upload Image</label>
                        <input 
                        type="file" 
                        name="image"
                        accept="image/*"
                        onChange={this.handleImage}
                        />
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name"
                        value = {this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        placeholder="Name"
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email"
                        value = {this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                        placeholder="Email"
                        />
                    </div>
                    <div className="field">
                    <label>Phone Number</label>
                        <input 
                        type="text" 
                        name="phone number"
                        value = {this.state.phoneNumber}
                        onChange={(e) => this.setState({phoneNumber: e.target.value})}
                        placeholder="Phone Number"
                        />
                    </div>
                    <div className="field">
                    <label>Address</label>
                        <input 
                        type="text" 
                        name="address"
                        value = {this.state.address}
                        onChange={(e) => this.setState({address: e.target.value})}
                        placeholder="Address"
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
            </>
        )
    }
}

export default AddContact