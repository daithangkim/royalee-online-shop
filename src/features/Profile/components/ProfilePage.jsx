import {useSelector} from "react-redux";

const ProfilePage = () => {
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

    return (
        <div>
            {isLoggedIn && 'Welcome back !'}
        </div>
    )
}
export default ProfilePage
