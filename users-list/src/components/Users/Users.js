import './users.css'

const Users = (props) =>
{
    return(<div className="user-control">
        {props.userlist.map(x => <div key={x.name}>{ x.name.concat('(',x.age, ' years old)')}</div>)}
    </div>)
}

export default Users