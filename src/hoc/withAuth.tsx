import type {ReactNode} from "react";
import type {Task} from "../types/types.ts";

type Props = {
    addTask: (task: Task) => void;
    isLoggedIn: boolean;
}

const withAuth = (WrappedComponent: (props: Props) => ReactNode) => {
    return function AuthComponent(props: Props) {

        if(!props.isLoggedIn) {
            return <h2>Log in to add tasks</h2>
        }

        return <WrappedComponent {...props} />

    }
}

export default withAuth;