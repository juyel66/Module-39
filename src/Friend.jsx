export default function Friend({friend}){
    const FriendsStyle={
        border:"2px solid red",
        margin: "15px",
        padding:"15px",
        borderRadius:"15px"
    }

   const {name, email}=friend;
    return(
        <div style={FriendsStyle}>
        <h4>Name:{name} </h4>
        <p>Email: {email}</p>
        </div>
    )
}